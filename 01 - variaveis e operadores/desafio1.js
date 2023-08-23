const precoCombustivel = 5.79;
const kmPorLitro = 12;
const distanciaEmKm = 1580;



const litrosConsumidos = distanciaEmKm / kmPorLitro;
const valorViagem = litrosConsumidos * precoCombustivel;
console.log(valorViagem.toFixed(2));



