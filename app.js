var span= document.getElementsByClassName('carousel-button');
var div= document.getElementsByClassName('card');
var num = document.querySelectorAll('.card').length;
console.log(num)
var l=0;
span[1].onclick=()=>{
    l++;
    for(var i of div)
    {
       
        if(l==0){
            i.style.left='0px';
        }
        if(l==1){
            i.style.left='-740px';
        }
        if(l==2){
            i.style.left='-1480px';
        }
        if(l==3){
            i.style.left='-2220px';
        }
        if(l==4){
            i.style.left='-2960px';
        }
        if(l>=num-3){
            i.style.left='0px';
            l=0;
            console.log(num);
        }
    }
}

span[0].onclick=()=>{
    l--;
    for(var i of div)
    {
        if(l==0){
            i.style.left='0px';
        }
        if(l==1){
            i.style.left='-740px';
        }
        if(l==2){
            i.style.left='-1480px';
        }
        if(l==3){
            i.style.left='-2220px';
        }
        if(l==4){
            i.style.left='-2960px';
        }
        if(l>=num-3){
            i.style.left='0px';
            l=0;
        }
    }
}