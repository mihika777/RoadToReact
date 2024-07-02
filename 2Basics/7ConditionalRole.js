//Create an app w following roles :
//admin - gets full acess
//subadmin - gets access to create/delete courses
//testprep - gets access to create/delete tests
//user - gets access to consume content
/// multiple things to check, SWITCH N CASE

//type switch and double tab to make a sample structure
//switch(key) KEY = Value to be Matched
//case value to be compared, VALUE = Can be no./ stri
//break after every case, cause if you don't it will go check other statements too

var user = "admin";

switch (user) {
  case "admin":
    console.log("You get full access");
    break;
  case "subadmin":
    console.log("gets access to create/delete courses");
    break;
  case "testprep":
    console.log("gets access to create/delete tests");
    break;
  case "user":
    console.log("gets access to consume content");
    break;

  default: //if no access then default value || When nothing else matches
    console.log("Trial user");
    break;
}
