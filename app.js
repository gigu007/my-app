

let i=0;
const time=3000;
const images=['./img/car.jpg','./img/school-bus.jpg','./img/taxi.jpg','./img/21bus.gif'];
const changeImage=function(){
    document.changer.src=images[i];
    if(i<images.length-1){
        i++;
    }
    else{
        i=0;
    }
    setTimeout("changeImage()",time);
}
window.onload=changeImage;
