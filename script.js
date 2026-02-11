let score = {
    active: 0,
    relax: 0,
    friendly: 0,
    cool: 0,
    challenge: 0,
    careful: 0
};

function answer(type) {
    score[type]++;
}

// 診断結果表示
function showResult() {

    let resultText = "";
    let totalActive = score.active + score.challenge;
    let totalRelax = score.relax + score.careful;

    // 判定ロジック（ここが診断の頭脳！）
    if (totalActive >= 2 && score.friendly >= 1) {
        resultText = `
        🐕 あなたに向いているのは【ゴールデンレトリバー】！
        <br><br>
        活発で人が大好きなあなたは、運動量が多くフレンドリーな犬種と相性抜群！
        一緒にお出かけしたり遊ぶことで最高のパートナーになります。
        `;
    }
    else if (totalRelax >= 2 && score.cool >= 1) {
        resultText = `
        🐕 あなたに向いているのは【フレンチブルドッグ】！
        <br><br>
        おうち時間を大切にするあなたには、まったり過ごせる癒し系がぴったり。
        無理なく一緒に暮らせる最高の相棒です。
        `;
    }
    else if (score.careful >= 1) {
        resultText = `
        🐕 あなたに向いているのは【柴犬】！
        <br><br>
        落ち着きがあり距離感を大事にするタイプ。
        自立心のある柴犬とは、程よい信頼関係を築けます。
        `;
    }
    else {
        resultText = `
        🐕 あなたに向いているのは【トイプードル】！
        <br><br>
        バランス型のあなたには、賢くて飼いやすい万能タイプがおすすめ！
        初めてでも楽しく暮らせます。
        `;
    }

    document.getElementById("result").innerHTML = resultText;
}