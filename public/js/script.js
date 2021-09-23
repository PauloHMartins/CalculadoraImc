var idade = document.getElementById('idade');
var altura = document.getElementById('altura');
var peso = document.getElementById('peso');
var botao = document.getElementById('imc');
var res = document.getElementById('resultado');
function calcularImc(pes, alt) {
    return (pes / (alt * alt));
}
botao.addEventListener('click', function () {
    res.innerHTML = "Seu IMC \u00E9 : " + calcularImc(+peso.value, +altura.value).toFixed(2) + " e <br> Sua Idade \u00E9 " + idade.value + " anos.";
});
