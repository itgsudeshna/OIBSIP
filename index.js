let slides=document.querySelectorAll(".slide");
let baricon=document.getElementById("bar");
let ul=document.querySelector("ul");
console.log(slides);
let count=0;
slides.forEach(function(slide, index){
    slide.style.left=`${index * 100}%`;
})

function slider(){
    slides.forEach(function(curvel){
        curvel.style.transform=`translateX(-${count * 100}%)`;
    })
}

setInterval(function(){
    count++;
    if(count==slides.length){
        count=0;
    }
    slider();
}, 2000)


//navbar
baricon.addEventListener("click",function(){
    ul.classList.toggle("showitem");
    if(ul.className=="showitem"){
        baricon.className="fa-solid fa-xmark";
    }
    else{
        baricon.className="fa-solid fa-bars";
    }

})

let savetheme= localStorage.getItem('theme') || 'light';
document.body.className= savetheme;

const togglelight= document.getElementById('toggleLight');
const toggleDark= document.getElementById('toggleDark');

togglelight.addEventListener('click',function(){
    document.body.className='light';
    localStorage.setItem('theme','light');
    togglelight.classList.add('active');
    toggleDark.classList.remove('active');

});
toggleDark.addEventListener('click',function(){
    document.body.className='dark';
    localStorage.setItem('theme','dark');
    toggleDark.classList.add('active');
    togglelight.classList.remove('active');


});

if(savetheme=='light'){
    togglelight.classList.add('active');
}
else{
    toggleDark.classList.add('active');
}

