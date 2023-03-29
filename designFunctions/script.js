var x = document.getElementById("myAudio");
var modal = document.getElementById('container');
var btn = document.getElementById('btn');
var xbtn = document.getElementById('xbtn');

alert('Warning! Audio Highly Addicted');

btn.addEventListener('click', () =>{
    x.play();
    btn.classList.add('show');
    modal.classList.add('show');
})

xbtn.addEventListener('click', () => {
    modal.classList.remove('show');
    btn.classList.remove('show');
    btn.innerHTML = 'April Fools';
    btn.style.pointerEvents = 'none';
})
