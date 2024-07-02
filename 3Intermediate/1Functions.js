function sayHello(name) {
  console.log("HELLO THERE");
  //console.log("Hello there,", name, "How are you");

  // Use the below to write the above one as,
  //as it is easier to iject the var inside the statements ;-

  console.log(`Hello there, ${name}. How are you?`);
}

// sayHello();   // CALL a Fn
// sayHello;     // Reference a Fn

sayHello("Aastha"); // CALL a Fn
sayHello(":)"); // Reference a Fn



// RETURN Function : diff thn the console log 
//we are just returning it and not printing it
function namslay(){
    return "Hello in India";
}

namslay();


function namslay(){
    return "Hello in India";
}

// creata a var & call it as greetings
// & v can hold whtevr the value is being returned from the
//execution of this fn store it in a variable
//and then log the value of this greetings

var greetings = namslay();
console.log(greetings);
// Directly supply the function with a value instead of using a var also
// supply w anything, console.log is a fn  
console.log(namslay());