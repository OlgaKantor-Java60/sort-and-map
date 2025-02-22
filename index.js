const array = ["Hello", 122, -10, "Java", 4000, "JavaScript", 500, "Nodejs"];

function compNumStr(e1, e2) {
  //TODO
  //returns negative, positive or 0 so that
  //sorting was as follows
  //first numbers sorted by descending order
  //after numbers strings sorted by ascending order
  let res = comp1(e1, e2);
  if (res === 0) {
    res = comp2(e1, e2);
  }
  return res;
}

function comp1(a, b){
  let res = 0;
  if (typeof a == 'number' && typeof b == 'string')
    res = -1;
  if (typeof b == 'number' && typeof a == 'string')
    res = 1;
  return res;
}

function comp2(a, b){
  let res = 0;
  if (typeof a == 'number' && typeof b == 'number')
    res = b-a;
  if (typeof b == 'string' && typeof a == 'string')
    res = a-b;
  return res;
}


function orderedList(arr) {
  const arr2 = arr.map(function (e) {
    let res =
      typeof e == "number" ? 
      (e = `<li class="item item_number">${e}</li>`) : 
      (e = `<li class="item">${e}</li>`);
    return res;
  });
  const result = arr2.join(" ");
  return `<ol>${result}</ol>`;
}

const bodyElement = document.querySelector("body");
bodyElement.innerHTML = orderedList(array);

console.log(array.sort(compNumStr));