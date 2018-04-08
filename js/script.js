
var list = document.getElementById('list');
var add = document.getElementById('addElem');

   function checkOnclickEvent() {
    var element = document.createElement('li');
    var listLength = list.getElementsByTagName('li').length;
    for (i=0; i < listLength; i++) {
      element.innerHTML = "item " + listLength;

      if (i == 9) {
        alert("We've already got enough new items, it's time to stop!");
        break;
      }
    }
    //console.log(element.innerHTML);
    list.appendChild(element);
 }

add.addEventListener('click', checkOnclickEvent);
