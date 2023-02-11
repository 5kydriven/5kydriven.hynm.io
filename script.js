//images
const img1 = document.getElementById('crying');
const img2 = document.getElementById('hands');
const img3 = document.getElementById('cgeNa');
const img4 = document.getElementById('please');
const img5 = document.getElementById('aydol');
const img6 = document.getElementById('suicide');
const img7 = document.getElementById('payagKana');
const img8 = document.getElementById('noChoice');

var n = document.getElementById("no");
let click = 0;
        
//random position for no button
function change() {
    var i = Math.floor(Math.random()*400)+1;
    var j = Math.floor(Math.random()*400)+1;
        n.style.right = i + "px";
        n.style.top = j + "px";
    }
        
//in order appearing pictures
n.addEventListener("click", function(){
    if(click === 0){
        img1.style.visibility = "visible";
        click++;
    } else if (click === 1){
        img2.style.visibility = "visible";
        click++;
    } else if (click === 2){
        img3.style.visibility = "visible";
        click++;
    } else if (click === 3){
        img4.style.visibility = "visible";
        click++;
    } else if (click === 4){
        img5.style.visibility = "visible";
        click++;
    } else if (click === 5){
        img6.style.visibility = "visible";
        click++;
    } else if (click === 6){
        img7.style.visibility = "visible";
        click++;
    } else {
        n.style.visibility = "hidden";
        img1.style.visibility = "hidden";
        img2.style.visibility = "hidden";
        img3.style.visibility = "hidden";
        img4.style.visibility = "hidden";
        img5.style.visibility = "hidden";
        img6.style.visibility = "hidden";
        img7.style.visibility = "hidden";
        img8.style.visibility = "visible";
        document.getElementById('p').innerHTML = "Be my VALENTINE!"
    }
});
