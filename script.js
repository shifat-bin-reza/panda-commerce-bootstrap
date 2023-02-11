// // problem 2
// const header2 = document.getElementsByTagName('h2');
// for(const header of header2) {
//     header.style.color = 'lightblue';
// }

// // problem 3
// const backpack = document.getElementById('backpack');
// backpack.style.backgroundColor = 'tomato';

// // problem 4
// const cards = document.getElementsByClassName('card');
// for (const card of cards) {
//     card.style.borderRadius = '30px'
// }

// // problem 5
// document.getElementById('test').addEventListener('click', function() {
//     console.log("Buy now button clicked");
// });


// problem 6
const buyNowButtons = document.getElementsByClassName('panda-btn-buy-now');
for(const buyNowButton of buyNowButtons) {
    buyNowButton.addEventListener('click', function() {
        buyNowButton.parentNode.parentNode.parentNode.remove();

        const shoes = document.getElementById('container-id');
        const childrenLength = shoes.children.length;
        console.log(childrenLength);
        if(childrenLength === 0) {
            shoes.parentNode.remove();
        }
    })
}

document.getElementById('exampleInputEmail1').addEventListener('keyup', function() {
    const exampleInputEmail1 = document.getElementById('exampleInputEmail1');
    const btnSubmit = document.getElementById('btn-submit');
    if(exampleInputEmail1.value === 'email') {
        btnSubmit.removeAttribute('disabled');
    } else {
        btnSubmit.setAttribute('disabled', true);
    }
})  


const images = document.getElementsByClassName('card-img-top');
for (const image of images) {
    const img = image.src;
    image.addEventListener('mouseenter', function() {
        image.src = './images/banner-images/tv.png';
    })
    image.addEventListener('mouseout', function(){
        image.src = img;
    })
}


document.getElementById('subscribe').addEventListener('dblclick', function() {
     
    const bgColor =  document.getElementById('subscribe');
    const defaultColor = bgColor.style.backgroundColor;
    bgColor.style.backgroundColor = 'lightblue';

    bgColor.addEventListener('mouseout', function() {
        bgColor.style.backgroundColor = defaultColor;
    })
})

