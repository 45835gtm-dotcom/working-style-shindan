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

const choiceButtons = document.querySelectorAll(".choice");

// 回答履歴
let answerHistory = [];

//－－－－－－－－－－－－－－－－－－関数－－－－－－－－－－－－－－－－
//メイン関数
function main() {
  //スタート画面
  showScreen("screen-start");
  //質問画面~結果画面
  document.getElementById("button-start").addEventListener("click", startQuiz);
  //次の画面へ
  choiceButtons.forEach((button) => {
    button.addEventListener("click", nextQuestion);
  });
  //戻る
  document
    .getElementById("button-back")
    .addEventListener("click", previousQuestion);
  //再診断
  document.getElementById("button-restart").addEventListener("click", restart);
}

//画面をオン
function showScreen(id) {
  document.getElementById("screen-start").style.display = "none";
  document.getElementById("screen-question").style.display = "none";
  document.getElementById("screen-loading").style.display = "none";
  document.getElementById("screen-result").style.display = "none";
  document.getElementById(id).style.display = "block";
}

//配列のシャッフル
function shuffle(array) {
  const copy = array.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

//質問のスタート準備
function startQuiz() {
  //初期化
  count = 0;
  scores = { focus: 0, team: 0, idea: 0, improve: 0 };
  answerHistory = [];
  //質問画面へ
  showQuestion();
}

//質問画面
function showQuestion() {
  //countが7以上→質問の終了
  if (count >= questions.length) {
    showScreen("screen-loading");
    setTimeout(result, 1000);
    return;
  }

  //今回の質問
  const question = questions[count];

  showScreen("screen-question");
  //?/7
  document.getElementById("progress").textContent =
    count + 1 + "/" + questions.length;
  document.getElementById("question").textContent = question.Q;

  //選択肢ボタン
  //シャッフル
  const shuffledChoices = shuffle(question.choices);
  choiceButtons.forEach((button, index) => {
    //選択肢
    const choice = shuffledChoices[index];
    //文章をボタンへ
    button.textContent = choice.ans;
    //ボタンにタイプの属性を付ける
    button.dataset.type = choice.type;
  });

  //戻るボタンの制御
  const backButton = document.getElementById("button-back");
  if (count === 0) {
    backButton.style.display = "none";
  } else {
    backButton.style.display = "inline-block";
  }
}

//次の質問へ
function nextQuestion(event) {
  //タイプの記録
  const type = event.currentTarget.dataset.type;
  if (type) {
    scores[type]++;
    //回答履歴に保存
    answerHistory.push(type);
  }

  count++;

  //次の画面へ
  if (count < questions.length) {
    //質問数7未満→次の質問
    showQuestion();
  } else {
    //ロード画面
    showScreen("screen-loading");
    //1秒待って結果
    setTimeout(result, 1000);
  }
}

//前の質問へ
function previousQuestion() {
  //最初の質問には戻れない
  if (count <= 0) {
    return;
  }

  //前回の回答を取得
  count--;
  const previousAnswer = answerHistory.pop();

  //スコアから前回の回答を引く
  if (previousAnswer) {
    scores[previousAnswer]--;
  }

  //前の質問を表示
  showQuestion();
}

function result() {
  //最高スコア
  const maxScore = Math.max(...Object.values(scores));
  //最高スコア→タイプ名
  const yourTypes = Object.keys(scores).filter(
    (type) => scores[type] === maxScore,
  );
  //タイプ名を表示
  document.getElementById("result-types").innerHTML = yourTypes
    .map((type) => RESULTS[type].name)
    .join("<br>");

  //診断結果
  const contentHTML = yourTypes
    .map((type) => {
      const info = RESULTS[type];
      return `
      <h2 class="results">${info.name}について</h2>
      <p><strong>${info.catchCopy}</strong></p>
      <h3 class="results">説明</h3>
      <p>${info.description}</p>
      <h3 class="results">強み</h3>
      <ul>
        ${info.strengths.map((item) => `<li>${item}</li>`).join("")}
      </ul>
      <h3 class="results">向いている働き方</h3>
      <ul>
        ${info.workStyle.map((item) => `<li>${item}</li>`).join("")}
      </ul>
      <h3 class="results">相性のいいチーム・環境</h3>
      <ul>
        ${info.environment.map((item) => `<li>${item}</li>`).join("")}
      </ul>
      <h3 class="results">入社後に活躍できそうな場面</h3>
      <p>${info.scene}</p>
      <h3 class="results">一言アドバイス</h3>
      <p>${info.advice}</p>
    `;
    })
    .join("");

  document.getElementById("result-content").innerHTML = contentHTML;
  showScreen("screen-result");
}

function restart() {
  showScreen("screen-start");
}

main();
