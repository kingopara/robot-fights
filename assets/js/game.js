// this is a function called fight
// function fight () {
    // 
    
    var playerName =  window.prompt("whats your name?");
    var playerHealth = 100;
    var playerAttack = 10;
    var playerMoney = 10;

    console.log(playerName, playerHealth, playerAttack, playerMoney);

    var enemyName = "Enemy";
    var enemyHealth = 50;
    var enemyAttack = 12;

    var fight = function () {
        window.alert("The fight has begun!");

        var promptFight = window.prompt("do you want to fight or skip? enter FIGHT or SKIP to choose");

        if (promptFight === "fight" || promptFight === "FIGHT") {
            enemyHealth = enemyHealth - playerAttack;
            console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
        

            if (enemyHealth <= 0) {
                window.alert(enemyName + " died ");
            }
            else {
                window.alert(enemyName + " has " + enemyHealth + " health left ");
            }

            playerHealth = playerHealth - enemyAttack;
            
            // Log a resulting message to the console so we know that it worked.
            // console.log(playerHealth);
            console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

            if (playerHealth <= 0) {
                window.alert(playerName + " died ");
            }
            else {
                window.alert(playerName + " has " + playerHealth + " health left ");
            }
        }

        //if player is skipping
        else if (promptFight === "skip" || promptFight === "SKIP" ) {
            // confirm palyer wants to skip
            var confirmSkip = window.confirm("are you sure you want to skip?");

            if (confirmSkip) {
                window.alert(playerName + " has decided to skip");
                playerMoney = playerMoney - 2;
            } 
            else {
                fight();
            }

            window.alert(playerName + " has chosen to fight ");
        } else {
            window.alert("choose a valid option!");
        }



        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        // enemyHealth = enemyHealth - playerAttack;

        // Log a resulting message to the console so we know that it worked.
        // console.log(enemyHealth);
        // console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
        
        // if (enemyHealth <= 0) {
        //     window.alert(enemyName + " died ");
        // }
        // else {
        //     window.alert(enemyName + " has " + enemyHealth + " health left ");
        // }
        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;
        
        // Log a resulting message to the console so we know that it worked.
        // console.log(playerHealth);
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

        if (playerHealth <= 0) {
            window.alert(playerName + " died ");
        }
        else {
            window.alert(playerName + " has " + playerHealth + " health left ");
        }
    }

// }

fight(); 