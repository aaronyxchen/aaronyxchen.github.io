let objFruit = {
    'tomato': '&#127813;',
    'grapes': '&#127815;',
     'melon': '&#127816;',
'watermelon': '&#127817;',
 'tangerine': '&#127818;',
     'lemon': '&#127819;',
    'banana': '&#127820;',
 'pineapple': '&#127821;',
 'red apple': '&#127822;',
'green apple': '&#127823;',
      'pear': '&#127824;',
     'peach': '&#127825;',
  'cherries': '&#127826;',
'strawberry': '&#127827;',
   'avocado': '&#129361;',
 'kiwifruit': '&#129373;',
};

let objPrice = {
    'tomato': 10,
    'grapes': 20,
     'melon': 30,
'watermelon': 40,
 'tangerine': 50,
     'lemon': 60,
    'banana': 70,
 'pineapple': 80,
 'red apple': 10,
'green apple': 20,
      'pear': 30,
     'peach': 40,
  'cherries': 50,
'strawberry': 60,
   'avocado': 70,
 'kiwifruit': 80,
};

let arrFruit = Object.keys(objFruit);
console.log(arrFruit);

// let arrPrice = Object.keys(objPrice);
// console.log(arrPrice); ${objPrice[fruit]}

arrFruit.forEach(function(fruit) {
selFruit.add(new Option(fruit[0].toUpperCase() + fruit.slice(1) + " $" + objPrice[fruit], fruit));
});

selFruit.addEventListener('change', function() { putFruit()} );
selFruit.addEventListener('dblclick', function() { putFruit()} );

let fruitCount = 1;
let totalPrice = 0;
divPrice.innerHTML = '$0';

function putFruit() {
// let fruitCount = 1; // get from array or element (.text) (parseInt)
let fruit = selFruit.options[selFruit.selectedIndex].value;
if (fruit != '') {
   totalPrice = totalPrice + parseInt(objPrice[fruit]);
   // console.log(totalPrice);
   let fruitItem = document.querySelector(`#${fruit}-count`);
   // console.log(`#${fruit}-count`);
   if (fruitItem == null) {
     let fruitName = selFruit.options[selFruit.selectedIndex].text;
     divCart.innerHTML += `
         <div class="item">
             <span class="fruit">${objFruit[fruit]}</span>
             
             <br>${fruitName} 
             x <span id="${fruit}-count">${fruitCount}</span>
         </div>`;
   }
   else {
     // console.log(fruitItem.innerText);
     fruitItem.innerText = parseInt(fruitItem.innerText) + 1;
   }
}
checkout();
}

function clearCart() {
divCart.innerHTML = '';
fruitCount = 1;
totalPrice = 0;
checkout();
}

function checkout() {
console.log(totalPrice);
divPrice.innerHTML = `
<div class="item">
   $<span>${totalPrice}</span>
</div>`;
}