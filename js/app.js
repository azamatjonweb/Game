const winner = document.getElementById("winner");
const img_1 = document.querySelector(".img_1");
const img_2 = document.querySelector(".img_2");
const start = document.querySelector(".start");

start.addEventListener("click", RefreshMe);

function RefreshMe() {
    const random_1 = Math.floor(Math.random() * 6 + 1);
    const random_2 = Math.floor(Math.random() * 6 + 1);

    img_1.setAttribute("src", `./images/dice${random_1}.png`);
    img_2.setAttribute("src", `./images/dice${random_2}.png`);

    if (random_1 > random_2) {
        winner.textContent = "Player 1 Won!";
    } else if (random_1 < random_2) {
        winner.textContent = "Player 2 Won!";
    } else {
        winner.textContent = "Draw";
    }
}