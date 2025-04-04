
function validatePassword(password){
let minLength = password.length >= 8;
let hasUpperCase = false;
let hasLowerCase = false;
let hasNumber = false;
let hasSpecials = false;

let specials = "!@#$%^&*()-_=+[]{}|;:,.<>?";

for(let i=0; i < password.length; i++) {
    let char = password[i];

if(char >= "A" && char <= "Z") {
  hasUpperCase=true;
 }
else if(char >= "a" && char <= "z") {
  hasLowerCase=true;
 }
else if(char >= "0" && char <= "9") {
  hasNumber = true;  
 }
else if(specials.includes(char)) {
  hasSpecials = true
 }
 }

 let isValid = minLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecials;

 let errors = []
 if(!minLength) errors.push("Password must include at least 8 characters");
 if(!hasUpperCase) errors.push("Password must include at least one uppercase letter");
 if(!hasLowerCase) errors.push("Password must include at least one lowercase letter");
 if(!hasNumber) errors.push("Password must include at least one lowercase letter");
 if(!hasSpecials) errors.push("Password must include at least one lowercase letter");

 return {
    isValid , 
    errors 
  };

}

let password = prompt("Enter your password");
let result = validatePassword(password);
if (result.isValid) {
    alert("Password is Valid");
} else {
    alert(result.errors
    )
}
