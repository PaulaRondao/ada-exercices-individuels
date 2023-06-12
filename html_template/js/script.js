//prompt the users for the name
var name = window.prompt("Quel est ton prénom ?");
var message = "Bonjour";
document.querySelector("body").innerHTML = message + " " + name;

//prompt the users for the date of birth
var birthday = window.prompt("Quelle est ton année de naissance ?");
var age = 2023 - birthday;
document.querySelector("body").innerHTML = "Vous avez " + age;

console.log("Vous avez " + age)





