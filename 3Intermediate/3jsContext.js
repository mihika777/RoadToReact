sayHello();  // usuage before the function is declared

function sayHello(){
    console.log("Hello");
}

//sayHello(); 


if (2==="2"){  //both r diff , no n string
    console.log("This is true");
}

var myName = "mihika";
if (myName == myName){
    console.log("This is again a true statement");
}

// won't work cause window as window as a context doesn't exist within the node
// But still here is a global context but we don't refer it as node
var myName = "mihika"; // Also, no nned to declare variables again and again
if (myName == window.myName){ 
    console.log("This is again a true statement");
}