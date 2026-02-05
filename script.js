const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const card = document.getElementById("card");

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 500 - 200;
    const y = Math.random() * 200 - 100;

    applyColorScheme();
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", () => {
    message.textContent = "Yay! 💘 I knew you’d say yes!";
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

