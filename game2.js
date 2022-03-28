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

// fight or skip function
var fightOrSkip = function() {
    var promptFight = window.prompt("do you want to fight or skip?");
    // console.log(promptFight);

    // recursive function
    if (promptFight === "" || promptFight === null) {
        window.alert("invalid response. Please try again!")
        return fightOrSkip();
    }

    if (promptFight === "SKIP" || promptFight === "skip") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("do you really want to skip the fight?");
        // if skip is true, leave fight.
        if (confirmSkip) {
            window.alert(player.name + " is penalized bcus " + player.name + " has chosen to skip the fight");
            player.money = Math.max(0, player.money - 2);
            window.alert("your money is now " + player.money + " . See you next time.");
            console.log("your money is now " + player.money + " . See you next time.");
            shop();
        }
    }
}


var Fight = function(enemy) {

    while(player.health > 0 && enemy.health > 0) {

    fightOrSkip();
            
        // generate random damage value based on player's attack power
        var damage = randomNumber(player.attack - 3, player.attack);
        // checking if enemy is still alive
        enemy.health = Math.max(0, enemy.health - damage);
        
        if (enemy.health <= 0) {
            window.alert(enemy.name + " is dead");
            player.money = player.money + 5;
            break;
        } else {
            window.alert(enemy.name + " is still alive with " + enemy.health + " left");
        }
        console.log(player.name + " attacked " + enemy.name + " . " + enemy.name + " has " + enemy.health);
        
        // generate random damage value based on enemy's attack power
        var damage2 = randomNumber(enemy.attack - 3, enemy.attack);
        // checking player
        player.health = Math.max(0, player.health - damage2);
        
        if (player.health <= 0) {
            window.alert(player.name + " is died");
            break;
        } else {
            window.alert(player.name + " can still fight with " + player.health + " left");
        }
        console.log(enemy.name + " attacked " + player.name + " . " + player.name + " has " + player.health);
        // } else {
        //     window.alert("please enter a valid response");
        // }
    }
};
// Fight();

// wrap game logic in a startGame function
var startGame = function() {

    // reset player stats
    // calling the function in the player object
    player.reset();

    // for loop
    for (var i = 0; i < enemies.length; i++) {
        // displays each enemy name
        // console.log(enemyNames[i]);
        // diplays each enemy index
        // console.log(i);
        // displays each enemy name and index
        // console.log(enemyNames[i] + " is at " + i + " index");
    
        // check if player is still alive
        if (player.health > 0) {
            window.alert("Welcome to the FIGHT! Round " + (i + 1));
            // debugger;
            
            var pickedEnemiesObj = enemies[i];

            pickedEnemiesObj.health = randomNumber(10, 20);
            // debugger;
            Fight(pickedEnemiesObj);

            // if we're not at the last enemy in the array
            if (player.health > 0 && i < enemies.length - 1) {
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
    if (player.health > 0) {
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
            player.refillHealth();
            break;
        case "UPGRADE":
        case "upgrade":
            player.upgradeAttack();
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

// get player name function
var getPlayerName = function() {
    var name = "";

    // loop
    while (name === "" || name === null) {
        name = window.prompt("what is your name?");
    }
    console.log("you name is " + name);
    return name;
};

// asks for input and stores input in the variable :playerName
// player variables changed to objects for OOP
var player = {
    name: getPlayerName(),
    health: 40,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 40;
        this.attack = 10;
        this.money = 10;
    },
    refillHealth: function() {
        if (this.money >= 5) {
            window.alert('refilling your health by 10 for $2');
            this.health += 10;
            this.money -= 2;
        } else {
            window.alert('insufficient funds!');
        }
    },
    upgradeAttack: function() {
        if (this.money >= 5) {
            window.alert('refilling your attack power by 10 for $2')
            this.attack += 10;
            this.money -= 2;
        } else {
            window.alert('insufficient funds!');
        }
    }
};
// console.log(playerName + " has " + playerHealth + " health points " + playerAttack + " attack power.");
window.alert(" Hi " + player.name + " welcome to the game ");

// changing enemy to objects for OOP
var enemies = [
    {
        name: "fear",
        attack: randomNumber(10, 14)
    },
    {
        name: "too-much-thinking",
        attack: randomNumber(10, 14)
    },
    {
        name: "self-doubt",
        attack: randomNumber(10, 14)
    },
    {
        name: "anxiety",
        attack: randomNumber(10, 14)
    }
];

startGame();
