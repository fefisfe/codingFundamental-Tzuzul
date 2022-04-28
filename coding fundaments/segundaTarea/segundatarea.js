var consumo = prompt("Ingrese su consumo");
var deuda = 0
if (consumo <= 100)
{deuda === 0}
else if(consumo > 100 && consumo <=200)
{
    deuda = (consumo-100)*5
} else {
    deuda = (consumo * 10) - (10 * 200 - 5 * 100)
}
alert("Su deuda es de $" + deuda)