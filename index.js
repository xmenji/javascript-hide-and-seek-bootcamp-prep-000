function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  var element = document.querySelector('#nested div div div div.target');
  element.parentNode.removeChild(element);
}

function increaseRankBy(n){
  var rankLists = document.querySelectorAll('.ranked-list');
  
  for(var x = 0; x < rankLists.length; x++){
    rankLists[x] = parseInt(rankLists[x] + n);
  }
}