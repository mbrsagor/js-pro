// Varialbe to array convert
var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

// your code goes here
let crew = new Array(captain, second, pilot, companion, mercenary, mechanic);
// console.log(crew);


//splice;
var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller"];
console.log(donuts);
donuts.splice(1, 1, "chocolate cruller", "creme de leche"); // removes "chocolate frosted" at index 1 and adds "chocolate cruller" and "creme de leche" starting at index 1
console.log(donuts);


// Array new

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
function hasEnoughPlayers(arrayInstance){
    if(arrayInstance.length >= 7){
        return true;
    }else{
        return false;
    }
}
console.log(hasEnoughPlayers(team));

/*
* ES6
team.forEach(t => {
    console.log(t);
});
*/
// Foreach
team.forEach(function (t) {
    console.log(t);
});
console.log('\n');

// Iterate for loop
for (let t = 0; t < team.length; t++) {
    const element = team[t].toUpperCase();
    console.log(element);
}

