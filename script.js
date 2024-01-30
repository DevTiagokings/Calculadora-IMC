const calcular = document.getElementById('calcular');
 
//nome.value='fernando Leonid' preenche a caixa com o nome escrito
function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);
        
        let classificacao = "";

        resultado.textContent= valorIMC;
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }
}


calcular.addEventListener('click', imc);
