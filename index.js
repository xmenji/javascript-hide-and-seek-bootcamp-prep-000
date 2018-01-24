function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  var element = document.querySelector('#nested div div div div.target');
  element.parentNode.removeChild(element);
}

function increaseRankBy(n){
  var rankList = document.querySelectorAll('ul.ranked-list li');
  
  for(var x = 0; x < rankList.length; x++){
    rankList[x].innerHTML = parseInt(rankList[x].innerHTML) + n;
  }
}

function deepestChild(){
  var grandNodes = document.querySelectorAll('#grand-node');
  
  return grandNodes[grandNodes.length-1];
}