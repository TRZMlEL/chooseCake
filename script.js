let pie = document.querySelector('#pie');
let left = document.querySelector('#left');
let right = document.querySelector('#right');
let selectRing = document.querySelector('#selectRing');
let body = document.querySelector('body');
let rotatePie = 0;
let list = [1, 2, 3, 4 ,5 ,6 , 7];
let slaid = 1;
let p1 = document.querySelector('#p1');
let p2 = document.querySelector('#p2');

let pumpkin = document.querySelector('#pumpkin');
let strawberry = document.querySelector('#strawberry');
let carmel = document.querySelector('#carmel');
let lemon = document.querySelector('#lemon');
let currant = document.querySelector('#currant');
let blackberry = document.querySelector('#blackberry');
let apple = document.querySelector('#apple');

let cakeName = document.getElementById("cakeName");
let cakeDescription = document.getElementById("cakeDescription");

pie.style.transition = 'transform 0.3s ease-in-out';
selectRing.style.transition = 'transform 0.15s linear';

let ClickStyle = () => {
    setTimeout(() => {
        if(slaid === 1){
            pie.style.backgroundImage = 'url("https://iambaker.net/wp-content/uploads/2021/10/pumpkin-pie-2.jpg")';
            body.style.background = 'radial-gradient(105.46% 105.46% at 51.13% 0%, #FFB66D 0%, #F5AF68 0.01%, #EA7F10 51.31%, #C86605 100%)';
            pie.style.backgroundSize = '130%'
            pumpkin.style.fontWeight = '900'
            strawberry.style.fontWeight = 'unset'
            carmel.style.fontWeight = 'unset'
            lemon.style.fontWeight = 'unset'
            currant.style.fontWeight = 'unset'
            blackberry.style.fontWeight = 'unset'
            apple.style.fontWeight = 'unset'
            selectRing.style.transform = 'rotate(-85deg)'
            cakeName.textContent = 'Pumpkin Pie';
            cakeDescription.textContent = 'Pumpkin pie is a classic Thanksgiving dessert that features a rich, spiced filling made from roasted pumpkin and is often topped with a dollop of whipped cream.';
            p1.src = 'https://pngimg.com/d/pumpkin_PNG9343.png';
            p2.src = 'https://static.vecteezy.com/system/resources/previews/011/704/505/original/isolated-pumpkin-fruit-on-transparent-background-free-png.png';
        } else if(slaid === 2){
            pie.style.backgroundImage = 'url("https://www.aheadofthyme.com/wp-content/uploads/2021/06/fresh-strawberry-pie-9.jpg")';
            body.style.background = 'radial-gradient(105.46% 105.46% at 51.13% 0%, #F77683 0%, #D12032 51.31%, #870915 100%)'
            pie.style.backgroundSize = '105%'
            pumpkin.style.fontWeight = 'unset'
            strawberry.style.fontWeight = '900'
            carmel.style.fontWeight = 'unset'
            lemon.style.fontWeight = 'unset'
            currant.style.fontWeight = 'unset'
            blackberry.style.fontWeight = 'unset'
            apple.style.fontWeight = 'unset'
            selectRing.style.transform = 'rotate(-60deg)'
            cakeName.textContent = 'Strawberry Pie';
            cakeDescription.textContent = 'Strawberry pie bursts with the sweet and tangy flavors of fresh strawberries nestled in a flaky pie crust, making it a delightful summer treat.';
            p1.src = 'https://purepng.com/public/uploads/large/purepng.com-strawberrystrawberrygenus-fragariastrawberriesfruitbotanical-berrybright-red-colorjuicy-texture-1701527398723gwfwn.png';
            p2.src = 'https://pngfre.com/wp-content/uploads/strawberry-13.png';
        } else if(slaid === 3){
            pie.style.backgroundImage = 'url("https://img.buzzfeed.com/thumbnailer-prod-us-east-1/f3619b48325949e7b359669af3865ee2/applepie_FB_Cut4.jpg?resize=1200:*")';
            body.style.background = 'radial-gradient(105.46% 105.46% at 51.13% 0%, #EA9050 0%, #BA5D1A 51.31%, #692E03 100%)'
            pie.style.backgroundSize = '125%'
            pumpkin.style.fontWeight = 'unset'
            strawberry.style.fontWeight = 'unset'
            carmel.style.fontWeight = '900'
            lemon.style.fontWeight = 'unset'
            currant.style.fontWeight = 'unset'
            blackberry.style.fontWeight = 'unset'
            apple.style.fontWeight = 'unset'
            selectRing.style.transform = 'rotate(-33deg)'
            cakeName.innerHTML = 'Carmel Pie';
            cakeDescription.innerHTML = 'Caramel pie is a decadent indulgence, with its velvety caramel filling and a buttery crust that combine to create a sweet and creamy dessert.';
            p1.src = 'https://www.pngkit.com/png/full/95-951362_post-navigation-salted-caramel-png.png';
            p2.src = 'https://static.vecteezy.com/system/resources/thumbnails/013/079/272/small/chocolate-splash-with-droplets-3d-rendering-alpha-3d-illustration-free-png.png';
        } else if(slaid === 4){
            pie.style.backgroundImage = 'url("https://www.sunglowkitchen.com/wp-content/uploads/2021/03/vegan-lemon-pie-12.jpg")';
            body.style.background = 'radial-gradient(105.46% 105.46% at 51.13% 0%, #FFF47E 0%, #FFEF43 51.31%, #AC9F0E 100%)'
            pie.style.backgroundSize = '110%'
            pumpkin.style.fontWeight = 'unset'
            strawberry.style.fontWeight = 'unset'
            carmel.style.fontWeight = 'unset'
            lemon.style.fontWeight = '900'
            currant.style.fontWeight = 'unset'
            blackberry.style.fontWeight = 'unset'
            apple.style.fontWeight = 'unset'
            selectRing.style.transform = 'rotate(0deg)'
            cakeName.innerHTML = 'Lemon Pie';
            cakeDescription.innerHTML = 'Lemon pie offers a refreshing contrast with its zesty lemon filling, providing a perfect balance of tartness and sweetness in each bite.';
            p1.src = 'https://static.vecteezy.com/system/resources/previews/008/508/374/original/lemon-on-isolated-background-png.png';
            p2.src = 'https://static.vecteezy.com/system/resources/previews/009/660/047/original/watercolor-lemon-fruit-slice-png.png';
        } else if(slaid === 5){
            pie.style.backgroundImage = 'url("https://mydinner.co.uk/wp-content/uploads/2021/07/Red-Current-Cake-1.jpg")';
            body.style.background = 'radial-gradient(105.46% 105.46% at 51.13% 0%, #EF8F8D 0%, #BB3A37 51.31%, #731210 100%)'
            pie.style.backgroundSize = '120%'
            pumpkin.style.fontWeight = 'unset'
            strawberry.style.fontWeight = 'unset'
            carmel.style.fontWeight = 'unset'
            lemon.style.fontWeight = 'unset'
            currant.style.fontWeight = '900'
            blackberry.style.fontWeight = 'unset'
            apple.style.fontWeight = 'unset'
            selectRing.style.transform = 'rotate(33deg)'
            cakeName.innerHTML = 'Currant Pie';
            cakeDescription.innerHTML = `Currant pie showcases the unique flavor of currants, often combined with other berries, in a delightful pie filling that's both sweet and slightly tart, creating a delicious dessert option.`;
            p1.src = 'https://purepng.com/public/uploads/large/purepng.com-redcurrantfruitsberryberriesredcurrantred-currant-981525181924whlyx.png';
            p2.src = 'https://purepng.com/public/uploads/large/purepng.com-redcurrantfruitsberryberriesredcurrantred-currant-981525181938fkcq1.png';
        } else if(slaid === 6){
            pie.style.backgroundImage = 'url("https://www.oregonfruit.com/wp-content/uploads/2020/08/Blackberry-Pie_AdobeStock_392862075_Smaller-scaled.jpg")';
            body.style.background = 'radial-gradient(105.46% 105.46% at 51.13% 0%, #725F86 0%, #3C2851 51.31%, #170826 100%)'
            pie.style.backgroundSize = '120%'
            pumpkin.style.fontWeight = 'unset'
            strawberry.style.fontWeight = 'unset'
            carmel.style.fontWeight = 'unset'
            lemon.style.fontWeight = 'unset'
            currant.style.fontWeight = 'unset'
            blackberry.style.fontWeight = '900'
            apple.style.fontWeight = 'unset'
            selectRing.style.transform = 'rotate(60deg)'
            cakeName.innerHTML = 'Blackberry Pie';
            cakeDescription.innerHTML = 'Blackberry pie is a summer delight, filled with plump, juicy blackberries that burst with sweetness when baked into a golden, flaky crust, creating a mouthwatering dessert.';
            p1.src = 'https://static.vecteezy.com/system/resources/previews/012/486/118/original/cut-out-of-blackberry-fruit-free-png.png';
            p2.src = 'https://www.transparentpng.com/thumb/blackberry-fruit/simple-blackberry-fruit-transparent-picture-free-download-EqtMfa.png';
        } else if(slaid === 7){
            pie.style.backgroundImage = 'url("https://www.vegrecipesofindia.com/wp-content/uploads/2020/12/apple-pie-2.jpg")';
            body.style.background = 'radial-gradient(105.46% 105.46% at 51.13% 0%, #E1E191 0%, #B6B644 51.31%, #6E6E14 100%)'
            pie.style.backgroundSize = '120%'
            pumpkin.style.fontWeight = 'unset'
            strawberry.style.fontWeight = 'unset'
            carmel.style.fontWeight = 'unset'
            lemon.style.fontWeight = 'unset'
            currant.style.fontWeight = 'unset'
            blackberry.style.fontWeight = 'unset'
            apple.style.fontWeight = '900'
            selectRing.style.transform = 'rotate(85deg)'
            cakeName.innerHTML = 'Apple Pie';
            cakeDescription.innerHTML = 'Apple pie is a beloved classic, featuring thinly sliced apples seasoned with cinnamon and sugar, all nestled within a tender pie crust, making it a comforting and timeless treat.';
            p1.src = 'https://pngfre.com/wp-content/uploads/apple-43-1024x1015.png';
            p2.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/25d45014-8cc3-4c98-b02c-5a0cf3a55ddd/dcrjbvx-b5078bbf-03ff-4625-b214-35c3f9fefc4c.png/v1/fill/w_900,h_900/red_apple_on_a_transparent_background__by_prussiaart_dcrjbvx-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvMjVkNDUwMTQtOGNjMy00Yzk4LWIwMmMtNWEwY2YzYTU1ZGRkXC9kY3JqYnZ4LWI1MDc4YmJmLTAzZmYtNDYyNS1iMjE0LTM1YzNmOWZlZmM0Yy5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Y0-7z3OBNt3CbKeZrPiWJFD-4LhVF7I9iC2wADeZEAU';
        }
    }, 150);
}

