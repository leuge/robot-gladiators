var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

/*console.log(enemyNames);
enemyNames[0];
console.log(enemyNames.length);
for(var i = 0; i < enemyNames.length; i++) {
  console.log(enemyNames[i]);
  console.log(i);
  console.log(enemyNames[i] + " is at " + i + " index");
}*/

var fight = function(enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    // ask user if they'd liked to fight or run
    var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if user picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm user wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney)
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + ' has died!');

      // award player money for winning
      playerMoney = playerMoney + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left.');
    }

    if (playerHealth > 0) {
      // let user know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
  
      // pick new enemy to fight based on the index of the enemyNames array
      var pickedEnemyName = enemyNames[i];
  
      // reset enemyHealth before starting new fight
      enemyHealth = 50;
  
      // use debugger to pause script from running and check what's going on at that moment in the code
      // debugger;
  
      // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
      fight(pickedEnemyName);
    } else {
      window.alert("You have lost your robot in battle! Game Over!")
      break;
    }
  }
};

var startGame = function() {
  var startGame = function() {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
  
    // other logic remains the same...
  };

  // function to end the entire game
  var endGame = function() {
    // if player is still alive, player wins!
    if (playerHealth > 0) {
      window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    } 
    else {
      window.alert("You've lost your robot in battle.");
    }
  }
  // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
    // restart the game
    startGame();
  } 
  else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }


      var startGame = function() {
        var startGame = function() {
          for (var i = 0; i < enemyNames.length; i++) {
            ...
          }
        
          // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
          endGame();
        };
      
        // play again
        startGame();
      };

      var pickedEnemyName = enemyNames[i];

      enemyHealth = 50;

      fight(pickedEnemyName);
    }
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }
};

// start the game when the page loads
startGame();






  // call fight function with enemy robot
/*var fight = function(enemyName) {
// if user picks "skip" confirm and then stop the loop
if (promptFight === "skip" || promptFight === "SKIP") {
  // confirm user wants to skip
  var confirmSkip = window.confirm("Are you sure you'd like to quit?");

  // if yes (true), leave fight
  if (confirmSkip) {
    window.alert(playerName + " has decided to skip this fight. Goodbye!");
    // subtract money from playerMoney for skipping
    playerMoney = playerMoney - 10;
    console.log("playerMoney", playerMoney)
    break;
  }
}
 // repeat and execute as long as the enemy robot is alive 
 while(enemyHealth > 0 && playerHealth > 0) {
  // place fight function code block here . . .

  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")
  // if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
  // remove enemy's health by subtracting the amount set in the playerAttack variable
  enemyHealth = enemyHealth - playerAttack;
  console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
  );

  // check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
    break;
  } else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }

  // remove player's health by subtracting the amount set in the enemyAttack variable
  playerHealth = playerHealth - enemyAttack;
  console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );

  // check player's health
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }
  // if player choses to skip
/*} else if (promptFight === "skip" || promptFight === "SKIP") {
  // confirm user wants to skip
  var confirmSkip = window.confirm("Are you sure you'd like to quit?");
// if yes (true), leave fight
if (confirmSkip) {
  window.alert(playerName + " has decided to skip this fight. Goodbye!");
  // subtract money from playerMoney for skipping
  playerMoney = playerMoney - 10;
  console.log("playerMoney", playerMoney);
  break;
}
// if no (false), ask question again by running fight() again
  else {
    fight();
  }

// put new code under this
console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

// check player's health
if (playerHealth <= 0) {
  window.alert(playerName + " has died!");
} 
else {
  window.alert(playerName + " still has " + playerHealth + " health left.");
}

for(var i = 0; i < enemyNames.length; i++) {
  fight(enemyNames[i]);
}

}*/
  
  /*Alert users that they are starting the round 
  window.alert("Welcome to Robot Gladiatiors!");*/

//Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the `enemyHealth` variable
/*enemyHealth = enemyHealth - playerAttack;
// Log a resulting message to the console so we know that it worked.
console.log(
  playerName + "attacked" + enemyName + ". " + enemyName + "now has" + enemyHealth + "health remaining."
);

// Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
playerHealth = playerHealth - enemyAttack;

// Log a resulting message to the console so we know that it worked.
console.log(
  enemyName = "attacked" + playerName + ". " + playerName + "now has" + playerHealth + "health remaining."
);

console.log(
  playerName = "attacked" + enemyName + ". " + enemyName + "now has" + enemyHealth + "health remaining."
);

/*check enemy's health
if (enemyHealth <= 0) {
  break;
  window.alert(enemyName + "has died!");
}
else {
  window.alert(enemyName + "still has" + enemyHealth + "health left.");
}

for (var i = 0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(pickedEnemyName);
}

fight();*/

