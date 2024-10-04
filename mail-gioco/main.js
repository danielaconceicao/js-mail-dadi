let email = prompt('inserisci la tua email');

let emailControl = ['user123@gmail.com', 'user456@gmail.com', 'user789@gmail.com'];

if (emailControl.includes(email)) {
    console.log(`Bentornato ${email}`);
} else {
    console.log(`Mi dispiace ${email} non é consentito il tuo accesso`);
}
