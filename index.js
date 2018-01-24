function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  var element = document.querySelector('#nested div div div div.target');
  element.parentNode.removeChild(element);
}

function increaseRankBy(n){
  var rank1 = document.getElementsByClassName('ranked-list[0]');
  var rank2 = document.getElementsByClassName
}