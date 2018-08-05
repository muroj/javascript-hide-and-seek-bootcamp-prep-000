
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
  
  var currentNode = document.querySelector('#grand-node');
  var prevNode = null;
  
  while (currentNode.querySelector('div')) {
    prevNode = currentNode;
  }
  
  return prevNode;
}