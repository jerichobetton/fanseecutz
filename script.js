let game = "Game: mario";
let character = "Character: luigi";
console.log(game);
console.log(character);
game = "Game: zelda";
character = "Character: midna";
console.log(game);
console.log(character);
character = "Character Switch: link";
console.log(character);

//FUNCTIONS

function sayMyName(name) {
    console.log("Salut! Tu t'appelles " + name + "!")
};

sayMyName("King Josh");

function cityAndState(city, state) {
    console.log("You live in " + city + ", " + state)
};

cityAndState("Columbus", "Ohio");

function whoAmI(name, city, state) {
    console.log("I think I know you! Your name is " + name + ", and you're from " + city + ", " + state + "!")
};

whoAmI("EhLieAsssss", "Windhelm", "Skyrim");
//let myName = "King Josh";
function todaysForecast(temp, humidity, windDir, windSpeed, outsideCondition) {
    console.log("Oh, " + name + "! I forgot to let you know that it'll be " + temp + " degrees kelvin outside. " + "The humidity is " + humidity 
    + ", so depending on your lungs, you may or may not need a mask. The wind is soaring to the " + windDir + " at a speed of " 
    + windSpeed + ", so if you plan to glide, keep that in mind... Oh! There's also a slight chance of " + outsideCondition + " this afternoon. Godspeed!")
};

todaysForecast(92, 306, "West", "525,600 MPH", "dragons");

