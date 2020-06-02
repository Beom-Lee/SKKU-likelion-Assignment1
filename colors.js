var Links = {
    setColor:function (color){
    //   var alist = document.querySelectorAll('a');
    //   var i = 0;
    //   while(i < alist.length){
    //       alist[i].style.color = color;
    //       i = i + 1;
    //   }
    $('a').css('color', color);        
    }
  }

  
  
  var Body = {
    setColor:function (color){
    //document.querySelector('body').style.color = color;
    $('body').css('color', color);
},
    setBackgroundColor:function (color){
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
}
  }
 
  function nightDayHandler(self){
    var target = document.querySelector('body');
    if(self.value === 'night'){
      Body.setBackgroundColor('black');
      Body.setColor('white');
      self.value = 'day';
      
      Links.setColor('powderblue');
    } else {
      Body.setBackgroundColor('white');
      Body.setColor('black');
      self.value = 'night';

      Links.setColor('blue');
    }
      }

  function password() {
    var pwd = prompt("비밀번호를 입력하세용");
    if(pwd == "1234") {
      
      alert("딩동댕동");
    } else{
        alert("땡");
    }
  }