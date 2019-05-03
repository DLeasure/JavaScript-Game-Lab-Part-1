let userHealth = 40;
let grantHealth = 10;
let userWins = 0;
const likeToPlay = prompt("Would you like to play a game?");
// const likeToPlay = "yes";
// const userName = "Dave";

if (likeToPlay === "yes" || likeToPlay === "Yes") {
    userName = prompt("Name your character");
    while (userWins < 3 && userHealth > 0) {
        const healthDecrement = (Math.floor(Math.random() * 2) + 1);
        userHealth -= healthDecrement;
        grantHealth -= healthDecrement;
        console.log(`Health: ${userName} ${userHealth} - ${grantHealth} Grant`);
        if (grantHealth < 1) {
            userWins++;
            console.log(`${userName} has won game ${userWins}!`);
            grantHealth = 10;
        }
        if (userHealth < 1) {
            console.log(`${userName} has lost the game!`);
        }
        if (userWins === 3) {
            console.log(`${userName} has defeated Grant!`);
        }
    }
}


