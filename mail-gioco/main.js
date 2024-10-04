let email = prompt('inserisci la tua email');
let emailControl = ['user123@gmail.com', 'user456@gmail.com', 'user789@gmail.com'];
let canAccess;

canAccess = emailControl.includes(email)
if (canAccess) {
    console.log(`Bentornato ${email}`);
} else {
    console.log(`Mi dispiace ${email} non é consentito il tuo accesso`);
}

/* 
for (let i = 0; i < emailControl.length; i++){
thisEmailControl = emailControl;

    if (thisEmailControl === email) {
    canAccess = true;
    break;
    }
}
console.log(canAccess);
*/