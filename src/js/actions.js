import { enemyHp, log, startScreen, gameScreen } from "./constant.js";

let playerHealth, enemyHealth;


const startGame = (event) => {
    console.log(event);
    playerHealth = 100;
    enemyHealth = 100;
    startScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");    
    log.innerHTML = "Fight!";
};


const attack = (damage = 10) => () => {
  if (enemyHealth <= 0 || playerHealth <= 0) return;

  const actualDamage = Math.random() < 0.2 ? 0 : damage;

  enemyHealth = Math.max(0, enemyHealth - actualDamage);

  enemyHp.innerHTML = enemyHealth;
  log.innerHTML = `Player dealt ${actualDamage} damage to enemy.`;
}

export { startGame, attack };