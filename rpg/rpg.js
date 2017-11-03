var readline = require("readline-sync")

var backpack = []
var gp = 0 + ("gp")
var notHome = 1
var baddies = ["Bear", "Wolf", "BF Dragon", '"harmless" Rabbit']

console.log("You wake up in a forest, nothing around except your backpack...")

var choices = ["Walk forward", "Check backpack", "Look around"]

index = readline.keyInSelect(choices, "What do you do?")
// -----------------------------------------------------------------------------

function rng(min, max) {
    return Math.floor(Math.random() * (5 - 1 + 1)) + 1
}

console.log(rng())
//------------------------------------------------------------------------------

function walk() {
    if (index === 0) {
        if (rng() === 1) {
            fight()
        } else {
            console.log("Luckily, you proceed unnoticed and take a few steps forward...")
        }
    }
}
//------------------------------------------------------------------------------

function runAway() {
    if (rng() === 3) {
        console.log("You trip and fall... And wait your impending doom")
    } else {
        console.log("you successfully wuss out of the fight... Congrats")
    }
}
//------------------------------------------------------------------------------

function baddySelect() {
    Math.floor(Math.random() * baddies.length)
}
//------------------------------------------------------------------------------

function fight() {
    console.log("Bad luck!!  You cross paths with a baddy")
}
//------------------------------------------------------------------------------
function att() {
    while (inFight === 1)
        if (rng() === 5) {
            console.log("the + (randoBaddy) +lunges at you...")
        } else {

        }
}
//------------------------------------------------------------------------------
function dmg() {
    if ()
}
//------------------------------------------------------------------------------
function ded() {
    if (hp = 0) {
        console.log("I guess you never had anyone to tell you that\nyou need weapons to fight...?")
    }
}
//------------------------------------------------------------------------------
function win() {
    if (notHome === 0) {
        console.log("Congrats, you ran away enough to survive another day!!")
    }
}
//------------------------------------------------------------------------------
