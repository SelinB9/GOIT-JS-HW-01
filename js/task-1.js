function makeTransaction(quantity, pricePerDroid) {
   
      let totalPrice = Number(quantity) * Number(pricePerDroid);

    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"








/**let Transaction = makeTransaction(5, 3000);
console.log(Transaction);
let Transaction1 = makeTransaction(3, 1000);
console.log(Transaction1);
let Transaction2 = makeTransaction(10, 500);
console.log(Transaction2);*/


/** 
function makeTransaction(quantity, pricePerDroid) {
    return (quantity * pricePerDroid);
}
let x = prompt("sipariş edilen droid miktarını giriniz");
let y = prompt("bir droid fiyatını giriniz");
totalPrice = makeTransaction(x, y);

console.log("you ordered" + x + "droids worth" + totalPrice + "credits!");5


function makeTransaction(quantity, pricePerDroid) {
    return (quantity * pricePerDroid);

}
let totalPrice = makeTransaction(5 , 3000);
console.log("you ordered" + makeTransaction(quantity) + "droids worth" + totalPrice + "credits!");
*/