var character= document.getElementById('character');
var block= document.getElementById('block');


function jump(){
    if (character.classList!="animate"){
        character.classList.add('animate')}
    setTimeout(function(){
        character.classList.remove('animate')
    },500)
}

var checkDead = setInterval(function(){
    var charTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    if(blockLeft<20 && blockLeft>0 && charTop>=130){
        block.style.animation = 'none';
        block.style.display= 'none';
        alert("HAHA LOSER")
    }
},10)

console.log('script running')
const counterVal=document.getElementById('score');
const increment= document.getElementById('btn');
let counter =0;
increment.addEventListener('click',()=>{
    counter++;
    counterVal.innerHTML=counter;
    console.log('button clicked')
})