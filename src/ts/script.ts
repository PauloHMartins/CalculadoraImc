let idade = document.getElementById('idade') as HTMLInputElement;
let altura = document.getElementById('altura') as HTMLInputElement;
let peso = document.getElementById('peso') as HTMLInputElement;
let botao = document.getElementById('imc');
let res = document.getElementById('resultado');

function calcularImc(pes: number, alt: number){
  return (pes / (alt * alt));
}

botao.addEventListener('click', function() {
  res.innerHTML = `Seu IMC é : ${calcularImc( +peso.value , +altura.value ).toString() } e <br> Sua Idade é${idade.value}anos.`;
});