var line = document.getElementById('line');
var newMenu = document.createElement('div');
newMenu.classList = 'new';
newMenu.innerHTML = 'new';



var menu = document.getElementById('menu');
var oldTop = menu.offsetTop;

function fix() {

  var scrollTop = window.pageYOffset;

  if(scrollTop > oldTop ){
      menu.style.position = 'fixed';
      menu.style.top = '0px';
      menu.style.left = '0px';
      menu.style.zIndex = '1111';
      line.insertBefore(newMenu, line.firstChild);

  }else{
      menu.style.position = 'inherit';
      menu.style.top = oldTop+'px';
      menu.style.left = '0px';
      line.removeChild(newMenu);
  }
}
setInterval(fix,10);

var leftPhoto = document.getElementById('leftPhoto');
var rightPhoto = document.getElementById('rightPhoto');

var sub1 = document.getElementById('sub-1');
var img = document.createElement('img');
img.src = '../photo/all/1.jpg';


var bufI = -1;



leftPhoto.onclick = function () {




    bufI = bufI + 1;

    var img1 = document.createElement('img');
    img1.src = '../photo/all/1.jpg';


    var img2 = document.createElement('img');
    img2.src = '../photo/all/1.jpg';


    var img3 = document.createElement('img');
    img3.src = '../photo/all/1.jpg';


    var img4 = document.createElement('img');
    img4.src = '../photo/all/1.jpg';


    var img5 = document.createElement('img');
    img5.src = '../photo/all/1.jpg';


    var img6 = document.createElement('img');
    img6.src = '../photo/all/1.jpg';


    var img7 = document.createElement('img');
    img.src = '../photo/all/1.jpg';


    var img8 = document.createElement('img');
    img.src = '../photo/all/1.jpg';


    var img9 = document.createElement('img');
    img9.src = '../photo/all/1.jpg';


    var img10 = document.createElement('img');
    img10.src = '../photo/all/1.jpg';

    var array = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10];
var del = document.getElementsByTagName('img');



    switch (bufI) {
        case 0:
            sub1.removeChild(array[9]);
            sub1.appendChild(array[0]);
            break;
        case 1:
            sub1.removeChild(array[0]);
            sub1.appendChild(array[1]);
            break;
        case 2:
            sub1.removeChild(array[1]);
            sub1.appendChild(array[2]);
            break;
        case 3:
            sub1.removeChild(array[2]);
            sub1.appendChild(array[3]);
            break;
        case 4:
            sub1.removeChild(array[3]);
            sub1.appendChild(array[4]);
            break;
        case 5:
            sub1.removeChild(array[4]);
            sub1.appendChild(array[5]);
            break;
        case 6:
            sub1.removeChild(array[5]);
            sub1.appendChild(array[6]);
            break;
        case 7:
            sub1.removeChild(array[6]);
            sub1.appendChild(array[7]);
            break;
        case 8:
            sub1.removeChild(array[7]);
            sub1.appendChild(array[8]);
            break;
        case 9:
            sub1.removeChild(array[8]);
            sub1.appendChild(array[9]);
            break;
        default:
            alert( 'Я таких значений не знаю' );
    }


}




