let h1 = document.createElement('h1');
h1.innerHTML = 'Minha Aplicação';

let header = document.createElement('header');
header.className = 'cabecalho';
header.append(h1);

let exibir = true;
let botao = document.createElement('button');
botao.innerHTML = 'ocultar';
botao.addEventListener('click', function(event) {
  if (exibir) {
    
  }
});
let nav = document.createElement('nav');
botao.innerHTML = 'Minha Aplicação';

let main = document.createElement('main');

let footer = document.createElement('footer');

let root = document.getElementById('root');
root.append(header);
root.append(nav);
root.append(main);
root.append(footer);