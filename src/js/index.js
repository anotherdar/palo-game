import { startButton, attackButton, healButton, spAttackButton, endButton } from "./constant.js";
import { startGame, attack, nextTurn, heal, spAttack } from "./actions.js";

startButton.addEventListener("click", startGame);
endButton.addEventListener("click", startGame);

attackButton.addEventListener("click", () => {
    attack();
    nextTurn();
});
healButton.addEventListener("click", () => {
    heal();
    nextTurn();
});
spAttackButton.addEventListener("click", () => {
    spAttack();
    nextTurn();
});
