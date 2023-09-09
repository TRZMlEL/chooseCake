let pie = document.querySelector('#pie');
let left = document.querySelector('#left');
let right = document.querySelector('#right');
let body = document.querySelector('body');
let rotatePie = 0;
let slaid = 2

pie.style.transition = 'transform 0.3s ease-in-out';

left.addEventListener('click', () => {
    rotatePie = rotatePie - 90;
    pie.style.transform = `translateY(50%) rotate(${rotatePie}deg)`;
    ClickStyle();
});

right.addEventListener('click', () => {
    rotatePie = rotatePie + 90;
    pie.style.transform = `translateY(50%) rotate(${rotatePie}deg)`;
    ClickStyle();
});

let ClickStyle = () => {
    setTimeout(() => {
        if(slaid === 1){
            slaid = 2;
            pie.style.backgroundImage = 'url("https://iambaker.net/wp-content/uploads/2021/10/pumpkin-pie-2.jpg")';
            body.style.background = 'orange'
            pie.style.backgroundSize = '130%'
        } else if(slaid === 2){
            slaid = 3;
            pie.style.backgroundImage = 'url("https://www.aheadofthyme.com/wp-content/uploads/2021/06/fresh-strawberry-pie-9.jpg")';
            body.style.background = 'red'
            pie.style.backgroundSize = '105%'
        } else if(slaid === 3){
            slaid = 4;
            pie.style.backgroundImage = 'url("https://img.buzzfeed.com/thumbnailer-prod-us-east-1/f3619b48325949e7b359669af3865ee2/applepie_FB_Cut4.jpg?resize=1200:*")';
            body.style.background = '#ef923b'
            pie.style.backgroundSize = '125%'
        } else if(slaid === 4){
            slaid = 5;
            pie.style.backgroundImage = 'url("https://www.sunglowkitchen.com/wp-content/uploads/2021/03/vegan-lemon-pie-12.jpg")';
            body.style.background = 'yellow'
            pie.style.backgroundSize = '110%'
        } else if(slaid === 5){
            slaid = 6;
            pie.style.backgroundImage = 'url("https://mydinner.co.uk/wp-content/uploads/2021/07/Red-Current-Cake-1.jpg")';
            body.style.background = 'red'
            pie.style.backgroundSize = '120%'
        } else if(slaid === 6){
            slaid = 7;
            pie.style.backgroundImage = 'url("https://www.oregonfruit.com/wp-content/uploads/2020/08/Blackberry-Pie_AdobeStock_392862075_Smaller-scaled.jpg")';
            body.style.background = 'darkblue'
            pie.style.backgroundSize = '120%'
        } else if(slaid === 7){
            slaid = 1;
            pie.style.backgroundImage = 'url("https://www.vegrecipesofindia.com/wp-content/uploads/2020/12/apple-pie-2.jpg")';
            body.style.background = 'green'
            pie.style.backgroundSize = '120%'
        }
    }, 150);
}