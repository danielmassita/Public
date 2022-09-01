var PasseioLite = 150
var PasseioFull = 250
var Mascara = 50
var Nadadeiras = 50
var ValorTotal = 0

let EscolhaLite = true
let EscolhaMascara = true
let EscolhaNadadeiras = true

if (EscolhaLite){
    ValorTotal += PasseioLite
    console.log("Você escolheu o Passeio Lite, custará " +PasseioLite+ " reais." )
}
else {
    ValorTotal += PasseioFull
    console.log("Você escolheu o Passeio Full, custará " +PasseioFull+ " reais." )
}
if (EscolhaMascara){
    ValorTotal += Mascara
    console.log("Você escolheu alugar a Máscara, custará adicionalmente " +Mascara+ " reais.")
}
if (EscolhaNadadeiras){
    ValorTotal += Nadadeiras
    console.log("Você escolheu alugar as Nadadeiras, custarão adicionalmente " +Nadadeiras+ " reais.")
}
console.log("Baseado nas suas opções, o valor total do seu passeio será de " +ValorTotal+ " reais.")