var nombres = [
    "Ana",
    "Luis",
    "María",
    "Carlos",
    "Elena",
    "Pedro",
    "Lucía",
    "Jorge",
    "Laura",
    "Raúl",
    "Clara",
    "Fernando",
    "Sofía",
    "Pablo",
    "Isabel",
    "Ricardo",
    "Marta",
    "Diego",
    "Patricia",
    "Javier"
];

var i = 0; // Inicializar la variable i

while(i < nombres.length) {
    var name = nombres[i];
    if(name[0] === 'J' || name[0] === 'j') {
        console.log("Hello J" + name);
    }else{
        console.log("Hello " + name);
    }
    i++; // Incrementar i en cada iteración para evitar un bucle infinito
}