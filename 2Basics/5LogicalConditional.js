//Allow user to access course if he is :
//logged in from Email
//logged in from Google
//logged in from Facebook

var email = true;
var facebook = false;
var google = false;


if(email || facebook || google){
    console.log("Login Success");
}

// if(isLoggedIn){
// console.log("Logged IN Success");
// if(isEmailVerified){
//     console.log("Email is verified");
//     if(cardInfo){
//         console.log("You can make a purchase");
//     }
// }