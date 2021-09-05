
var Links = {
    setColor:function(color){
    var alist = document.querySelectorAll('a')
        var i = 0;
        while(i<alist.length){
            alist[i].style.color =color;
            i = i+1;}
    }
}

// $('a').css('color', color); 제이쿼리를 이용하는 방법

var Body = {
    setColor:function(color){
        document.querySelector('body').style.color = color;
    },
    // $('body').css('color', color); 제이쿼리를 이용하는 방법

    setBackground:function(color){
        document.querySelector('body').style.backgroundColor = color;
    }
    // $('body').css('backgroundcolor', color); 제이쿼리를 이용하는 방법
}


function NightDayHandler(self){
    var target = document.querySelector('body')


    if(self.value === 'night'){
        Body.setBackground('black');
        Body.setColor('white');
        self.value = 'day' 

        Links.setColor('yellow');
    
        }
        
    else {
        Body.setBackground('white');
        Body.setColor('black');
        self.value = 'night'
       
        Links.setColor('blue');
    }

            }
