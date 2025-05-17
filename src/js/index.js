import { startButton, attackButton } from "./constant.js";
import { startGame, attack } from "./actions.js";

startButton.addEventListener("click", startGame);
attackButton.addEventListener("click", attack());
