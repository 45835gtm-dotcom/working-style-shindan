
/*
q: 質問文

choices: 選択肢
ans: 回答文
type: 診断タイプ
・focus: コツコツ集中タイプ
・team: チーム巻き込みタイプ
・idea: アイデア挑戦タイプ
・improve: 課題発見・改善タイプ
*/

const questions = [
    //Q1
    {
        Q: "新しい課題に取り組むとき、最初に近い行動は？",
        choices: [
            {ans: "まず一人で情報を整理して考える",type: "focus"},
            {ans: "周囲と話しながら進め方を決める",type: "team"},
            {ans: "とりあえず試してみて、動きながら考える",type: "idea"},
            {ans: "課題や改善点を洗い出してから進める",type: "improve"}
        ]
    },

    //Q2
    
    {
        Q: "チームで動くとき、自分に近い役割は？",
        choices: [
            {ans: "自分の担当を丁寧に進める",type: "focus"},
            {ans: "メンバー同士をつなぎ、全体を前に進める",type: "team"},
            {ans: "新しいアイデアや提案を出す",type: "idea"},
            {ans: "問題点に気づき、改善案を考える",type: "improve"}
        ]
    },
    
    //Q3
    {
        Q: "やりがいを感じやすい瞬間は？",
        choices: [
            {ans: "集中して作ったものが完成したとき",type: "focus"},
            {ans: "チームで協力して成果を出せたとき",type: "team"},
            {ans: "新しいことに挑戦して形になったとき",type: "idea"},
            {ans: "課題を解決して、前より良い状態にできたとき",type: "improve"}
        ]
    },

    //Q4
    {
        Q: "わからないことが出てきたとき、どうすることが多い？",
        choices: [
            {ans: "まず自分で調べて整理する",type: "focus"},
            {ans: "周囲に相談しながら理解する",type: "team"},
            {ans: "試しながら感覚をつかむ",type: "idea"},
            {ans: "原因を分解して、どこが問題か考える",type: "improve"}
        ]
    },

    //Q5
    {
        Q: "自分が得意だと思う作業スタイルは？",
        choices: [
            {ans: "一つのことに集中して深く取り組む",type: "focus"},
            {ans: "人と話しながら進める",type: "team"},
            {ans: "新しい方法を考えたり試したりする",type: "idea"},
            {ans: "既存のものをより良く改善する",type: "improve"}
        ]
    },

    //Q6
    {
        Q: "どんな環境だと力を発揮しやすい？",
        choices: [
            {ans: "落ち着いて集中できる環境",type: "focus"},
            {ans: "コミュニケーションが活発な環境",type: "team"},
            {ans: "新しい挑戦を歓迎してくれる環境",type: "idea"},
            {ans: "課題解決や改善に前向きな環境",type: "improve"}
        ]
    },

    //Q7
    {
        Q: "入社後に挑戦してみたいことに近いものは？",
        choices: [
            {ans: "専門スキルを磨いて、質の高い成果物を作りたい",type: "focus"},
            {ans: "チームやプロジェクトを支える役割をしたい",type: "team"},
            {ans: "新しいサービスや企画づくりに関わりたい",type: "idea"},
            {ans: "業務やサービスをより良くする改善に関わりたい",type: "improve"}
        ]
    }
];