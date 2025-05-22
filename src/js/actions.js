import {
  enemyHp, log, startScreen, gameScreen, enemy, player, playerHp, attackButton,
  spAttackButton,
  healButton,
  endScreen,
  endMessage,
} from "./constant.js";

let playerHealth, enemyHealth;
let specialCooldown = 0;

const startGame = () => {
  playerHealth = 100;
  enemyHealth = 100;
  startScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  endScreen.classList.add("hidden");
  log.innerHTML = "Fight!";
  updateUi();
  enableButtons(false);
};

const updateHealthBars = () => {
  player.style.width = `${playerHealth}%`;
  enemy.style.width = `${enemyHealth}%`;
  playerHp.innerHTML = playerHealth;
  enemyHp.innerHTML = enemyHealth;
}
const updateSpButton = () => {
  if (specialCooldown > 0) {
    spAttackButton.innerHTML = `Special Attack (${specialCooldown})`;
    spAttackButton.disabled = true;
    return;
  } 

  spAttackButton.innerHTML = "Special Attack";
  spAttackButton.disabled = false;  
}

const updateUi = () => {
  updateHealthBars()
  updateSpButton();
}

const enableButtons = (status) => {
  [attackButton, healButton]
    .concat(specialCooldown > 0 ? [] : [spAttackButton])
    .forEach(button => {
      button.disabled = status;
    });
};

const endGame = (message) => {
  gameScreen.classList.add("hidden");
  endScreen.classList.remove("hidden");
  endMessage.innerHTML = message;
}

const checkGameOver = () => {
  if (enemyHealth <= 0) {
    endGame("You win!");
    return;
  } 

  if (playerHealth <= 0) {
    endGame("You lose!");
    return;
  }
}

const enemyAttack = () => {
  if (Math.random() < 0.05) {
    enemyHealth = 100;
    log.innerHTML = "Enemy fully heal itself!";
  } else {
    const damage = Math.floor(Math.random() * 16) + 5; // Random damage between 5 and 16
    const isParried = Math.random() < 0.2; // 20% chance to parry

    if (isParried) {
      log.innerHTML = "Player parried the attack!";
    } else {
      playerHealth = Math.max(0, playerHealth - damage);
      log.innerHTML = `Enemy dealt ${damage} damage to player.`;
    }
  }

  updateUi();
  checkGameOver();
}

const attack = (damage = 10) => {
  if (enemyHealth <= 0 || playerHealth <= 0) return;

  const actualDamage = Math.random() < 0.2 ? 0 : damage;
  if (actualDamage === 0) {
    log.innerHTML = "Enemy parried the attack!";
  } else {
    enemyHealth = Math.max(0, enemyHealth - actualDamage);
    log.innerHTML = `Player dealt ${actualDamage} damage to enemy.`;
  }

  updateUi();
  checkGameOver();
}

const heal = () => {
  if (playerHp <= 0 || playerHp === 100) return;

  const healAmount = Math.floor(Math.random() * 11) + 10;
  playerHealth = Math.min(100, playerHealth + healAmount);
  log.innerHTML = `Player healed for ${healAmount} health.`;
  updateUi(); 
}

const spAttack = () => {
  if (specialCooldown != 0) return;
  specialCooldown = 3;
  attack(25);
  updateUi();
  log.innerHTML = "Player used special attack!";
}

const nextTurn = () => {
  enableButtons(true);
  setTimeout(() => {
    enemyAttack();
    enableButtons(false);
    if (specialCooldown > 0) specialCooldown--;
  }, 800);
}

export { startGame, attack, nextTurn, heal, spAttack };
