
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return getFirstSelector(`#nested .target`);
}

function increaseRankBy(n) {
  var rlNodes = document.querySelectorAll('.ranked-list li')
  
  for (let i = 0; i < rlNodes.length; i++) {
    rlNodes[i].innerHTML = parseInt(rlNodes[i].innerHTML) + n;
  }
}

function deepestChild() {
  var grande = document.querySelector('#grand-node');
  
  var childNode = null;
  
  while ()
  for (let i = 0; i < grande.length; i++) {
    grande.
  }
  
}