let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = function(valueInEuro){
    return valueInDollar= valueInEuro * 1.2;
}

const fromDollarToYen = function(valueInDollar){
    return valueInYen=(valueInDollar/1.2) * 127.9;
}

const fromYenToPound = function(valueInYen){
    return valueInPound=(valueInYen/127.9)* 0.8;
}

const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3));

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }


