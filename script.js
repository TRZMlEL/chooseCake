let pie = document.querySelector('#pie');
let left = document.querySelector('#left');
let right = document.querySelector('#right');
let body = document.querySelector('body');
let rotatePie = 0;
let list = [1, 2, 3, 4 ,5 ,6 , 7]
let slaid = 1

pie.style.transition = 'transform 0.3s ease-in-out';

let ClickStyle = () => {
    setTimeout(() => {
        if(slaid === 1){
            pie.style.backgroundImage = 'url("https://iambaker.net/wp-content/uploads/2021/10/pumpkin-pie-2.jpg")';
            body.style.background = 'radial-gradient( 50% 50% at 50% 50%, rgb(227.26, 181.64, 19.88) 0%, rgb(229.5, 124.79, 20.08) 70.43%, rgb(233.63, 121.76, 18.5) 100%)';
            pie.style.backgroundSize = '130%'
        } else if(slaid === 2){
            pie.style.backgroundImage = 'url("https://www.aheadofthyme.com/wp-content/uploads/2021/06/fresh-strawberry-pie-9.jpg")';
            body.style.background = 'radial-gradient(105.46% 105.46% at 51.13% 0%, #E32D64 0%, #E52222 51.31%, #EA3D17 100%'
            pie.style.backgroundSize = '105%'
        } else if(slaid === 3){
            pie.style.backgroundImage = 'url("https://img.buzzfeed.com/thumbnailer-prod-us-east-1/f3619b48325949e7b359669af3865ee2/applepie_FB_Cut4.jpg?resize=1200:*")';
            body.style.background = '#ef923b'
            pie.style.backgroundSize = '125%'
        } else if(slaid === 4){
            pie.style.backgroundImage = 'url("https://www.sunglowkitchen.com/wp-content/uploads/2021/03/vegan-lemon-pie-12.jpg")';
            body.style.background = 'yellow'
            pie.style.backgroundSize = '110%'
        } else if(slaid === 5){
            pie.style.backgroundImage = 'url("https://mydinner.co.uk/wp-content/uploads/2021/07/Red-Current-Cake-1.jpg")';
            body.style.background = 'red'
            pie.style.backgroundSize = '120%'
        } else if(slaid === 6){
            pie.style.backgroundImage = 'url("https://www.oregonfruit.com/wp-content/uploads/2020/08/Blackberry-Pie_AdobeStock_392862075_Smaller-scaled.jpg")';
            body.style.background = 'darkblue'
            pie.style.backgroundSize = '120%'
        } else if(slaid === 7){
            pie.style.backgroundImage = 'url("https://www.vegrecipesofindia.com/wp-content/uploads/2020/12/apple-pie-2.jpg")';
            body.style.background = 'green'
            pie.style.backgroundSize = '120%'
        }
    }, 150);
}

function initialize() {
    ClickStyle();
}

left.addEventListener('click', () => {
    rotatePie = rotatePie - 90;
    pie.style.transform = `translateY(50%) rotate(${rotatePie}deg)`;
    
    slaid = slaid - 1;
    if (slaid < 1) {
        slaid = list.length;
    }
    ClickStyle();
});

right.addEventListener('click', () => {
    rotatePie = rotatePie + 90;
    pie.style.transform = `translateY(50%) rotate(${rotatePie}deg)`;
    
    slaid = slaid + 1;
    if (slaid > list.length) {
        slaid = 1;
    }
    ClickStyle();
});

