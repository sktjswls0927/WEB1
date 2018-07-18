var body = {
  setColor: function(color){
    document.querySelector('body').style.color=color;
  },
  setBackgroundColor: function(color){
    document.querySelector('body').style.backgroundColor=color;
  }
}
var link = {
  setColor: function(color){
    var alist =  document.querySelectorAll('a');
    var i =0;
    while(i<alist.length){
      alist[i].style.color='yellow';
      i = i+1;
    }
  }
}
function method(self){
var  target = document.querySelector('body');
if(self.value==='night'){
  body.setColor('white');
  body.setBackgroundColor('black');
  self.value='day';

  link.setColor('powderblue');
}

else{
  body.setColor('black');
  body.setBackgroundColor('white');
  self.value='night';

  link.setColor('blue');
}
}
