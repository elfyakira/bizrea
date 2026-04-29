import { NextRequest, NextResponse } from "next/server";
import { googleForm } from "@/lib/site";

interface ValidationError {
  field: string;
  message: string;
}

interface ContactFormData {
  inquiry: string;
  company: string;
  name: string;
  phone?: string;
  email: string;
  message?: string;
  privacy: boolean;
}

function validateContactForm(data: ContactFormData): ValidationError[] {
  const errors: ValidationError[] = [];

  if (!data.inquiry || data.inquiry.trim().length === 0) {
    errors.push({ field: "inquiry", message: "ご相談内容をお選びください" });
  }
  if (!data.company || data.company.trim().length === 0) {
    errors.push({ field: "company", message: "会社名をご入力ください" });
  } else if (data.company.length > 100) {
    errors.push({ field: "company", message: "会社名は100文字以内で入力してください" });
  }
  if (!data.name || data.name.trim().length === 0) {
    errors.push({ field: "name", message: "ご担当者名をご入力ください" });
  } else if (data.name.length > 100) {
    errors.push({ field: "name", message: "ご担当者名は100文字以内で入力してください" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || data.email.trim().length === 0) {
    errors.push({ field: "email", message: "メールアドレスをご入力ください" });
  } else if (!emailRegex.test(data.email)) {
    errors.push({ field: "email", message: "正しいメールアドレスをご入力ください" });
  }

  if (data.phone) {
    const phoneRegex = /^[0-9\-+() ]+$/;
    if (!phoneRegex.test(data.phone)) {
      errors.push({ field: "phone", message: "正しい電話番号をご入力ください" });
    }
  }

  if (data.message && data.message.length > 5000) {
    errors.push({ field: "message", message: "お問い合わせ内容は5000文字以内で入力してください" });
  }

  if (!data.privacy) {
    errors.push({ field: "privacy", message: "プライバシーポリシーへの同意が必要です" });
  }

  return errors;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    const errors = validateContactForm(body);
    if (errors.length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const params = new URLSearchParams();
    params.append(googleForm.entries.inquiry, body.inquiry);
    params.append(googleForm.entries.company, body.company);
    params.append(googleForm.entries.name, body.name);
    if (body.phone) params.append(googleForm.entries.phone, body.phone);
    params.append(googleForm.entries.email, body.email);
    if (body.message) params.append(googleForm.entries.message, body.message);
    params.append(googleForm.entries.privacy, googleForm.privacyValue);

    const res = await fetch(googleForm.formUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });

    // Googleフォームは送信成功時にリダイレクトを返す（200 or 0）
    // fetchはリダイレクトを追跡しないため、status が 0/200/302 のいずれかなら成功とみなす
    if (!res.ok && res.status !== 0 && res.status !== 302) {
      console.error("Google Form submission failed:", res.status, res.statusText);
      return NextResponse.json(
        {
          success: false,
          errors: [{ field: "general", message: "送信中にエラーが発生しました。しばらくしてから再度お試しください。" }],
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "お問い合わせを受け付けました。",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        success: false,
        errors: [{ field: "general", message: "送信中にエラーが発生しました。" }],
      },
      { status: 500 }
    );
  }
}
