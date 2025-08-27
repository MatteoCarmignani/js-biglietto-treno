// richiesta di età e chilometri da conseguire

const ageRequest = parseInt(prompt("Quanti anni hai?"));

const kmRequest = parseInt(prompt("Quanti Km fai?"));

// Calcolo prezzo biglietto standard

let kmPrice = 0.21;

let totalPrice = kmRequest * kmPrice;


// calcolo prezzo in base all'età

if (ageRequest < 18) {

    totalPrice = (totalPrice * 0.20) / 100 

} else if (ageRequest > 65) {

    totalPrice = (totalPrice * 0.40) / 100

};

// prezzo finale 

finalPrice = totalPrice.toFixed(2);

alert(`Il prezzo totale del biglietto è di €${finalPrice}`);