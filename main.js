const form = document.getElementById('form-atividade')
const nome = [];
const numero = [];
const cadastrado = '<img src="https://i.pinimg.com/originals/9a/04/f5/9a04f5eba84bb7df3cb8e75f509f362e.gif" class="cadastradoImg" alt="noise feliz">';

let linhas = '';
form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarLinha();
    atualizaTabela();
});

function adicionarLinha(){
    const inputNome = document.getElementById('nome');
    const inputNumero = document.getElementById('telefone');
    
    if (numero.includes(inputNumero.value)){
        alert(`O numero ${inputNumero.value} já está cadastrado`)
    }else{

    nome.push(inputNome.value);
    numero.push(inputNumero.value);

    let linha = '<tr>';
    linha += `<td> ${inputNome.value}</td>`;
    linha += `<td> ${inputNumero.value}</td>`;
    linha += `<td>${cadastrado}</td>`;
    linha += `</tr>`;

    linhas += linha;
    atualizaTabela()

    }
    inputNome = '';
    inputNumero = '';



}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas
}