function initialize() {
    ClickStyle();
}

pumpkin.addEventListener('click', () => {
    slaid = 1
    if(slaid >= 4){
        rotatePie = rotatePie + 90;
    }else{
        rotatePie = rotatePie - 90;
    }
    pie.style.transform = `translateY(50%) rotate(${rotatePie}deg)`;
    ClickStyle();
});

strawberry.addEventListener('click', () => {
    slaid = 2
    if(slaid >= 4){
        rotatePie = rotatePie + 90;
    }else{
        rotatePie = rotatePie - 90;
    }
    pie.style.transform = `translateY(50%) rotate(${rotatePie}deg)`;
    ClickStyle();
});

strawberry.addEventListener('click', () => {
    slaid = 2
    if(slaid >= 4){
        rotatePie = rotatePie + 90;
    }else{
        rotatePie = rotatePie - 90;
    }
    pie.style.transform = `translateY(50%) rotate(${rotatePie}deg)`;
    ClickStyle();
});

carmel.addEventListener('click', () => {
    slaid = 3
    if(slaid >= 4){
        rotatePie = rotatePie + 90;
    }else{
        rotatePie = rotatePie - 90;
    }
    pie.style.transform = `translateY(50%) rotate(${rotatePie}deg)`;
    ClickStyle();
});

lemon.addEventListener('click', () => {
    slaid = 4
    if(slaid >= 4){
        rotatePie = rotatePie + 90;
    }else{
        rotatePie = rotatePie - 90;
    }
    pie.style.transform = `translateY(50%) rotate(${rotatePie}deg)`;
    ClickStyle();
});

currant.addEventListener('click', () => {
    slaid = 5
    if(slaid >= 4){
        rotatePie = rotatePie + 90;
    }else{
        rotatePie = rotatePie - 90;
    }
    pie.style.transform = `translateY(50%) rotate(${rotatePie}deg)`;
    ClickStyle();
});

blackberry.addEventListener('click', () => {
    slaid = 6
    if(slaid >= 4){
        rotatePie = rotatePie + 90;
    }else{
        rotatePie = rotatePie - 90;
    }
    pie.style.transform = `translateY(50%) rotate(${rotatePie}deg)`;
    ClickStyle();
});

apple.addEventListener('click', () => {
    slaid = 7
    if(slaid >= 4){
        rotatePie = rotatePie + 90;
    }else{
        rotatePie = rotatePie - 90;
    }
    pie.style.transform = `translateY(50%) rotate(${rotatePie}deg)`;
    ClickStyle();
});

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

