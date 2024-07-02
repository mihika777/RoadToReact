//Define a fn that can ans the role of a user
//A user can be on following roles :
//admin - gets full acess
//subadmin - gets access to create/delete courses
//testprep - gets access to create/delete tests
//user - gets access to consume all content
//other - trial user

//Input: getUserRole(name, role)

function getUserRole(name, role) {
  switch (role) {
    case "admin":
      return `${name} You get full access`;
      break; // this is not necessary
    case "subadmin":
      return `${name} gets access to create/delete courses`;
    case "testprep":
      return `${name} gets access to create/delete tests`;
    case "user":
      return `${name} gets access to consume content`;
    default: //if no access then default value || When nothing else matches
      return `${name} is a trail user`;
  }
}

console.log(getUserRole("mihi", "testprep"));


var getRole = getUserRole("sammy", "user");

console.log(getRole);


//Should write functions like this, it's very comman to write it like this
//In javascript there is special thing we can do, 
//we can store a function inside a variable and use it like a function
// Makes no difference but is conventient to write and call

var getUserRole = function(name, role) {
    switch (role) {
      case "admin":
        return `${name} You get full access`;
        break; // this is not necessary
      case "subadmin":
        return `${name} gets access to create/delete courses`;
      case "testprep":
        return `${name} gets access to create/delete tests`;
      case "user":
        return `${name} gets access to consume content`;
      default: //if no access then default value || When nothing else matches
        return `${name} is a trail user`;
    }
  }
  
            