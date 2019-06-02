var elementIDList = ['age', 'skin', 'eyes', 'hair', 'breasts', 'ass', 'personality', 'int_ath'];
var arrayList = [age, skin, eyes, hair, breasts, ass, personality, int_ath];
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
