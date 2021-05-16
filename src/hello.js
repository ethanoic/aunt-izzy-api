console.log("hi there!");

//  problem statement/sum
//  solve this tom has 4 apples, kate has 10 apples,
//  how many apples do they have altogether

var tom = 4;
var kate = 10;

var total = tom + kate;

console.log("there are a total of " + total + " apples");

function add(x, y) {
  let total = x + y;
  return total;
}

var all_apples = add(tom, kate);

console.log("added using add function = " + all_apples);
