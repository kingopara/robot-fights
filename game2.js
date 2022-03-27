// asks for input and stores input in the variable :playerName
var playerName = window.prompt("whats your name?");
var playerHealth = 40;
var playerAttack = 10;
var playerMoney = 5;

console.log(playerName + " has " + playerHealth + " health points " + playerAttack + " attack power.");
window.alert(" Hi " + playerName + " welcome to the game ");

var enemyNames = ["fear", "too-much-thinking", "self-doubt", "anxiety"];
// displays the length of the array = 4
// console.log(enemyNames.length);
var enemyHealth = 20;
var enemyAttack = 12;
console.log(enemyNames + " has " + enemyHealth + " health points " + enemyAttack + " attack points");

// PSEUDOCODE
// Game States
// WIN - Player robot has defeated all enemy robots
    // Fights all robots 
    // defeats all robot 
// LOSE - Player has been defeated by enemy robot (robot health is zero).
    // enemy robot defeats player robot
    // player health is 0.

// End Game
    // Ask if they would like to play again?
    // if yes, Fight(); , else End the game

// If player defeats/skips an enemy robot
// ask if they'll like to shop
// if yes, present them with options
    // create the options (functions)

var Fight = function(enemyName) {

    while(enemyHealth > 0 && playerHealth > 0) {

        var promptFight = window.prompt("do you want to fight or skip?");
        // console.log(promptFight);

        if (promptFight === "SKIP" || promptFight === "skip") {
            var confirmSkip = window.confirm("do you really want to skip the fight?");
    
            if (confirmSkip) {
                window.alert(playerName + " is penalized bcus " + playerName + " has chosen to skip the fight");
                playerMoney = playerMoney - 2;
                window.alert("your money is now " + playerMoney + " . See you next time.");
                console.log("your money is now " + playerMoney + " . See you next time.");
                break;
            }
        }
        
    
        // if (promptFight === "FIGHT" || promptFight ===  "fight" ) {
            // window.alert("Round 1");
            
            // checking if enemy is still alive
        enemyHealth = enemyHealth - playerAttack;
        
        if (enemyHealth <= 0) {
            window.alert(enemyName + " is dead");
            playerMoney = playerMoney + 5;
            break;
        } else {
            window.alert(enemyName + " is still alive with " + enemyHealth + " left");
        }
        console.log(playerName + " attacked " + enemyName + " . " + enemyName + " has " + enemyHealth);
        
        // checking player
        playerHealth = playerHealth - enemyAttack;
        
        if (playerHealth <= 0) {
            window.alert(playerName + " is died");
            break;
        } else {
            window.alert(playerName + " can still fight with " + playerHealth + " left");
        }
        console.log(enemyName + " attacked " + playerName + " . " + playerName + " has " + playerHealth);
        // } else {
        //     window.alert("please enter a valid response");
        // }
    }
}

// for loop
for (var i = 0; i < enemyNames.length; i++) {
    // displays each enemy name
    // console.log(enemyNames[i]);
    // diplays each enemy index
    // console.log(i);
    // displays each enemy name and index
    // console.log(enemyNames[i] + " is at " + i + " index");

    // check if player is still alive
    if (playerHealth > 0) {
        window.alert("Welcome to the FIGHT! ROund " + (i + 1));
        
        var pickedEnemy = enemyNames[i];
        enemyHealth = 20;
        // debugger;
        Fight(pickedEnemy);
    } else {
        window.alert("You Lost! Game over!");
        break;
    }
}
