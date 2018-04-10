
var list = document.getElementById('list');
var add = document.getElementById('addElem');

   function checkOnclickEvent() {
    var element = document.createElement('li');
    var listLength = list.getElementsByTagName('li').length;
    console.log(listLength)
    //for (i=0; i < listLength; i++) {
      element.innerHTML = "item " + listLength;

      if (listLength == 9) {
        alert("We've already got enough new items, it's time to stop!");
      };
    //}
    console.log(element);
    list.appendChild(element);
 }

add.addEventListener('click', checkOnclickEvent);


/*   function checkOnclickEvent1() {
    var element1 = document.createElement('li');
    var listLength1 = list.getElementsByTagName('li').length;
    console.log(listLength1)
    var i = 0;
    while (i < listLength1) {
      element1.innerHTML = "item " + listLength1;
      i++;

      if (listLength1 == 9) {
        alert("We've already got enough new items, it's time to stop!");
        break;
      };
    }
    console.log(element1);
    list.appendChild(element1);
 }

add.addEventListener('click', checkOnclickEvent1);*/
