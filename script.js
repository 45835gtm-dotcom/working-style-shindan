// ーーーーーーーーーーーー変数の定義－－－－－－－－－－－－－

// 何問目か
let count = 0;

// 各タイプのスコア
let scores = {
  focus: 0, // コツコツ集中タイプ
  team: 0, // チーム巻き込みタイプ
  idea: 0, // アイデア挑戦タイプ
  improve: 0, // 課題発見・改善タイプ
};

// type：日本語名
const typeNames = {
  focus: "コツコツ集中タイプ",
  team: "チーム巻き込みタイプ",
  idea: "アイデア挑戦タイプ",
  improve: "課題発見・改善タイプ",
};

//－－－－－－－－－－－－－－－－－－－関数ーーーーーーーーーーーーーーーーーー

//画面のオンオフ
function showScreen(id) {
  //すべてoff
  document.getElementById("screen-start").style.display = "none";
  document.getElementById("screen-quesion").style.display = "none";
  document.getElementById("screen-result").style.display = "none";
  //指定されたスクリーンのみon
  document.getElementById(id).style.display = "block";
}
//配列をランダムに出力する関数
function shuffle(array) {
  const copy = array.slice();

  for (let i = length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

//現在の問題を表示する関数
function showQuestion() {}
