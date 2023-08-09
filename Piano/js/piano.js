let keyCheck=document.querySelector('.keys-checkbox input');
let pianoKeys=document.querySelectorAll('.piano-keys .key');

let allKeys = [];
let audio = new Audio('tunes/a.wav');

// to hide and display the key characters

keyCheck.addEventListener('click',function(e){
    e.preventDefault();
    pianoKeys.forEach(key =>{
        key.classList.toggle('hide');
});
});



// handler to identify the key event
pianoKeys.forEach(item => {
    // console .log (iteam.dataset.key);
    allKeys.push(item.dataset.key);
    // console.log('allkey =' , allkeys);
    item.addEventListener('click', () => {
        console.log('clicked key =' ,item.dataset.key);
        playTune(item.dataset.key);
    });
});

function playTune(key) {
    // console.log 
    audio.src = `tunes/${key}.wav`;
    audio.play();

    const clickedkey = document.querySelector(`[data-key="${key}"]`);

    setTimeout(() => {
        clickedkey.classList.remove("active");
    },150);
}

// keyboard keys 
document.addEventListener('keydown' , function(e) {
    if(allKeys.includes(e.key)) {
        playTune(e.key);
    }
})
