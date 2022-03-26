// asks for input and stores input in the variable :playerName
var playerName = window.prompt("whats your name?");
var playerHealth = 50;
var playerAttack = 20;
var playerMoney = 10;

console.log(playerName, playerHealth, playerAttack);
window.alert(" Hi " + playerName + " welcome to the game ");

var enemyName = "enemy";
var enemyHealth = 30;
var enemyAttack = 10;
console.log(enemyName, enemyHealth, enemyAttack);

// true or false/ yes or no prompt
// window.confirm("do you still want to fight");

var Fight = function() {

    var promptFight = window.prompt("do you want to fight or skip?");
    console.log(promptFight);

    if (promptFight === "FIGHT" || promptFight ===  "fight" ) {
        window.alert("Round 1");
        
        // checking if enemy is still alive
        enemyHealth = enemyHealth - playerAttack;
        
        if (enemyHealth <= 0) {
            window.alert(enemyName + " is dead");
        } else {
            window.alert(enemyName + " is still alive with " + enemyHealth + " left");
        }
        console.log(playerName + " attacked " + enemyName + " . " + enemyName + " has " + enemyHealth);
        
        // checking player
        playerHealth = playerHealth - enemyAttack;
        
        if (playerHealth <= 0) {
            window.alert(playerName + " is died");
        } else {
            window.alert(playerName + " can still fight with " + playerHealth + " left");
        }
        console.log(enemyName + " attacked " + playerName + " . " + playerName + " has " + playerHealth);
    } else if (promptFight === "SKIP" || promptFight === "skip") {
        var confirmSkip = window.confirm("do you really want to skip the fight?");

        if (confirmSkip === true) {
            window.alert(playerName + " is penalized because " + playerName + " has choson to skip the fight");
            playerMoney = playerMoney - 1;
            window.alert("your money is now " + playerMoney + " . See you next time.");
        } else {
            Fight();
        }
    } else {
        window.alert("please enter a valid response");
    }
}

Fight();
