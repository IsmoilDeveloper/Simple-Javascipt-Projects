const text = 'My name is Ismoil. I am Web Developer!!';
const container = document.getElementById('container')
let index = 0;

function writeText(){
  container.innerText = text.slice(0, index);

  index++;

  if(index > text.length - 1){
    index = 0;
  }
}

setInterval(writeText, 100)
