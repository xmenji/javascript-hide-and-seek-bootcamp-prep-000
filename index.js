function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  var element = document.querySelector('#nested div div div div.target');
  element.parentNode.removeChild(element);
}

function increaseRankBy(n){
  var rankLists = document.querySelectorAll('.ranked-list li');
  
  for(var x = 0; x < rankList.length; x++){
    rankLists[x] = parseInt(rankLists[x] + n);
  }
}