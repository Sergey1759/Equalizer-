var left = document.getElementById('left');
var right = document.getElementById('right');
var sub1 = document.getElementById('sub-1');
var sub2 = document.getElementById('sub-2');
var sub3 = document.getElementById('sub-3');




    

var buf;
var arr = [sub1,sub2,sub3];



left.onclick = function(){
    for (var i =0; i < 3; i++){
 var a = window.getComputedStyle(arr[i]).getPropertyValue('display');
    if (a != 'none'){
        buf = 'sub'+(i+1);
    }
    }
    function addLe1(){
        sub1.style.display = 'none';
        sub1.style.animationName = '';
        sub3.style.animationName = '';
    }
     function addLe2(){
        sub2.style.display = 'none';
        sub2.style.animationName = '';
        sub1.style.animationName = '';
    }
     function addLe3(){
        sub3.style.display = 'none';
        sub3.style.animationName = '';
        sub2.style.animationName = '';
         
    }
    if(buf == 'sub1'){   
        sub3.style.display = 'block';
        
        sub3.style.animationName = 'opacit';
        sub3.style.animationDirection = 'normal';
        sub3.style.animationDuration = '1s';
        
        sub1.style.animationName = 'margleft';
        sub1.style.animationDirection = 'normal';
        sub1.style.animationDuration = '1s';
        
        setTimeout(addLe1,1000);
       
        
    } else if(buf == 'sub2'){
         sub1.style.display = 'block'; 
        
        sub1.style.animationName = 'opacit';
        sub1.style.animationDirection = 'normal';
        sub1.style.animationDuration = '1s';
        
        sub2.style.animationName = 'margleft';
        sub2.style.animationDirection = 'normal';
        sub2.style.animationDuration = '1s';
        
        setTimeout(addLe2,1000);
       
    } else if(buf == 'sub3'){
         sub2.style.display = 'block';
        
        sub2.style.animationName = 'opacit';
        sub2.style.animationDirection = 'normal';
        sub2.style.animationDuration = '1s';
        
        sub3.style.animationName = 'margleft';
        sub3.style.animationDirection = 'normal';
        sub3.style.animationDuration = '1s';
        
        setTimeout(addLe3,1000); 
        
    }
}

right.onclick = function(){
    for (var i =0; i < 3; i++){
 var a = window.getComputedStyle(arr[i]).getPropertyValue('display');
    if (a != 'none'){
        buf = 'sub'+(i+1);
    }
    }
    
      function addRigh1(){
        sub1.style.display = 'none';
        sub1.style.animationName = '';
        sub2.style.animationName = '';
    }
     function addRigh2(){
        sub2.style.display = 'none';
        sub2.style.animationName = '';
        sub3.style.animationName = '';
    }
     function addRigh3(){
        sub3.style.display = 'none';
        sub3.style.animationName = '';
        sub1.style.animationName = '';
         
    }
     
    if(buf == 'sub1'){
        sub2.style.display = 'block'; 
        
        sub2.style.animationName = 'opacit';
        sub2.style.animationDirection = 'normal';
        sub2.style.animationDuration = '1s';
        
        sub1.style.animationName = 'margright';
        sub1.style.animationDirection = 'normal';
        sub1.style.animationDuration = '1s';
        
        setTimeout(addRigh1,1000);
        
    } else if(buf == 'sub2'){
        sub3.style.display = 'block'; 
        
        sub3.style.animationName = 'opacit';
        sub3.style.animationDirection = 'normal';
        sub3.style.animationDuration = '1s';
        
        sub2.style.animationName = 'margright';
        sub2.style.animationDirection = 'normal';
        sub2.style.animationDuration = '1s';
        
        setTimeout(addRigh2,1000);
        
    } else if(buf == 'sub3'){
        sub1.style.display = 'block'; 
        
        sub1.style.animationName = 'opacit';
        sub1.style.animationDirection = 'normal';
        sub1.style.animationDuration = '1s';
        
        sub3.style.animationName = 'margright';
        sub3.style.animationDirection = 'normal';
        sub3.style.animationDuration = '1s';
        
        setTimeout(addRigh3,1000);
    }
}
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


