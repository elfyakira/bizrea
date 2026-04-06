export interface Company {
  id: string;
  name: string;
  industry: string;
  region: string;
  president: string;
  catchphrase: string;
  desc: string;
  image: string;
  heroImage: string;
  founded: string;
  address: string;
  business: string;
  employees: string;
  url: string;
  recruitmentUrl: string;
  leadText: string;
  interviewDate: string;
  videoId: string;
  chapters: {
    title: string;
    content: string;
  }[];
  quotes: string[];
  photos: {
    src: string;
    caption: string;
  }[];
  companyInfo: { label: string; value: string }[];
}

export const companies: Company[] = [
  {
    id: "company-a",
    name: "株式会社○○製作所",
    industry: "製造業",
    region: "愛知県",
    president: "代表取締役 山田 太郎",
    catchphrase: "\"ものづくりの先に、人がいる。\"",
    desc: "精密部品メーカー。社長インタビューを通じて、ものづくりへのこだわりを言語化。営業ツールとして活用中。",
    image: "/images/case-placeholder.jpg",
    heroImage: "/images/case-hero-placeholder.jpg",
    founded: "1985年",
    address: "愛知県名古屋市中区○○町1-2-3",
    business: "精密部品の設計・製造・販売",
    employees: "120名",
    url: "https://example.com",
    recruitmentUrl: "https://example.com/recruit",
    leadText: "愛知県名古屋市で創業40年。精密部品の製造を手がける株式会社○○製作所の代表取締役・山田太郎氏に話を聞いた。穏やかな口調の中に、ものづくりへの揺るぎない信念と、社員への深い愛情が滲む。\"いい会社\"の本質が、ここにある。",
    interviewDate: "2026年3月15日",
    videoId: "dQw4w9WgXcQ",
    chapters: [
      {
        title: "創業の原点——\"誰のために働くのか\"を問い続けた日々",
        content: "——創業のきっかけを教えてください。\n\n山田氏: もともと大手メーカーで10年ほど働いていたんです。技術力には自信がありました。でもある時、自分がつくっているものが誰の役に立っているのか、まったく見えなくなった。組織が大きすぎて、お客さんの顔が見えない。\n\nそれで、32歳の時に独立しました。最初は自宅の一室から。妻には相当心配されましたね（笑）。\n\n——最初は苦労されたのでしょうか。\n\n山田氏: もちろん。最初の1年は売上ゼロの月もありました。でも、ひとつだけ決めていたことがあるんです。\"目の前のお客さんが本当に困っていることを、本気で解決する\"。それだけはブレなかった。",
      },
      {
        title: "社員は家族——離職率2%の組織づくり",
        content: "——御社の離職率が非常に低いと聞きました。\n\n山田氏: うちの社員が辞めたいと言ってきた時、僕は必ず2時間話を聞くんです。それで辞めるなら仕方ない。でも、話を聞いたら解決することのほうが多い。\n\n結局、人は\"聞いてもらえた\"と感じるだけで、気持ちが変わるんですよ。技術を教えるより、まず話を聞く。それがうちの文化です。\n\n——具体的にどんな取り組みをされていますか？\n\n山田氏: 毎月1回、全社員と30分ずつ面談しています。120人いるから、月の半分は面談ですよ（笑）。でも、これをやめるつもりはない。社員の顔を見て、声を聞いて、初めてわかることがある。",
      },
      {
        title: "次の40年へ——\"いい会社\"であり続けるために",
        content: "——これからの展望を教えてください。\n\n山田氏: 正直に言うと、売上を2倍にしたいとか、そういう目標はないんです。それよりも、\"ここで働いてよかった\"と社員が思える会社であり続けたい。\n\nお客さんにも、取引先にも、地域にも、\"あの会社はいい会社だよね\"と言ってもらえる。それが一番の財産だと思っています。\n\n——最後に、この記事を読んでいる方へメッセージをお願いします。\n\n山田氏: うちに興味を持ってくれたなら、まずは工場を見に来てください。きれいなパンフレットよりも、実際の現場を見てもらうのが一番です。社員が生き生き働いている姿を見れば、うちがどういう会社か、すぐにわかると思います。",
      },
    ],
    quotes: [
      "うちの社員が辞めたいと言ってきた時、僕は必ず2時間話を聞く。それで辞めるなら仕方ない。でも、話を聞いたら解決することのほうが多いんです。",
    ],
    photos: [
      { src: "/images/case-photo-01.jpg", caption: "社員と打ち合わせ中の山田社長。現場との距離の近さがこの会社の強みだ。" },
      { src: "/images/case-photo-02.jpg", caption: "創業時から使い続けている旋盤の前で。\"この機械が原点です\"と語る。" },
    ],
    companyInfo: [
      { label: "企業名", value: "株式会社○○製作所" },
      { label: "代表者", value: "山田 太郎" },
      { label: "設立", value: "1985年" },
      { label: "所在地", value: "愛知県名古屋市中区○○町1-2-3" },
      { label: "事業内容", value: "精密部品の設計・製造・販売" },
      { label: "従業員数", value: "120名" },
      { label: "URL", value: "https://example.com" },
    ],
  },
  {
    id: "company-b",
    name: "○○建設株式会社",
    industry: "建設業",
    region: "岐阜県",
    president: "代表取締役 佐藤 一郎",
    catchphrase: "\"建てるのは建物じゃない、信頼だ。\"",
    desc: "地域密着の総合建設会社。Bizreaの記事を商談前に送付し、成約率が大幅に向上。",
    image: "/images/case-placeholder.jpg",
    heroImage: "/images/case-hero-placeholder.jpg",
    founded: "1972年",
    address: "岐阜県岐阜市○○町4-5-6",
    business: "総合建設業（公共工事・民間建築）",
    employees: "85名",
    url: "https://example.com",
    recruitmentUrl: "https://example.com/recruit",
    leadText: "岐阜県で50年以上の歴史を持つ○○建設株式会社。代表取締役の佐藤一郎氏は、二代目として会社を引き継ぎ、地域に根差した経営を続けてきた。\"建物をつくる仕事\"ではなく\"信頼をつくる仕事\"。その言葉の意味を、インタビューで紐解く。",
    interviewDate: "2026年2月20日",
    videoId: "jNQXAC9IVRw",
    chapters: [
      {
        title: "二代目の葛藤——父の背中と、自分の道",
        content: "——二代目として会社を継いだ経緯を教えてください。\n\n佐藤氏: 正直に言うと、最初は継ぐつもりはなかったんです。東京の大手ゼネコンで10年働いて、自分のキャリアを築いていた。でも、父が倒れた時に、会社の社員たちの顔が浮かんだ。\"この人たちの生活を守れるのは自分しかいない\"と。\n\n——帰ってきて最初に取り組んだことは？\n\n佐藤氏: まず、全社員と面談しました。何が不満で、何が楽しくて、この会社をどうしたいか。聞いてみたら、驚くほど真剣に答えてくれた。",
      },
      {
        title: "地域と共に——\"いい仕事\"の定義",
        content: "——御社が考える\"いい仕事\"とは何でしょうか。\n\n佐藤氏: うちが建てた建物を、10年後に通りかかった時に、\"ああ、いい建物だな\"と思えるかどうか。それに尽きます。\n\n工期やコストも大事ですが、それだけを追いかけると、結局誰も幸せにならない。お客さんも、職人も、地域の人も、みんなが\"よかった\"と思える仕事。それが僕たちの目指すところです。",
      },
    ],
    quotes: [
      "うちが建てた建物を、10年後に通りかかった時に、\"ああ、いい建物だな\"と思えるかどうか。それに尽きます。",
    ],
    photos: [
      { src: "/images/case-photo-01.jpg", caption: "現場を見回る佐藤社長。\"現場に出ない社長はダメだ\"が口癖。" },
    ],
    companyInfo: [
      { label: "企業名", value: "○○建設株式会社" },
      { label: "代表者", value: "佐藤 一郎" },
      { label: "設立", value: "1972年" },
      { label: "所在地", value: "岐阜県岐阜市○○町4-5-6" },
      { label: "事業内容", value: "総合建設業（公共工事・民間建築）" },
      { label: "従業員数", value: "85名" },
      { label: "URL", value: "https://example.com" },
    ],
  },
  {
    id: "company-c",
    name: "株式会社○○物流",
    industry: "物流業",
    region: "三重県",
    president: "代表取締役 鈴木 健二",
    catchphrase: "\"届けるのは荷物じゃない、約束だ。\"",
    desc: "東海エリアを中心とした物流企業。採用サイトにBizrea動画を導入し、応募者の質が変化。",
    image: "/images/case-placeholder.jpg",
    heroImage: "/images/case-hero-placeholder.jpg",
    founded: "1998年",
    address: "三重県四日市市○○町7-8-9",
    business: "一般貨物自動車運送事業、倉庫業",
    employees: "200名",
    url: "https://example.com",
    recruitmentUrl: "https://example.com/recruit",
    leadText: "三重県四日市市を拠点に、東海エリアの物流を支える株式会社○○物流。代表取締役の鈴木健二氏は、ドライバー出身の叩き上げ社長だ。\"届けるのは荷物じゃない\"——その言葉の真意に迫る。",
    interviewDate: "2026年1月25日",
    videoId: "9bZkp7q19f0",
    chapters: [
      {
        title: "ドライバーから社長へ——現場を知る経営者",
        content: "——ドライバーから社長になるまでの経緯を教えてください。\n\n鈴木氏: 18歳でこの会社に入って、最初の15年はずっとハンドルを握っていました。雨の日も雪の日も。お客さんの顔を見て荷物を届ける。その繰り返しの中で、\"この仕事の本質は何か\"が見えてきた。\n\n——それは何でしょうか。\n\n鈴木氏: 信頼です。時間通りに届ける。破損なく届ける。それは当たり前。でも、その\"当たり前\"を毎日100%やり切ることが、実は一番難しい。",
      },
      {
        title: "採用が変わった——Bizreaがもたらした変化",
        content: "——Bizrea導入後、採用面でどんな変化がありましたか？\n\n鈴木氏: 一番変わったのは、応募者の\"質\"ですね。以前は条件——給料がいくら、休みが何日——だけを見て来る人が多かった。でもBizreaの記事と動画を見てから応募してくる人は、\"社長の考えに共感しました\"って言うんです。\n\nそういう人は、入社後の定着率が全然違う。うちの離職率は、Bizrea導入後に半分以下になりました。",
      },
    ],
    quotes: [
      "時間通りに届ける。破損なく届ける。それは当たり前。でも、その\"当たり前\"を毎日100%やり切ることが、実は一番難しい。",
    ],
    photos: [
      { src: "/images/case-photo-01.jpg", caption: "早朝の出発前ミーティング。鈴木社長は毎朝ドライバーを見送る。" },
    ],
    companyInfo: [
      { label: "企業名", value: "株式会社○○物流" },
      { label: "代表者", value: "鈴木 健二" },
      { label: "設立", value: "1998年" },
      { label: "所在地", value: "三重県四日市市○○町7-8-9" },
      { label: "事業内容", value: "一般貨物自動車運送事業、倉庫業" },
      { label: "従業員数", value: "200名" },
      { label: "URL", value: "https://example.com" },
    ],
  },
  {
    id: "company-d",
    name: "○○食品株式会社",
    industry: "食品製造業",
    region: "愛知県",
    president: "代表取締役 田中 美穂",
    catchphrase: "\"食卓の笑顔は、工場から始まる。\"",
    desc: "老舗食品メーカー。社長の想いを雑誌化し、取引先への信頼構築ツールとして活用。",
    image: "/images/case-placeholder.jpg",
    heroImage: "/images/case-hero-placeholder.jpg",
    founded: "1960年",
    address: "愛知県豊橋市○○町10-11",
    business: "食品の製造・販売",
    employees: "95名",
    url: "https://example.com",
    recruitmentUrl: "",
    leadText: "愛知県豊橋市で60年以上続く老舗食品メーカー、○○食品株式会社。三代目の田中美穂氏は、家業を継いだ初の女性社長だ。\"食卓の笑顔\"から逆算する経営哲学に迫る。",
    interviewDate: "2025年12月10日",
    videoId: "",
    chapters: [
      {
        title: "三代目、そして初の女性社長として",
        content: "——三代目として会社を継いだ経緯を教えてください。\n\n田中氏: 祖父が創業して、父が拡大して、私が継いだ。でも、\"女性だから\"という目で見られることは、正直たくさんありました。取引先に挨拶に行くと、\"社長は？\"って聞かれる。\"私です\"って言うと、驚かれる。\n\nでも、1年もすれば誰も言わなくなりました。結局、結果を出せば関係ないんです。",
      },
    ],
    quotes: [
      "結局、結果を出せば関係ないんです。",
    ],
    photos: [
      { src: "/images/case-photo-01.jpg", caption: "製造ラインを確認する田中社長。品質管理には一切妥協しない。" },
    ],
    companyInfo: [
      { label: "企業名", value: "○○食品株式会社" },
      { label: "代表者", value: "田中 美穂" },
      { label: "設立", value: "1960年" },
      { label: "所在地", value: "愛知県豊橋市○○町10-11" },
      { label: "事業内容", value: "食品の製造・販売" },
      { label: "従業員数", value: "95名" },
      { label: "URL", value: "https://example.com" },
    ],
  },
  {
    id: "company-e",
    name: "株式会社○○テック",
    industry: "IT・通信業",
    region: "愛知県",
    president: "代表取締役 伊藤 大輝",
    catchphrase: "\"コードの向こうに、人の暮らしがある。\"",
    desc: "成長中のIT企業。Bizreaを活用した採用ブランディングで、エンジニア採用に成功。",
    image: "/images/case-placeholder.jpg",
    heroImage: "/images/case-hero-placeholder.jpg",
    founded: "2015年",
    address: "愛知県名古屋市中村区○○町12-13",
    business: "業務システム開発、クラウドサービス提供",
    employees: "45名",
    url: "https://example.com",
    recruitmentUrl: "https://example.com/recruit",
    leadText: "名古屋市の中心部でクラウドサービスを展開する株式会社○○テック。創業10年で45名規模に成長した代表取締役・伊藤大輝氏が語る、\"地方IT企業\"の戦い方とは。",
    interviewDate: "2026年2月5日",
    videoId: "LXb3EKWsInQ",
    chapters: [
      {
        title: "名古屋発のIT企業として",
        content: "——なぜ東京ではなく、名古屋で創業したのでしょうか。\n\n伊藤氏: ITって、どこにいてもできる仕事なんです。でも、\"誰のためにやるか\"は場所によって変わる。名古屋には製造業を中心に、ITで解決できる課題を抱えた企業がたくさんある。東京の企業が見向きもしないような規模の案件に、本気で向き合う。それがうちの存在意義です。",
      },
    ],
    quotes: [
      "東京の企業が見向きもしないような規模の案件に、本気で向き合う。それがうちの存在意義です。",
    ],
    photos: [
      { src: "/images/case-photo-01.jpg", caption: "オフィスでチームミーティング中の伊藤社長。フラットな組織文化が特徴。" },
    ],
    companyInfo: [
      { label: "企業名", value: "株式会社○○テック" },
      { label: "代表者", value: "伊藤 大輝" },
      { label: "設立", value: "2015年" },
      { label: "所在地", value: "愛知県名古屋市中村区○○町12-13" },
      { label: "事業内容", value: "業務システム開発、クラウドサービス提供" },
      { label: "従業員数", value: "45名" },
      { label: "URL", value: "https://example.com" },
    ],
  },
  {
    id: "company-f",
    name: "○○工業株式会社",
    industry: "製造業",
    region: "岐阜県",
    president: "代表取締役 中村 誠",
    catchphrase: "\"技術は人が磨く。人は現場が育てる。\"",
    desc: "自動車部品メーカー。社員教育ツールとしてBizrea雑誌を活用し、定着率が向上。",
    image: "/images/case-placeholder.jpg",
    heroImage: "/images/case-hero-placeholder.jpg",
    founded: "1978年",
    address: "岐阜県各務原市○○町14-15",
    business: "自動車部品の製造・加工",
    employees: "150名",
    url: "https://example.com",
    recruitmentUrl: "https://example.com/recruit",
    leadText: "岐阜県各務原市で自動車部品を手がける○○工業株式会社。代表取締役の中村誠氏は、\"技術\"と\"人\"の両方にこだわる経営者だ。社員教育にBizreaを活用し、定着率向上を実現した取り組みに迫る。",
    interviewDate: "2026年3月1日",
    videoId: "",
    chapters: [
      {
        title: "技術の継承——熟練工の知恵を次世代へ",
        content: "——Bizreaを社員教育に活用していると聞きました。\n\n中村氏: そうなんです。Bizreaの雑誌に、うちの創業からの歩みと、私の想いを載せてもらった。それを新入社員研修で使っているんです。\n\n以前は私が直接話していたんですが、相手が社長だと緊張するでしょう？でも雑誌だと、自分のペースで読める。しかもインタビュー形式だから、堅苦しくない。\"社長って意外と普通の人なんだ\"って新入社員に言われました（笑）。",
      },
    ],
    quotes: [
      "雑誌だと、自分のペースで読める。しかもインタビュー形式だから、堅苦しくない。",
    ],
    photos: [
      { src: "/images/case-photo-01.jpg", caption: "若手社員に旋盤の使い方を教える中村社長。現場主義を徹底している。" },
    ],
    companyInfo: [
      { label: "企業名", value: "○○工業株式会社" },
      { label: "代表者", value: "中村 誠" },
      { label: "設立", value: "1978年" },
      { label: "所在地", value: "岐阜県各務原市○○町14-15" },
      { label: "事業内容", value: "自動車部品の製造・加工" },
      { label: "従業員数", value: "150名" },
      { label: "URL", value: "https://example.com" },
    ],
  },
];

export function getCompanyById(id: string): Company | undefined {
  return companies.find((c) => c.id === id);
}

export function getRelatedCompanies(currentId: string, count = 3): Company[] {
  const current = getCompanyById(currentId);
  if (!current) return companies.filter((c) => c.id !== currentId).slice(0, count);

  // Prefer same industry or region
  const related = companies
    .filter((c) => c.id !== currentId)
    .sort((a, b) => {
      const aScore = (a.industry === current.industry ? 2 : 0) + (a.region === current.region ? 1 : 0);
      const bScore = (b.industry === current.industry ? 2 : 0) + (b.region === current.region ? 1 : 0);
      return bScore - aScore;
    });

  return related.slice(0, count);
}
