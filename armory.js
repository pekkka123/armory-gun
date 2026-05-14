/* =========================
   THE ARMORY JAVASCRIPT
========================= */

/* =========================
   WELCOME MESSAGE
========================= */

window.addEventListener("load", () => {

    console.log("Welcome to The Armory");

});

/* =========================
   BUTTON CLICK EFFECT
========================= */

const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        button.style.transform = "scale(0.95)";

        setTimeout(() => {
            button.style.transform = "";
        }, 150);

    });

});

/* =========================
   HOVER SOUND EFFECT
========================= */

const hoverSound = new Audio(
    "https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3"
);

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        hoverSound.volume = 0.2;
        hoverSound.play();

    });

});

/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const revealElements = document.querySelectorAll(
    ".button, .weapon-card, .rifle, .pistol, .shotgun, .smg, .sniper"
);

const revealOnScroll = () => {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add("active");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* =========================
   DYNAMIC YEAR
========================= */

const footer = document.querySelector("footer");

if (footer) {

    const year = new Date().getFullYear();

    footer.innerHTML =
        `© ${year} The Armory • Tactical Weapon Archive`;

}

/* =========================
   BACK TO TOP BUTTON
========================= */

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.padding = "12px 16px";
topButton.style.fontSize = "20px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#ff9800";
topButton.style.color = "#111";
topButton.style.cursor = "pointer";
topButton.style.boxShadow = "0 4px 10px rgba(0,0,0,0.4)";
topButton.style.display = "none";
topButton.style.zIndex = "1000";
topButton.style.transition = "0.3s ease";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/* =========================
   RANDOM HEADER COLOR
========================= */

const title = document.querySelector("header h1");

const colors = [
    "#f44336",
    "#ff9800",
    "#2196f3",
    "#4caf50",
    "#9c27b0"
];

setInterval(() => {

    const randomColor =
        colors[Math.floor(Math.random() * colors.length)];

    title.style.color = randomColor;

}, 3000);

/* =========================
   TYPEWRITER EFFECT
========================= */

const subtitle = document.querySelector("header p");

const text =
    "Weapon Specifications • Reviews • History";

let index = 0;

subtitle.innerHTML = "";

function typeWriter() {

    if (index < text.length) {

        subtitle.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter, 50);

    }

}

typeWriter();

/* =========================
   PARTICLE BACKGROUND
========================= */

for (let i = 0; i < 30; i++) {

    const particle = document.createElement("div");

    document.body.appendChild(particle);

    particle.style.position = "fixed";
    particle.style.width = "4px";
    particle.style.height = "4px";
    particle.style.background = "rgba(255,255,255,0.3)";
    particle.style.borderRadius = "50%";
    particle.style.left = Math.random() * 100 + "vw";
    particle.style.top = Math.random() * 100 + "vh";
    particle.style.pointerEvents = "none";
    particle.style.zIndex = "-1";

    animateParticle(particle);

}

function animateParticle(particle) {

    let posY = Math.random() * window.innerHeight;

    setInterval(() => {

        posY -= 1;

        if (posY < -10) {

            posY = window.innerHeight;

        }

        particle.style.top = posY + "px";

    }, 30);

}