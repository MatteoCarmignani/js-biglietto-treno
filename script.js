// richiesta di età e chilometri da conseguire

const ageRequest = parseInt(prompt("Quanti anni hai?"));

const kmRequest = parseInt(prompt("Quanti Km fai?"));

// Calcolo prezzo biglietto standard

let kmPrice = 0.21;

let totalPrice = kmRequest * kmPrice;


// calcolo prezzo in base all'età

if (ageRequest < 18) {

    totalPrice = (totalPrice * 80) / 100 

} else if (ageRequest > 65) {

    totalPrice = (totalPrice * 60) / 100

};

// prezzo finale 

finalPrice = totalPrice.toFixed(2);

console.log(`Il prezzo totale del biglietto è di €${finalPrice}`);