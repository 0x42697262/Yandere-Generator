var age = ["Your yandere is younger than you, by 5-10 years. Onii-chan!",
"You're the same age. How convenient! (And likely.)", "Your yandere is older than you by 5 to 10 years. Ara ara~."];
var skin = ["Very dark/black", "Deeply tanned","Tanned", "Light", "Very light/pale"];
var eyes = ["Brown or Black", "Blue", "Red", "Yellow", "Purple", "Green", "Shifting colors"];
var hair = ["Black", "Brown", "Blonde", "Red", "Green", "Purple", "Blue", "Blend of two colors of your choice."];
var breasts = ["She's got nothing there, flat as board. She's an A cup at best.",
"Her breasts are small, but very sensitive. B or C cup.", "Her breasts are average, at about a D cup. Great for cupping!",
"Her tits are huge. She's got an E-cup, and she might have a back problem!",
"She has huge knockers! She's got an F or G cup, depending on your tastes."];
var ass = ["The flattest. Don't want none unless you got buns, hun!",
"Getting there. It's not much to look at, but a good flex would improve it.",
"Her ass is average. Good enough for most.", "Aw shit. Now you can take your hand and squeeze that shit!",
"DAMN! You like big butts and you cannot lie, she definitely got one!"];
var background = [];
background[1] = "Your yandere is supernatural. She might be a spirit, or a monster of some kind. She might even be some of monster girl.";

var elementIDList = ['age', 'skin', 'eyes', 'hair', 'breasts', 'ass'];
var arrayList = [age, skin, eyes, hair, breasts, ass];
var elIDLen = elementIDList.length;
var arrayLen = arrayList.length;

function getRandom(elementID, array){
    return document.getElementById(elementID).innerHTML = array[Math.floor(Math.random() * array.length)];
}

function GenerateWaifu(){
    for (var i=0; i < elIDLen; i++){
        getRandom(elementIDList[i], arrayList[i]);
    }
}
