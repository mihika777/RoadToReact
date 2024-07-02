//Show user a signout button if he is authenticated, 
//otherwise show him option to Login/Signup

var authenticated = true; // means he is logged in or signed up

// if(authenticated){
//     console.log("Show signout button");
// }else {
//     console.log("Show login option");
// }

//Other way - use TERNARY OPERATOR :

authenticated ? console.log("SignOut Button") : console.log("LOGIN");