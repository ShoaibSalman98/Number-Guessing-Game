#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

// const GenerateRandomNum = 13;
console.log(chalk.bgRedBright.bold("\t>>>>>>>> Wellcome to the Amazing Number Guess Game <<<<<<<<<\n"));

const GenerateRandomNum=  Math.floor(Math.random() * 10 + 1);
while (true) {
    
const input= await inquirer.prompt([{
     
    name: "Guess",
    type: "number",
    message: (chalk.bold.green.underline(" Please guess the right  Number between 1 to 10  to Win a Prize :-")),
}]);
   let ans= input.Guess
    
 if (GenerateRandomNum === ans) {
    console.log(chalk.gray.bold.italic("\n \t ******* Congatulations ! Your Guess Number is Correct *******\n"));
    break;
}
    else {
        console.log(chalk.bgBlueBright.bold.italic("\n \t <><><><><> opps you failed ! Hard luck! Try aggain <><><><><><><>\n"));
    }
    //  Adding Hint.
    if(GenerateRandomNum > ans){
        console.log("HINT <- Your Number is Lower");
        
    } else {
        console.log("HINT >- Your Number is Higher");
    }

    const answer= await inquirer.prompt([{
        name: "playAgain",
        type: "list",
        choices: ["YES", "NO"],
        message: (chalk.bold.green.underline(" Do you want to play aggain?")),
    }]);
   if (answer.playAgain==="NO") {
    console.log(chalk.gray.bold("\t\n >>>>>>>>> GAME OVER <<<<<<<<<"));
      break;
    }
};

  