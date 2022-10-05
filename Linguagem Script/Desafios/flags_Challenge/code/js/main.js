import flags from './model/flags.js';

const main = document.querySelector('main');

function InsertFlags(flag) {
  const view = `<div class="flag col-2 my-2 text-center">
  <img src='${flag.image}'>
  <p>${flag.name}</p>
  </div>`;

  main.insertAdjacentHTML('beforeend',view);
}

function loadflags(flags) {
  flags.map((flag) => InsertFlags(flag));
}
loadflags(flags);
