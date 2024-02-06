// ri: row index
let ri = 1;
let aryFruit = [];
// fruit codes
// JSON object
let oFruit = {
  'btnFA': '&#127823;',
  'btnFB': '&#127820;',
  'btnFC': '&#127826;',
};

// id starts with btnF
let buttons = document.querySelectorAll('[id^="btnF"]');

// anomymous function
buttons.forEach(function(abtn) {
  abtn.addEventListener('click', function() { putFruit(abtn.id) });
});

function putFruit(btnID) {
  let aItem = [];
  if (ri <= 7) {
    rowIndex.value = ri;
    // empty the array
    aryFruit.length = 0;
    for (let i = 0; i < ri; i++) {
      aryFruit.push(`<span class="fruit-item">${oFruit[btnID]}</span>`);
    }
    aItem = document.querySelector(`#row${ri}`);
    aItem.innerHTML = aryFruit.join('');
    ri++;
  }
}

btnReset.addEventListener('click', function() {
  ri = 1;
  let listItems = document.querySelectorAll('#fruit-lines li');
  listItems.forEach(function(aItem) {
    aItem.innerHTML = '';
  });
  document.querySelector('#rowIndex').value = ri;
});