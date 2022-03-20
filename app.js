function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

const player = document.querySelector("#player");
const coin = document.querySelector("#coin");

window.addEventListener("keypress", function (e) {
  if (e.key === "s" || e.key === "Down") {
    const currTop = extractPosition(player.style.top);
    player.style.top = currTop + 50 + "px";
  } else if (e.key === "w" || e.key === "Up") {
    const currTop = extractPosition(player.style.top);
    player.style.top = currTop - 50 + "px";
  } else if (e.key === "d" || e.key === "Right") {
    const currRight = extractPosition(player.style.left);
    player.style.left = currRight + 50 + "px";
    player.style.transform = "scale(1,1)";
  } else if (e.key === "a" || e.key === "Left") {
    const currLeft = extractPosition(player.style.left);
    player.style.left = currLeft - 50 + "px";
    player.style.transform = "scale(-1,1)";
  }

  if (isTouching(player, coin)) {
    moveCoin();
  }
});

const extractPosition = (pos) => {
  if (!pos) return 100;
  return parseInt(pos.slice(0, -2));
};

const moveCoin = () => {
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);
  coin.style.top = y + "px";
  coin.style.left = x + "px";
};

moveCoin();
