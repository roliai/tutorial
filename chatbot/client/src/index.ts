#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from "chalk";

(async () => {
    await inquirer.prompt([{
        type: 'input',
        name: 'userName',
        message: "Login: "
    }]).then(async ({userName}) => {    
        console.log("Username: " + userName);
    
        while (true) {
            await inquirer.prompt([{
                type: 'input',
                name: 'text',
                message: `${userName}: `
            }]).then(async ({text}) => {
                if (text === "/quit") {
                    process.exit(0);
                    return;
                } else {
                    const response = "";
                    const timestamp = chalk.grey(`[${new Date().toLocaleTimeString()}]`);
                    const userName = chalk.whiteBright(`[chatbot]:`);
                    const t = chalk.greenBright(response);    
                    console.log(`${timestamp} ${userName} ${t}`);
                }
            })
        }
    })
})().catch((e: any) => {
    console.error("Unexpected failure: " + e);
});