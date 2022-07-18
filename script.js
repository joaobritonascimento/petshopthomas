
/*const criaStorage = () => {
  //alert('Ola');
  window.localStorage.setItem('video', 'Armazenando dados com localStorage em JS');
};


const getStorage = () => {
  const lastname = window.localStorage.getItem('lastname');

  if (lastname) {
    document.getElementById('lastname').innerHTML = lastname;
  }
}

document.getElementById('lastname').onclick = getStorage;*/

function salvarCadastro() {
  if (localStorage.info) {
    localStorage.info = document.getElementById("inputcpf").value;
    localStorage.info = document.getElementById("inputNome").value;
    localStorage.info = document.getElementById("inputEndereco").value;
    localStorage.info = document.getElementById("inputEmail").value;
    localStorage.info = document.getElementById("inputNomePet").value;
    localStorage.info = document.getElementById("inputRaca").value;
    localStorage.info = document.getElementById("inputCidade").value;
    localStorage.info = document.getElementById("inputEstado").value;
    localStorage.info = document.getElementById("inputCEP").value;
  }
}

function carregarCadastro() {
  document.getElementById("inputCPF").value = localStorage.info;
  document.getElementById("inputNome").value = localStorage.info;
  document.getElementById("inputNome").value = localStorage.info;
  document.getElementById("inputEndereco").value = localStorage.info;
  document.getElementById("inputEmail").value = localStorage.info;
  document.getElementById("inputNomePet").value = localStorage.info;
  document.getElementById("inputRaca").value = localStorage.info;
  ocument.getElementById("inputCidade").value = localStorage.info;
  document.getElementById("inputEstado").value = localStorage.info;
  document.getElementById("inputCEP").value = localStorage.info;
}

function salvarCadastroteste() {
  if (localStorage.info) {
    localStorage.info = document.getElementById("dado").value;
  }
}

function carregarCadastroteste() {
  document.getElementById("dado").value = localStorage.info;
}

/* <label>
 <input id="dado"></label>
<button type="button" onclick="salvarCadastroteste()">Salvar</button>
<button type="button" onclick="carregarCadastroteste()">Carregar</button>

<script>
 function salvarCadastroteste(){
   if (localStorage.info) {
     localStorage.info = document.getElementById("dado").value;
   }
 }

 function carregarCadastroteste(){
   document.getElementById("dado").value = localStorage.info;
 }
</script>*/