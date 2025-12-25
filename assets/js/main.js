const heroData = {
  galewing: {
    name: "Galewing",
    description: "風の力を持つヒーロー。ミニオンを強化する能力。",
    image: "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/5/5a/Galewing%28hero%29.png"
  },
  yshaarj: {
    name: "Y'Shaarj",
    description: "闇の力を持つヒーロー。敵を弱体化する能力。",
    image: "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/3/3a/Y%27Shaarj%28hero%29.png"
  }
};

document.addEventListener('DOMContentLoaded', function() {
  const tooltips = document.querySelectorAll('.hero-tooltip');
  tooltips.forEach(tooltip => {
    tooltip.addEventListener('mouseenter', function(e) {
      const hero = e.target.dataset.hero;
      const data = heroData[hero];
      if (data) {
        showTooltip(e, data);
      }
    });
    tooltip.addEventListener('mouseleave', hideTooltip);
  });
});

function showTooltip(e, data) {
  let tooltip = document.getElementById('hero-tooltip');
  if (!tooltip) {
    tooltip = document.createElement('div');
    tooltip.id = 'hero-tooltip';
    document.body.appendChild(tooltip);
  }
  tooltip.innerHTML = `<img src="${data.image}" alt="${data.name}" style="width:100px;"><br><strong>${data.name}</strong><br>${data.description}`;
  tooltip.style.position = 'absolute';
  tooltip.style.left = (e.pageX + 10) + 'px';
  tooltip.style.top = (e.pageY + 10) + 'px';
  tooltip.style.display = 'block';
  tooltip.style.background = 'white';
  tooltip.style.border = '1px solid black';
  tooltip.style.padding = '10px';
  tooltip.style.zIndex = '1000';
}

function hideTooltip() {
  const tooltip = document.getElementById('hero-tooltip');
  if (tooltip) {
    tooltip.style.display = 'none';
  }
}