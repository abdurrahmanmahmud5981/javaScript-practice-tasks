/***
Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

// function freeDrinks(burgerPrice) {
//   if (burgerPrice >= 500) {
//     console.log("free coke");
//   } else {
//     console.log("Coke: 30tk");
//   }
// }

// freeDrinks(600);
// freeDrinks(400);


const burgerPrice = 600;
if (burgerPrice >= 500) {
  console.log("free coke");
} else {
  console.log("Coke: 30tk");
}
console.log(burgerPrice >= 500 ? "free coke" : "Coke: 30tk");
