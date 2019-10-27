var score=0;
var timeStop;
var ask=document.getElementById('question');
var result=document.getElementById('input');
var point=document.querySelector('.point');
var time=document.querySelector('.time');
var yourScore=document.querySelector('.your-score');
var question=['Curabitur','aliquet','convallis','fringilla','ullamcorper','Suspendisse','venenatis','Vestibulum','admission',
            'practice','establish','constitute','generate','campaign','entertain','financial','territory','manifest','flag','tour',
            'boast','bestow','tread','cede','facile','flourish','Gravity','indication','dispatch','latitude','fortitude','livelihood',
        'stupendous','plumb','chide','Exterior','Correct','Ambiguity','laugh','Knock','whether','Accept','nice','Fall In Love','Funny'
        ,'Psycho','knee','Essential','Admit','Boy','child','Cookie','Biscuit','color','Favorite','Aeroplane'];
var reload=document.querySelector('.reload');
var winningScore=document.querySelector('.result').style.display='none';
var gameOver=document.querySelector('.result-2').style.display='none';


start();



function start(){
    timeStop=10;
    reload.style.display='none';
    var tryAgain=document.querySelector('.try').style.display='none';
    var random=Math.floor(Math.random()*question.length);
    ask.innerHTML=question[random]
    result.style.display='block';
    result.value=''; 
    result.addEventListener('input',match);
    setInterval(countdown,1000); 
}
function change(){
    ask.style.opacity='1';
    var gameOver=document.querySelector('.result-2').style.display='none';
    reload.style.display='none';
    var tryAgain=document.querySelector('.try').style.display='none';
    var random=Math.floor(Math.random()*question.length);
    ask.innerHTML=question[random]  
    result.style.display='block';  
    result.addEventListener('input',match);
    timeStop=10;
    result.value='';        
}

function match(){
    var winningScore=document.querySelector('.result').style.display='none';
    var gameOver=document.querySelector('.result-2').style.display='none';
    if(result.value===ask.innerHTML){
        var winningScore=document.querySelector('.result').style.display='block';
        point.innerHTML=score+=2;
        change();          
    }    
}


function countdown(){
    if(timeStop>0){
        timeStop--;
        yourScore.innerHTML=score;    
    }else if(timeStop === 0){
        var winningScore=document.querySelector('.result').style.display='none';
        var gameOver=document.querySelector('.result-2').style.display='block';
        
        result.style.display='none';
        point.innerHTML=score=0;
        reload.style.display='block';
        ask.style.opacity='0';
        var tryAgain=document.querySelector('.try').style.display='block';
        reload.addEventListener('click',change);   
    }
    time.innerHTML=timeStop;
}



