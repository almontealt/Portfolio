import WorksCard from "../WorksCard";
import styles from "./index.module.scss";
import { worksType } from "../../../../app/detileInfo";

const Works = () => {
  // 出張経費申請サービス
  const BusinessTripExpenseApplicationService: worksType = {
    ImageURL:
      "/BusinessTripExpenseApplicationService/BusinesBusinessTripExpenseApplicationService_main.jpg",
    TopImage:
      "/BusinessTripExpenseApplicationService/BusinessTripExpenseApplicationService_top.jpg",
    title: "出張申請サービス",
    category: "webサイト",
    Isclient: "自主制作",
    overView: "出張の経費申請~承認までを管理できる社内用webアプリ",
    scoop: "design",
    tool: "figma",
    schedule: "2024/2/22~2/23",
    prototypeURL:
      "https://www.figma.com/proto/AANQJcihFsrTJAPIVfbH5C/Bono(%E4%BF%AE%E6%AD%A3%E7%94%A8)?page-id=0%3A1&type=design&node-id=1-795&viewport=6562%2C733%2C0.2&t=LrVjfnCPCM7pLHXE-1&scaling=min-zoom&starting-point-node-id=1%3A239&mode=design",
    CreationFlow_spTb: "/sixStepFlow_sp.jpg",
    CreationFlow_pc: "/sixStepFlow_pc.jpg",

    // ---
    purpose1:
      "今まで紙で出張の経費申請をしてきたが、事業拡大し社員数の増加や社内のペーパーレス化に伴って、新規サービスを利用したい",
    purpose2:
      "出張の経費申請~承認/却下のフローをできるようにし、申請のフローを可視化できるようにする",
    concept1: "・操作が直感的にわかりやすい",
    // consept2: "",
    target1: "出張が多い営業の20~50代",
    target2: "社内の経理担当20~50代",
    // target3: "",
    IllustrationSp:
      "/BusinessTripExpenseApplicationService/BusinessTripExpenseApplicationService_inset_sp.jpg",
    IllustrationPcTb:
      "/BusinessTripExpenseApplicationService/BusinessTripExpenseApplicationService_inset_pc.svg",
    // ---
    oneKnotTtl: "1 ミス防止対策",
    oneKnotTxt1:
      "申請入力確認画面では、申請するユーザーに必ず下まで確認してから「申請」ボタンを押して欲しかったため、ボタンを画面の下に設置。画面が長いため離脱防止で画面上部に設置することも考えたが、今回のサービスは社内向けかつ確認が重要な画面のため、基本的に画面下部にボタンを設置",
    oneKnotTxt2:
      "申請の入力する項目が多いため、文字数などの簡単なバリデーションとAPIを使用したデータベースとのバリデーションを分けた。軽微な修正内容に関しては、リアルタイムでフォーム下にエラー内容を表示することで、ユーザーにエラー場所の特定・その場で修正してもらい、入力するストレスを極力少なくした",
    twoKnotTtl: "2 離脱防止",
    twoKnotTxt1:
      "申請入力する項目が多いため、1つの情報で使いまわせる箇所は自動入力で対応。追加で入力が必要な場合のみ入力フォームを増やせる「追加ボタン」の設置をした",
    twoKnotTxt2:
      "現在どこで申請が止まっているかステータスを表示し、申請者も承認者も可視化できるようにした",
    ImprovementPoints1:
      "申請の入力内容が多いので、もう少し自動入力など入力するストレスを減らす方法を考える",
    ImprovementPoints2:
      "レシートなどの撮影はSP版の方が効率的など利用できるため、SP版でも利用できるよう再度検討する",
    ImprovementPoints3:
      "クレジットカード連携などもできるようにすると、レシートをもらう手間や写真に収める手間を省けて良いかもしれないが、経費申請としてクレカでも可能か検討の余地がある",

    // ---
    mainVisual_sp:
      "/BusinessTripExpenseApplicationService/BusinessTripExpenseApplicationService_spTbPc.jpg",
    mainVisual_tb:
      "/BusinessTripExpenseApplicationService/BusinessTripExpenseApplicationService_spTbPc.jpg",
    mainVisual_pc:
      "/BusinessTripExpenseApplicationService/BusinessTripExpenseApplicationService_spTbPc.jpg",
  };
  // サブスク管理アプリ
  const SubscriptionManagementApp: worksType = {
    ImageURL: "/SubscriptionManagementApp/SubscriptionManagementApp_main.jpg",

    TopImage: "/SubscriptionManagementApp/SubscriptionManagementApp_main.jpg",
    title: "サブスク管理アプリ",
    category: "アプリ",
    Isclient: "自主制作",
    overView: "すぼらな人でもできるサブスクの管理（内容、料金把握）アプリ",
    scoop: "design",
    tool: "figma",
    schedule: "2024/1/22~1/27",
    prototypeURL:
      "https://www.figma.com/proto/NmlhQbTrrFIDBw17DIfjFj/%E3%82%B5%E3%83%96%E3%82%B9%E3%82%AF%E7%AE%A1%E7%90%86%E3%82%A2%E3%83%97%E3%83%AA?page-id=119%3A8573&type=design&node-id=119-8842&viewport=1140%2C922%2C0.13&t=b5NGnvkSL2tFR4ZZ-1&scaling=min-zoom&starting-point-node-id=119%3A8936&mode=design",
    CreationFlow_spTb: "/sixStepFlow_sp.jpg",
    CreationFlow_pc: "/sixStepFlow_pc.jpg",
    // ---
    purpose1:
      "なんのサブスクに入っているか不明で、無駄な支出（=サブスク）がないか確認したい",
    purpose2: "サブスクを管理し無駄な支出がない状態",
    concept1: "すぼらな人でもできるサブスク管理",
    // consept2: "",
    target1: "いろんな新しいものに興味がある",
    target2: "お金の管理が苦手",
    target3: "年始に毎年貯金の目標を立てている",
    target4: "家計簿まではつけたくない人",
    IllustrationSp:
      "/SubscriptionManagementApp/SubscriptionManagementApp_inset_sp.svg",
    IllustrationPcTb:
      "/SubscriptionManagementApp/SubscriptionManagementApp_inset.svg",
    // ---
    oneKnotTxt1:
      "サブスクを手入力する方法としてクレジットカードと連携することで、ユーザーのめんどくささを除いた。",
    oneKnotTxt2:
      "毎月の支払い前に、サブスクを更新することに問題ないか通知でユーザーに知らせる設定をした",
    oneKnotTxt3:
      "「更新3日前」や「トライアル期間中」など、退会忘れがないよう、一覧や詳細で目立つように表示した",

    // ImprovementPoints1: "・サブスクを手入力する方法としてクレジットカードと連携することで、ユーザーのめんどくささを除いた。",
    // ImprovementPoints2: "・毎月の支払い前に、サブスクを更新することに問題ないか通知でユーザーに知らせる設定をした",
    // ImprovementPoints3: "・「更新3日前」や「トライアル期間中」など、退会忘れがないよう、一覧や詳細で目立つように表示した",
    ImprovementPoints1:
      "サブスクが不要だった場合、退会まで進める動線にしたかったが、各アプリによって退会の方法が異なるため、webサイトに遷移し自分で退会できるに遷移する方法にした。",
    ImprovementPoints2:
      "今回はサブスクだけだったが、水道代などもサブスク扱いになりそうなため、サブスク管理→家計簿に進化する可能性を感じた。ただし、複雑にならないよう配慮する（離脱するユーザーが多いため）",
    ImprovementPoints3:
      "親しみやすいようによりPOPなデザインに変更できるような機能をつけても良いかもしれない（キャラクターが励ますことでモチベーション向上につながる）",

    // ---
    mainVisual_sp: "/SubscriptionManagementApp/SubscriptionManagementApp.svg",
    mainVisual_tb:
      "/SubscriptionManagementApp/SubscriptionManagementApp_pc.svg",
    mainVisual_pc:
      "/SubscriptionManagementApp/SubscriptionManagementApp_pc.svg",
  };
  // デザイン学習サムネイル
  const UIUXdesignLearningThumbnail: worksType = {
    ImageURL:
      "/UIUXdesignLearningThumbnail/UIUXdesignLearningThumbnail_main.jpg",
    TopImage:
      "/UIUXdesignLearningThumbnail/UIUXdesignLearningThumbnail_main.jpg",

    title: "デザイン学習サムネイル",
    category: "バナー",
    Isclient: "自主制作",
    overView: "UIデザインの学習方法を知ることができる診断のサムネイル",
    scoop: "design",
    tool: "figma",
    schedule: "2024/1/22~1/27",
    CreationFlow_spTb: "/fiveStepFlow_spTb.jpg",
    CreationFlow_pc: "/fiveStepFlow_pc.jpg",
    // ---
    purpose1:
      "ユーザーに自分の学習方法のタイプを知ってもらい、効率よく学習してもらう",
    purpose2: "ユーザーの学習のやる気を上げる",
    purpose3: "学習内容の不安軽減",
    concept1: "安心感、不安軽減",
    concept2: "ゴールに向かっていくイメージ",
    target1: "UIデザイナーやUIデザインの学習をしたい20代~30代",
    IllustrationSp: "",
    IllustrationPcTb: "",
    // ---
    oneKnotTxt1:
      "学習意欲の高い＆どうやって勉強したら良いわからず不安を抱えているユーザーに、山に登っているようなイラストで「今ゴールに向かって進んでいるよ。ゴールに必ずたどり着くよ」というメッセージ性を込めた",
    oneKnotTxt2:
      "落ち着いた印象で、不安感を取り除きたかった。意欲を掻き立てるPOPなデザインというよりは、確実に１歩１歩進めるイメージ。かっこいい感じではなく、イラストを使用して雰囲気を柔らかく進みやすいようなイメージ",
    oneKnotTxt3: "進む先に「UIUX」の文字を置くことで、ゴールを示した",

    //---
    ImprovementPoints1:
      "落ち着き感が出過ぎており訴求が伝わっていないため、訴求感をもう少し出す",

    // ---
    mainVisual_sp:
      "/UIUXdesignLearningThumbnail/UIUXdesignLearningThumbnail_spTbPc.svg",
    mainVisual_tb:
      "/UIUXdesignLearningThumbnail/UIUXdesignLearningThumbnail_spTbPc.svg",
    mainVisual_pc:
      "/UIUXdesignLearningThumbnail/UIUXdesignLearningThumbnail_spTbPc.svg",
  };
  // todo管理アプリ
  // const todoManagementApp: worksType = {
  //   ImageURL: "",
  //   TopImage: "",
  //   title: "ToDo管理アプリ",
  //   category: "webサイト",
  //   Isclient: "自主制作",
  //   overView: "",
  //   scoop: "design",
  //   tool: "figma",
  //   schedule: "2024/2/22~2/23",
  //   prototypeURL: "2024/2/22~2/23",
  // CreationFlow_spTb: "/fiveStepFlow_spTb.jpg",
  // CreationFlow_pc: "/fiveStepFlow_pc.jpg",

  //   // ---
  //   purpose1: "",
  //   purpose2: "",
  //   concept1: "",
  //   // consept2: "",
  //   target1: "",
  //   target2: "",
  //   // target3: "",
  //   IllustrationSp: "",
  //   IllustrationPcTb: "",
  //   // ---
  //   oneKnotTtl: "",
  //   oneKnotTxt1: "",
  //   oneKnotTxt2: "",
  //   twoKnotTtl: "",

  //   ImprovementPoints1: "",
  //   ImprovementPoints2: "",
  //   ImprovementPoints3: "",

  //   // ---
  //   mainVisual_sp: "",
  //   mainVisual_tb: "",
  //   mainVisual_pc: "",
  // };
  // バナー_セール
  const saleBanner: worksType = {
    ImageURL: "/sale/sele_main.jpg",
    TopImage: "/sale/sele_main.jpg",
    title: "ウィンターセール",
    category: "バナー",
    Isclient: "自主制作",
    overView: "ウィンターセールのバナー",
    scoop: "design",
    tool: "figma",
    schedule: "2024/1/22~1/27",
    CreationFlow_spTb: "/fiveStepFlow_spTb.jpg",
    CreationFlow_pc: "/fiveStepFlow_pc.jpg",

    // ---
    purpose1: "Tokyoモールへの来店",
    concept1: "POPで楽しい感じ",
    concept2: "買い物するわくわく感",
    target1: "15~20代の女性",
    target2: "買い物好きの女性",

    // ---
    oneKnotTxt1:
      "POP感が出るように、色々な柄や商品の画像を散りばめ、文字に動きをつけた",
    oneKnotTxt2: "ビビットカラーを使用することでPOP感の演出をした",
    oneKnotTxt3:
      "お得！行きたい！と思ってもらえるように、安さの「50%」の文字を大きく、目立つような色を使用し訴求した",

    // ---
    mainVisual_sp: "/sale/sele_sp.svg",
    mainVisual_tb: "/sale/sele_pc.svg",
    mainVisual_pc: "/sale/sele_pc.svg",
  };
  // バナー_ヘアケア
  const hairCareBanner: worksType = {
    ImageURL: "/hairCar/hairCare_main.jpg",
    TopImage: "/hairCar/hairCare_main.jpg",
    title: "ヘアケア商品",
    category: "Banner",
    Isclient: "自主制作",
    overView: "ヘアケア商品のバナー",
    scoop: "design",
    tool: "figma",
    schedule: "2024/1/22~1/27",
    CreationFlow_spTb: "/fiveStepFlow_spTb.jpg",
    CreationFlow_pc: "/fiveStepFlow_pc.jpg",
    // ---
    purpose1: "新発売商品の購入",
    concept1: "水がしたたる透明感",
    concept2: "シンプル",
    target1: "20~30代女性",
    // ---
    oneKnotTxt1:
      "透明感が出るように、フォントの選定・クリアな透明感が出るよう画像の調整・商品を水面に映っているようにした",
    oneKnotTxt2:
      "「髪のうるおい計画化」の下のborderは波がっているようなイメージで、中央が太く、端にいくにつれて細くなるようにし世界観の統一をした",
    oneKnotTxt3:
      "新発売の◯を、繊細で透明感のある世界観を出すように、細い線を使用した",

    // ---
    mainVisual_sp: "/hairCar/hairCare_sp.svg",
    mainVisual_tb: "/hairCar/hairCare_pc.svg",
    mainVisual_pc: "/hairCar/hairCare_pc.svg",
  };
  // バナー_ハンバーガー
  const hamburgerBanner: worksType = {
    ImageURL: "/hamburger/hamburger_main.jpg",
    TopImage: "/hamburger/hamburger_main.jpg",
    title: "ハンバーガー",
    category: "Banner",
    Isclient: "自主制作",
    overView: "新商品のハンバーガーのバナー",
    scoop: "design",
    tool: "figma",
    schedule: "2024/1/22~1/27",
    CreationFlow_spTb: "/fiveStepFlow_spTb.jpg",
    CreationFlow_pc: "/fiveStepFlow_pc.jpg",
    // ---
    purpose1: "新商品の購入、認知",
    concept1: "ワクワク感",
    concept2: "ハンバーガーのジューシー感",
    target1: "10代~30代前半男性",
    target2: "通勤・通学中の男性",
    // ---
    oneKnotTxt1:
      "情報量が多いため、口コミのコメントを大きくすることで注目を集める&食べたくなる心境にした",
    oneKnotTxt2: "文字を右斜め上にすることで、わくわく感や高揚感を出した",
    oneKnotTxt3:
      "「うまさの秘訣は？」のボタンにシャドウを入れ、ボタン押せる感を演出",
    oneKnotTxt4:
      "ハンバーガーにジューシー感が出るよう画像を調整し、お肉のジューシーさやチーズのトロッ感を増加させた",
    oneKnotTxt5:
      "ハンバーガーへの注目度を高めるため、背景色を円形にグラデーションをかけた",

    // ---
    mainVisual_sp: "/hamburger/hamburger_spTb.svg",
    mainVisual_tb: "/hamburger/hamburger_spTb.svg",
    mainVisual_pc: "/hamburger/hamburger_pc.svg",
  };
  // バナー_転職
  const jobChangeBanner: worksType = {
    ImageURL: "/jobChange/jobChange_main.jpg",
    TopImage: "/jobChange/jobChange_main.jpg",
    title: "転職エージェント",
    category: "Banner",
    Isclient: "自主制作",
    overView: "転職エージェントのバナー",
    scoop: "design",
    tool: "figma",
    schedule: "2024/1/22~1/27",
    CreationFlow_spTb: "/fiveStepFlow_spTb.jpg",
    CreationFlow_pc: "/fiveStepFlow_pc.jpg",
    // ---
    purpose1: "転職エージェントへの登録",
    concept1: "高級感、ハイクラス感",
    concept2: "「仕事出来る男」の特別感",
    target1: "キャリア思考の30代~40代後半の男性",
    target2: "自分の市場価値を知りたい、独立心の高い男性",
    target3: "転職を考えている男性",
    // ---
    oneKnotTxt1: "男性的でシャープで高級感のある落ち着いた色の選定",
    oneKnotTxt2: "次のステップ感を出す、矢印を使用",
    oneKnotTxt3: "スーツ姿で、腕時計ややネクタイを見せることで、できる男の演出",
    oneKnotTxt4:
      "文字の色にゴールドを使用することで、お金・ステータス・高級感を演出",
    oneKnotTxt5:
      "バナー要素の配置位置をzの形にし、ストーリー仕立てに読みやすい構図にした",

    // ---
    mainVisual_sp: "/jobChange/jobChange_sp.svg",
    mainVisual_tb: "/jobChange/jobChange_pc.svg",
    mainVisual_pc: "/jobChange/jobChange_pc.svg",
  };
  // バナー_女性誌
  const womensMagazineBanner: worksType = {
    // ImageURL: "/女性誌バナー_main.jpg",
    ImageURL: "/women'sMagazine/women'sMagazine_main.jpg",
    TopImage: "/women'sMagazine/women'sMagazine_main.jpg",
    title: "女性雑誌",
    category: "Banner",
    Isclient: "自主制作",
    overView: "女性雑誌のバナー",
    scoop: "design",
    tool: "figma",
    schedule: "2024/1/22~1/27",
    CreationFlow_spTb: "/fiveStepFlow_spTb.jpg",
    CreationFlow_pc: "/fiveStepFlow_pc.jpg",
    // ---
    purpose1: "ターゲット層の女性に雑誌を購買、認知",
    concept1: "憧れる素敵な女性になりたい",
    concept2: "大人",
    concept3: "シック",
    target1: "30代女性",
    // ---

    oneKnotTxt1: "３枚の画像が並ぶため、画像や顔の大きさの統一をした",
    oneKnotTxt2: "画像の横幅を開けることで、余白を出してシンプルさを演出",
    oneKnotTxt3: "背景色が重ならないよう、コントラストのある画像の並びにした",
    oneKnotTxt4: "シックでかっこいい女性のイメージにあった色・フォントの選定",
    oneKnotTxt5:
      "写真を大きく見せることで、洋服の認知、注目、おしゃれな感じの演出",

    // ---
    mainVisual_sp: "/women'sMagazine/women'sMagazine_tb.svg",
    mainVisual_tb: "/women'sMagazine/women'sMagazine_tb.svg",
    mainVisual_pc: "/women'sMagazine/women'sMagazine_pc.svg",
  };
  // バナー_航空チケット
  const flightTicketBanner: worksType = {
    ImageURL: "/flightTicket/flightTicket_main.jpg",
    TopImage: "/flightTicket/flightTicket_main.jpg",
    title: "航空チケット",
    category: "Banner",
    Isclient: "自主制作",
    overView: "航空チケットの早割の告知",
    scoop: "design",
    tool: "figma",
    schedule: "2024/1/22~1/27",
    CreationFlow_spTb: "/fiveStepFlow_spTb.jpg",
    CreationFlow_pc: "/fiveStepFlow_pc.jpg",
    // ---
    purpose1: "オンラインで早期予約してもらう",
    concept1: "インパクト",
    target1: "30代~40代男性",
    target2: "年4回以上海外予行に行く男性",
    target3: "長期休暇で海外に行きたいとぼんやり考えている人",

    // ---
    oneKnotTxt1:
      "背景が写真のため、文字が目立つように白い背景を作り、その上に文字をのせた",
    oneKnotTxt2:
      "画像の右半分を濃いブルーのグラデーションを載せて、文字の色とコントラストを出し、文字を目立たせるようにした",
    oneKnotTxt3:
      "「早割」をも立たせるため、反対色の黄色を使用し、インパクトのある装飾を選定",

    // ---
    mainVisual_sp: "/flightTicket/flightTicket_sp.svg",
    mainVisual_tb: "/flightTicket/flightTicket_pc.svg",
    mainVisual_pc: "/flightTicket/flightTicket_sp.svg",
  };
  // バナー_シューズ
  const shoesBanner: worksType = {
    ImageURL: "/shoes/shose_sp.svg",
    TopImage: "/shoes/shose_main.jpg",
    title: "シューズ",
    category: "webサイト",
    Isclient: "自主制作",
    overView: "ナイキの靴のバナー",
    scoop: "design",
    tool: "figma",
    schedule: "2024/1/22~1/27",
    CreationFlow_spTb: "/fiveStepFlow_spTb.jpg",
    CreationFlow_pc: "/fiveStepFlow_pc.jpg",
    // ---
    purpose1: "オンライン予約をしてもらう",
    concept1: "イケてる",
    concept2: "シンプルなカッコよさ",
    concept3: "自分磨きのモチベーション向上",
    target1: "20代男性",
    target2: "流行りに敏感",
    // ---
    oneKnotTxt1:
      "靴のかっこよさを目立たせるよう画像を大きめに配置し、画像の色に合わせてバナーの背景色を揃えることで、世界観の統一をした",
    oneKnotTxt2:
      "シンプルに靴の良さを見てもらいたいため、装飾などは少なく、使用する色も少なく2色にした",
    oneKnotTxt3: "優先順位の高い「オンライン予約」の文字を大きくし、訴求した",
    // ---
    mainVisual_sp: "/shoes/shose_sp.svg",
    mainVisual_tb: "/shoes/shose_sp.svg",
    mainVisual_pc: "/shoes/shose_pc.svg",
  };
  // 音声SNS
  // const voiceSNSApp: worksType = {
  //   ImageURL: "",
  //   TopImage: "",
  //   title: "出張申請サービス",
  //   category: "webサイト",
  //   Isclient: "自主制作",
  //   overView: "",
  //   scoop: "design",
  //   tool: "figma",
  //   schedule: "2024/2/22~2/23",
  //   prototypeURL: "2024/2/22~2/23",
  // CreationFlow_spTb: "public/sixStepFlow_sp.jpg",
  //     CreationFlow_pc: "/sixStepFlow_pc.jpg",
  //   // ---
  //   purpose1: "",
  //   purpose2: "",
  //   concept1: "",
  //   // consept2: "",
  //   target1: "",
  //   target2: "",
  //   // target3: "",
  //   IllustrationSp: "",
  //   IllustrationPcTb: "",
  //   // ---
  //   oneKnotTtl: "",
  //   oneKnotTxt1: "",
  //   oneKnotTxt2: "",
  //   twoKnotTtl: "",

  //   ImprovementPoints1: "",
  //   ImprovementPoints2: "",
  //   ImprovementPoints3: "",

  //   // ---
  //   mainVisual_sp: "",
  //   mainVisual_tb: "",
  //   mainVisual_pc: "",
  // };

  return (
    <section className={styles.works}>
      <div className={styles.works_inner}>
        <h2 className={styles.works_ttl}>Works</h2>
        <ul className={`${styles.works_itemList} ${styles.works_itemList_sp}`}>
          {/* SP~TB */}
          <li className={`${styles.works_itemList_item} ${styles.tb}`}>
            <h3 className={styles.works_itemList_item_ttl}>UIUX</h3>
            <div className={styles.works_itemList_item_detile}>
              <WorksCard {...BusinessTripExpenseApplicationService} />
              <WorksCard {...SubscriptionManagementApp} />
              {/* <WorksCard {...todoManagementApp} /> */}
              {/* <WorksCard {...voiceSNSApp} /> */}
            </div>
          </li>
          <li className={`${styles.works_itemList_item} ${styles.tb}`}>
            <h3 className={styles.works_itemList_item_ttl}>BANNER</h3>
            <div className={styles.works_itemList_item_detile}>
              <WorksCard {...UIUXdesignLearningThumbnail} />
              <WorksCard {...womensMagazineBanner} />
              <WorksCard {...hairCareBanner} />
              <WorksCard {...jobChangeBanner} />
              <WorksCard {...flightTicketBanner} />
              <WorksCard {...hamburgerBanner} />
              <WorksCard {...saleBanner} />
              <WorksCard {...shoesBanner} />
            </div>
          </li>
        </ul>
        {/* pc */}
        <ul className={`${styles.works_itemList} ${styles.works_itemList_pc}`}>
          <li className={styles.works_itemList_item_detile}>
            <WorksCard {...BusinessTripExpenseApplicationService} />
            <WorksCard {...SubscriptionManagementApp} />
            <WorksCard {...UIUXdesignLearningThumbnail} />
            {/* <WorksCard {...todoManagementApp} /> */}
          </li>
          <li className={styles.works_itemList_item_detile}>
            {/* <WorksCard {...voiceSNSApp} /> */}
            <WorksCard {...womensMagazineBanner} />
            <WorksCard {...hairCareBanner} />
            <WorksCard {...jobChangeBanner} />
          </li>
          <li className={styles.works_itemList_item_detile}>
            <WorksCard {...flightTicketBanner} />
            <WorksCard {...hamburgerBanner} />
            <WorksCard {...saleBanner} />
          </li>
          <li className={styles.works_itemList_item_detile}>
            <WorksCard {...shoesBanner} />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Works;
