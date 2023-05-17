//REPL
//PEMDAS

const password = prompt("Enter password");
//pass length
if (password.length >= 6) console.log("Password length sufficient");
else console.log("Password length Insufficient"); 

//breaks in pass
if (password.indexOf(' ')!==-1)console.log('Invalid Password');
else console.log('Valid Password');