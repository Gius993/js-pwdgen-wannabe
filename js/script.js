//in pagina la stringa nome utente
//nome utente
const userName = prompt('Dimmi il tuo nome');
//Cognome utente
const userLastame = prompt('Dimmi il tuo cognome');
//Colore preferito
const userFavoritecolor = prompt('Dimmi il tuo colore preferito');
//password
//Creo il messaggio finale per l'utente
const userMessage =  userName + userLastame + userFavoritecolor + ('21');

//Password
document.getElementById('password').innerHTML = userMessage;

