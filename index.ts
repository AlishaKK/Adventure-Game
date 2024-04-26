#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Player{
    name:string;
    fuel:number =100;
    constructor(name:string){
        this.name = name;
    }
    fuelDecrease(){
        let fuel = this .fuel -25
        this.fuel = fuel
    }
    fuelIncrease(){ 
        this.fuel = 100
    }
}
class Opponent{
    name:string;
    fuel:number =100;
    constructor(name:string){
        this.name = name;
    }
    fuelDecrease(){
        let fuel = this .fuel -25
        this.fuel = fuel
    }
}
let player =await inquirer.prompt([{
    type:"input",
    name:"name",
    message:"please Enter Your Name:"
}])
let opponent =await inquirer.prompt([{
    type:"list",
    name:"Select",
    message:"Select your opponet:",
    choices:["Skeleton","Assassin","Zombie"]
}])
let p1 = new Player(player.name)
let o1 = new Opponent(opponent.Select)
do{
    if(opponent.Select === "Skeleton"){
   
       let ask = await inquirer.prompt([{
           type:"list",
           name:"opt",
           message:"Select Your Opponent",
           choices: ["Attack","Drink Portion","Run for Your life.."],
       }]);
       if(ask.opt == "Attack"){
           let num = Math.floor(Math.random()*2);
           if(num>0){
       p1.fuelDecrease()
       console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
       console.log(chalk.bold.green`${o1.name} fuel is ${o1.fuel}`)
         if(p1.fuel<=0){
            console.log(chalk.red.bold.italic("You Loose, Better luck for next time"))
            process.exit()
         }
    }
           if(num <=0){
               o1.fuelDecrease()
               console.log(chalk.bold.green`${p1.name} fuel is ${p1.fuel}`)
               console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
               if(o1.fuel<=0){
                console.log(chalk.green.bold.italic("You Win!"))
                process.exit()
             }
           
       }
       }
       if(ask.opt == "Drink Portion"){
           p1.fuelIncrease()
           console.log(chalk.bold.italic.green(`You Drink Health Portion Your Fuel is ${p1.fuel}`))
       }
       if(ask.opt == "Run for Your life.."){
           console.log(chalk.red.bold.italic("You Loose, Better luck for next time"))
           process.exit()
       }
       }
       if(opponent.Select === "Assassin"){
   
        let ask = await inquirer.prompt([{
            type:"list",
            name:"opt",
            message:"Select Your Opponent",
            choices: ["Attack","Drink Portion","Run for Your life.."],
        }]);
        if(ask.opt == "Attack"){
            let num = Math.floor(Math.random()*2);
            if(num>0){
        p1.fuelDecrease()
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
        console.log(chalk.bold.green`${o1.name} fuel is ${o1.fuel}`)
          if(p1.fuel<=0){
             console.log(chalk.red.bold.italic("You Loose, Better luck for next time"))
             process.exit()
          }
     }
            if(num <=0){
                o1.fuelDecrease()
                console.log(chalk.bold.green`${p1.name} fuel is ${p1.fuel}`)
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
                if(o1.fuel<=0){
                 console.log(chalk.green.bold.italic("You Win!"))
                 process.exit()
              }
            
        }
        }
        if(ask.opt == "Drink Portion"){
            p1.fuelIncrease()
            console.log(chalk.bold.italic.green(`You Drink Health Portion Your Fuel is ${p1.fuel}`))
        }
        if(ask.opt == "Run for Your life.."){
            console.log(chalk.red.bold.italic("You Loose, Better luck for next time"))
            process.exit()
        }
        }
        if(opponent.Select === "Zombie"){
   
            let ask = await inquirer.prompt([{
                type:"list",
                name:"opt",
                message:"Select Your Opponent",
                choices: ["Attack","Drink Portion","Run for Your life.."],
            }]);
            if(ask.opt == "Attack"){
                let num = Math.floor(Math.random()*2);
                if(num>0){
            p1.fuelDecrease()
            console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
            console.log(chalk.bold.green`${o1.name} fuel is ${o1.fuel}`)
              if(p1.fuel<=0){
                 console.log(chalk.red.bold.italic("You Loose, Better luck for next time"))
                 process.exit()
              }
         }
                if(num <=0){
                    o1.fuelDecrease()
                    console.log(chalk.bold.green`${p1.name} fuel is ${p1.fuel}`)
                    console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
                    if(o1.fuel<=0){
                     console.log(chalk.green.bold.italic("You Win!"))
                     process.exit()
                  }
                
            }
            }
            if(ask.opt == "Drink Portion"){
                p1.fuelIncrease()
                console.log(chalk.bold.italic.green(`You Drink Health Portion Your Fuel is ${p1.fuel}`))
            }
            if(ask.opt == "Run for Your life.."){
                console.log(chalk.red.bold.italic("You Loose, Better luck for next time"))
                process.exit()
            }
            }
}
while(true)
