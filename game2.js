// asks for input and stores input in the variable :playerName
var playerName = window.prompt("whats your name?");
var playerHealth = 40;
var playerAttack = 10;
var playerMoney = 10;

// console.log(playerName + " has " + playerHealth + " health points " + playerAttack + " attack power.");
window.alert(" Hi " + playerName + " welcome to the game ");

var enemyNames = ["fear", "too-much-thinking", "self-doubt", "anxiety"];
// displays the length of the array = 4
// console.log(enemyNames.length);
var enemyHealth = 20;
var enemyAttack = 12;
// console.log(enemyNames + " has " + enemyHealth + " health points " + enemyAttack + " attack points");

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

    while(playerHealth > 0 && enemyHealth > 0) {

        var promptFight = window.prompt("do you want to fight or skip?");
        // console.log(promptFight);

        if (promptFight === "SKIP" || promptFight === "skip") {
            var confirmSkip = window.confirm("do you really want to skip the fight?");
    
            if (confirmSkip) {
                window.alert(playerName + " is penalized bcus " + playerName + " has chosen to skip the fight");
                playerMoney = Math.max(0, playerMoney - 2);
                window.alert("your money is now " + playerMoney + " . See you next time.");
                console.log("your money is now " + playerMoney + " . See you next time.");
                break;
            }
        }
            
        // generate random damage value based on player's attack power
        var damage = randomNumber(playerAttack - 3, playerAttack);
        // checking if enemy is still alive
        enemyHealth = Math.max(0, enemyHealth - damage);
        
        if (enemyHealth <= 0) {
            window.alert(enemyName + " is dead");
            playerMoney = playerMoney + 5;
            break;
        } else {
            window.alert(enemyName + " is still alive with " + enemyHealth + " left");
        }
        console.log(playerName + " attacked " + enemyName + " . " + enemyName + " has " + enemyHealth);
        
        // generate random damage value based on enemy's attack power
        var damage2 = randomNumber(enemyAttack - 3, enemyAttack);
        // checking player
        playerHealth = Math.max(0, playerHealth - damage2);
        
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
};
// Fight();

// wrap game logic in a startGame function
var startGame = function() {

    // reset player stats
    playerHealth = 40;
    playerAttack = 10;
    playerMoney = 5;

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
            window.alert("Welcome to the FIGHT! Round " + (i + 1));
            
            var pickedEnemy = enemyNames[i];

            enemyHealth = randomNumber(10, 20);
            // debugger;
            Fight(pickedEnemy);

            // if we're not at the last enemy in the array
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                // ask if player wants to shop
                var confirmShop = window.confirm('do you want to enter the shop?');

                if (confirmShop) {
                    shop();
                }
            }
        } else {
            window.alert("You Lost! Game over!");
            break;
        }
    }
    endGame();
};


// End game function
var endGame = function () {
    if (playerHealth > 0) {
        window.alert("Great job, you survived")
    } else {
        window.alert("You lost. See your stats next");
    }
    // ask to play again
    var playAgain = window.confirm("would you like to play again?");

    if (playAgain) {
        startGame();
    } else {
        window.alert("Game Over! See you next time");
    }
};

var shop = function () {
    // ask what they want to shop for
    var shopOptions = window.prompt('type "REFILL" for health, type "UPGRADE" for attack or "LEAVE" to leave the store');

    switch(shopOptions) {
        case "REFILL":
        case "refill":
            if (playerMoney >= 5) {
                window.alert('refilling your health');
                // increase health and decrease money
                playerHealth = playerHealth + 10;
                playerMoney = playerMoney - 2;
            } else {
                window.alert('not enough money');
            }
            break;
        case "UPGRADE":
        case "upgrade":
            if (playerMoney >= 5) {
                window.alert('upgrading your attack');
                // increase attack and decrease money
                playerAttack = playerAttack + 10;
                playerMoney = playerMoney - 2;
            } else {
                window.alert('not enough money');
            }
            break;
        case "LEAVE":
        case "leave":
            window.alert('you chose to leave');
            break;
        default :
            window.alert('pick a valid option');
            // call shop again
            shop();
            break;
    }
};

// function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

startGame();
