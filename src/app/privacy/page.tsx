import PageHero from "@/components/PageHero";
import { contact } from "@/lib/site";

const EFFECTIVE_DATE = "2026年5月21日";

const h2 = "text-[20px] max-lg:text-[18px] font-bold text-[#1B2D4F] mt-12 max-lg:mt-10 mb-4";
const p = "text-[15px] max-lg:text-[14px] text-[#5A5A5A] leading-[1.9]";

export default function PrivacyPage() {
  const companyName = "株式会社Bizreaメディア";

  return (
    <main>
      <PageHero title="プライバシーポリシー" subtitle="個人情報の取り扱いについて" />

      <section className="bg-white py-[100px] max-lg:py-14">
        <div className="max-w-[780px] mx-auto px-6">
          <p className={p}>
            {companyName}（以下、「当社」）は、お客様の個人情報を適切に保護することを重要な社会的責務と認識し、以下のとおり個人情報保護方針を定め、これを遵守いたします。
          </p>

          <h2 className={h2}>1. 個人情報の定義</h2>
          <p className={p}>
            個人情報とは、氏名、会社名、電話番号、メールアドレスなど、特定の個人を識別できる情報をいいます。
          </p>

          <h2 className={h2}>2. 個人情報の収集</h2>
          <p className={p}>
            当社は、お問い合わせフォーム、取材・掲載のお申し込み等を通じて、お客様の個人情報を収集することがあります。収集に際しては、利用目的を明示し、適法かつ公正な手段により行います。
          </p>

          <h2 className={h2}>3. 個人情報の利用目的</h2>
          <p className={`${p} mb-4`}>当社は、収集した個人情報を以下の目的で利用いたします。</p>
          <ul className={`${p} list-disc pl-6 space-y-2`}>
            <li>お問い合わせへの回答</li>
            <li>お見積り・ご提案の作成・送付</li>
            <li>取材・撮影・制作物に関するご連絡</li>
            <li>サービスに関する情報のご提供</li>
            <li>その他、お客様との契約・取引に関する業務</li>
          </ul>

          <h2 className={h2}>4. 個人情報の第三者提供</h2>
          <p className={p}>
            当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
          </p>

          <h2 className={h2}>5. 個人情報の安全管理</h2>
          <p className={p}>
            当社は、個人情報の漏洩、滅失、毀損を防止するため、必要かつ適切な安全管理措置を講じます。
          </p>

          <h2 className={h2}>6. アクセス解析ツールについて</h2>
          <p className={p}>
            当サイトでは、サービス向上のため Google アナリティクスを利用しています。Google アナリティクスは Cookie を使用してアクセス情報を収集しますが、個人を特定する情報は含まれません。Cookie はブラウザの設定で無効にすることができます。
          </p>

          <h2 className={h2}>7. 個人情報の開示・訂正・削除</h2>
          <p className={p}>
            お客様ご本人から個人情報の開示、訂正、削除のご請求があった場合は、ご本人確認のうえ、適切に対応いたします。
          </p>

          <h2 className={h2}>8. お問い合わせ</h2>
          <p className={`${p} mb-6`}>個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。</p>
          <div className={`${p} bg-[#F6F4F1] p-6 rounded-lg`}>
            <p>{companyName}</p>
            {contact.phone && <p>TEL: {contact.phoneFormatted || contact.phone}</p>}
            {contact.hours && <p>受付時間: {contact.hours}</p>}
            {contact.email && <p>メール: {contact.email}</p>}
          </div>

          <p className="text-[13px] text-[#5A5A5A] mt-12">制定日: {EFFECTIVE_DATE}</p>
        </div>
      </section>
    </main>
  );
}
