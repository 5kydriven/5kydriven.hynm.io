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
    btn.innerHTML = 'I hope your motivated ;)';
    btn.style.pointerEvents = 'none';
    btn.style.padding = "20px 30px";
    btn.style.borderRadius = "5px";
    btn.style.fontSize = "20px";
})
