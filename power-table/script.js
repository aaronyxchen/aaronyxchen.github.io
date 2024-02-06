function powerTable() {
    let iStart = parseInt(txtStart.value);
    // NaN: Not a Number
    if (isNaN(iStart)) {
        iStart = 2;
    }
  
    let items = [];
    for (let i = iStart; i < iStart+7; i++) {
        items.push('<tr>');
            items.push(`<td>${i}</td>`);
            // items.push(`<td>${i**2}</td>`);
            for (let j = 2; j <= 5; j++) {
                items.push(`<td>${i**j}</td>`);
            }
        items.push('</tr>');
    }
  
    tabPower.innerHTML = items.join('');
  }