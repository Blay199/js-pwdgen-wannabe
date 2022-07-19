const title = document.getElementById('passwordGenerator')
const name = prompt('dimmi come ti chiami')
const surname = prompt('dimmi il tuo cognome')
const preferite = prompt ('dimmi il tuo colore preferito')
const generetedPwd = name + surname + preferite

title.innerHTML = 'La tua password è' + generetedPwd

// console.log(name);
// console.log(surname);
// console.log(preferite);
console.log(generetedPwd)


