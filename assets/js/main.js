const heroData = {
  galewing: {
    name: "Galewing",
    description: "風の力を持つヒーロー。ミニオンを強化する能力。",
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/5/5a/Galewing%28hero%29.png",
  },
  yshaarj: {
    name: "Y'Shaarj",
    description: "闇の力を持つヒーロー。敵を弱体化する能力。",
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/3/3a/Y%27Shaarj%28hero%29.png",
  },
  thelichking: {
    name: "The Lich King",
    description:
      "アンデッドミニオンを強化するヒーロー。コントロールデッキに適し、敵を凍結させる能力を持つ。",
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/8/8c/The_Lich_King%28hero%29.png",
  },
  murozond: {
    name: "解き放たれたムロゾンド",
    description:
      "8ターン目に大きなタイムワープを訪れる。（あと7ターン！） このヒーローは重要なGreater Timewarpカードをゴールデン化または複製でき、即座にゲームを勝利に導く可能性があります。",
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/4/4c/Murozond_the_Infinite%28hero%29.png",
  },
  denathrius: {
    name: "デナスリアス陛下",
    description:
      "対戦の開始時 2 つのクエストから 1 つを選ぶ。ほとんどの場合、最も速く簡単に完了できるクエストが最適な選択です。例えば、マナセイバーで召喚クエストを開始できる場合はプレミアムですが、召喚がない場合はかなり悪いです。",
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/9/9c/Lord_Denathrius%28hero%29.png",
  },
  marin: {
    name: "支配人のマリン",
    description:
      "5ターン目に下級装飾品を 1つ選択して購入する。 （あと4ターン！）4 [x]5ターン目に下級装飾品を 1つ選択して購入する。 Well Oiled Can などのニュートラルな下級トリンケットを選んでも悲しまないでください、それらはすべて一般的にまともです。",
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/0/0c/Marin_the_Overseer%28hero%29.png",
  },
};

document.addEventListener("DOMContentLoaded", function () {
  const tooltips = document.querySelectorAll(".hero-tooltip");
  tooltips.forEach((tooltip) => {
    tooltip.addEventListener("mouseenter", function (e) {
      const hero = e.target.dataset.hero;
      const data = heroData[hero];
      if (data) {
        showTooltip(e, data);
      }
    });
    tooltip.addEventListener("mouseleave", hideTooltip);
  });
});

function showTooltip(e, data) {
  let tooltip = document.getElementById("hero-tooltip");
  if (!tooltip) {
    tooltip = document.createElement("div");
    tooltip.id = "hero-tooltip";
    document.body.appendChild(tooltip);
  }
  tooltip.innerHTML = `<img src="${data.image}" alt="${data.name}" style="width:100px;"><br><strong>${data.name}</strong><br>${data.description}`;
  tooltip.style.position = "absolute";
  tooltip.style.left = e.pageX + 10 + "px";
  tooltip.style.top = e.pageY + 10 + "px";
  tooltip.style.display = "block";
  tooltip.style.background = "white";
  tooltip.style.border = "1px solid black";
  tooltip.style.padding = "10px";
  tooltip.style.zIndex = "1000";
}

function hideTooltip() {
  const tooltip = document.getElementById("hero-tooltip");
  if (tooltip) {
    tooltip.style.display = "none";
  }
}
