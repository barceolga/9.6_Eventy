
var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function(e) {
   function checkOnclickEvent() {
    var element = document.createElement('li');
    var listLength = list.getElementsByTagName('li').length;
    for (i=0; i < listLength; i++) {
      element.innerHTML = "item " + listLength;
    }
    console.log(element.innerHTML);
    list.appendChild(element);
 }
console.log(checkOnclickEvent());
});
