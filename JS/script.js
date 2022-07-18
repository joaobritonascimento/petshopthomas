
const criaStorage = () => {
   //alert('Ola');
    window.localStorage.setItem('video','Armazenando dados com localStorage em JS');
};



const getStorage =() =>{
  const lastname = window.localStorage.getItem('lastname');

  if(lastname){
    document.getElementById('lastname').innerHTML = lastname;
  }
}

document.getElementById('lastname').onclick = getStorage;