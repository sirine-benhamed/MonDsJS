let test=document.querySelector('h3');
let cole = document.querySelector('#coul');
cole.addEventListener('change', function() {
    console.log(cole); 
    test.style.color = cole.value;
    });

let tail=document.querySelector('#nb');
tail.addEventListener('change', function() {

test.style.fontSize=tail.value + "px";
});

let select=document.querySelector('#select');
select.addEventListener('change',function(){
    
    test.style.fontFamily=select.value;
});