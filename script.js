const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const card = document.getElementById("card");
const reactionImg = document.getElementById("reactionImg");
const images = [
    "imgs/1.png",
    "imgs/2.png",
    "imgs/3.png",
    "imgs/4.png",
    "imgs/5.png",
    "imgs/6.png",
    "imgs/7.png",
    "imgs/8.png",
    "imgs/9.png",
    "imgs/10.png",
    "imgs/11.png",
    "imgs/12.png",
];
let shuffledImages  = [];
let imageIndex  = 0;
let hasAccepted = false;

function shuffleImages() {
    shuffledImages  = [...images].sort(() => Math.random() - 0.5);
    imageIndex  = 0;
}

function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
}
shuffleImages();

noBtn.addEventListener("mouseover", () => {
    if (hasAccepted) return;
    const x = Math.random() * 500 - 200;
    const y = Math.random() * 200 - 100;

    applyColorScheme();
    noBtn.style.transform = `translate(${x}px, ${y}px)`;

    if (imageIndex >= shuffledImages.length) {
        shuffleImages();
    }

    reactionImg.src = shuffledImages[imageIndex];
    imageIndex++;

    const imgSize = 140;
    const padding = 10;

    const maxX = card.clientWidth - imgSize - padding;
    const maxY = card.clientHeight - imgSize - padding - 80; // avoid buttons

    reactionImg.style.left = randomBetween(padding, maxX) + "px";
    reactionImg.style.top = randomBetween(50, maxY) + "px";

    reactionImg.style.display = "block";
});

yesBtn.addEventListener("click", () => {
    hasAccepted = true;
    reactionImg.src = "https://i.imgflip.com/1bhk.jpg";
    reactionImg.style.left = "50%";
    reactionImg.style.top = "70px";
    reactionImg.style.transform = "translateX(-50%)";
    reactionImg.style.display = "block";
    message.textContent = "As expected.";
});

function applyColorScheme() {
    const hue = Math.floor(Math.random() * 360);
    const bgColor = `hsl(${hue}, 60%, 25%)`;
    const titleColor = `hsl(${hue}, 70%, 70%)`;
    const accentColor = `hsl(${(hue + 30) % 360}, 80%, 60%)`;
    card.style.background = bgColor;
    const title = document.querySelector("h1");
    if (title) {
        title.style.color = titleColor;
    }
    document.documentElement.style.setProperty("--accent-color", accentColor);
}

