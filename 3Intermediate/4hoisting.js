var num = 2;

function sayMe() {
  console.log("Say me");
}

function tipper(a) {
  var bill = a;
  console.log(bill + 5);
}
tipper(5); // ("5")

//Parsing in Js, =>  parseInt(a)

function tipper(a) {
  var bill = parseInt(a);
  console.log(bill + 5);
}
tipper("5");

function bigTipper(a) {
  var bill = parseInt(a);
  console.log(bill + 15);
}
bigTipper("200");

//IDEAL WAY TO WRITE the Function as a VARIABLE
// BUT THEN !
//2. Variable declarations r scanned & made undefined
// THUS, It'll give an ERROR!!!

//    bigTipper("200");           // this will give err, because this is undefined rn
// if using function as var use it after declaring the function
//if u CALL before declaring, it'll give an ERROR!!!
var bigTipper = function (a) {
  var bill = parseInt(a);
  console.log(bill + 15);
};
bigTipper("200"); // when var =function  // calling after declarin won't give an error

//Basically this point, variables are available but not defined,
//but no error, just value is undifined

// If they are not decrared they are not even available so file will give an erro

// Name is being accesed before it has any value, but it knows there is a name
// this will give output  : undefined

//1.  O/P -> Undefined nt an errr
//console.log(name);
//var name = "mihika";

//2. O/P -> ERRORR
//   console.log(name); // this will give error, because it doesn't know of any name
//(this will stay commented ) var name = "mihika"; // means this name is not availbe but still you r trying to use to err
//commenting this will give err


//1. using name , 2// declaring it later
console.log(name); // that means -> name is gonna be undefined here
var name = "mihi";


function sayName(){
    var name = "Mr.";
    console.log(name);
}
sayName();

console.log(name); // since "mihi" is mentioned above/ avaialble we will get mihi