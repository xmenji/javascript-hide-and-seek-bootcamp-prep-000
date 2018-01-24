function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  var element = document.querySelector('#nested div div div div.target');
  element.parentNode.removeChild(element);
}

function increaseRankBy(n){
  var rank1 = document.getElementsByClassName('ranked-list[0]');
  var rank2 = document.getElementsByClassName('ranked-list[1]');
  var length = rank1.length + rank2.length;
  var element;
  
  for(var x = 0; x < length; x++){
    element = document.getElementsByClassName('ranked-list');
    document.getElementsByClassName('ranked-list') = parseInt(element + n);
  }
}