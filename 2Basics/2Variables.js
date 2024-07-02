const uid = "abc123";

// uid = "abcd234";

var fullName = "Aastha Bhandari";
var email = "aasthabhandari0@gmail.com";
var password = "Chickoo";
var confirmPassword = "Chickoo";
var courseCount = 0;
var isLoggedInFromGoogle = false;

// fullName = prompt("Enter your name"); huh

console.log(uid);
console.log("Full Name is: "+ fullName);
console.log(email);

/**
 * This is used to better link strings and variables
 * Just one of the ways of doing this, makes readibltiy better,
 * editing is also better whne you use this
 */
console.log(`
    With unique ID: ${uid}
    User is : ${fullName}
    and his email is: ${email}
    and uses the password: ${password}
`);


var firstName = "Aastha";
var lastName = "Bhandari";
var email = "aasthabhandari0@gmail.com";
var password = "Chickoo";
var country = "India";
var state = "MP";
var courseCount = 0;
var isLoggedInFromGoogle = false;
var isLoggedInFaceBook = true;


console.log(`

    FirstName is : ${firstName}
    LastName is : ${lastName}
    Email is : ${email}
    Password is : ${password}
    Country is : ${country}
    State is : ${state}
    Course Count is : ${courseCount}
    Is he logged in from Google : ${isLoggedInFromGoogle}
    Is he logged in from FB : ${isLoggedInFaceBook}
`);
