let img1 = document.querySelector('.img-1');
let img2 = document.querySelector('.img-2');
let img3 = document.querySelector('.img-3');
let img4 = document.querySelector('.img-4');
let cardsImg1 = document.querySelector('.cards-img-1');
let cardsImg2 = document.querySelector('.cards-img-2');
let cardsImg3 = document.querySelector('.cards-img-3');
let cardImgTitle = document.querySelector('.card-img-title');
let cardImgP = document.querySelector('.card-img-p');
let reklamaImg = document.querySelector('.reklama-img');
let reklamaCategory = document.querySelector('.reklama-category');
let reklamaTitle = document.querySelector('.reklama-title');
let reklamaDescription = document.querySelector('.reklama-description');

let API_URL = 'https://fakestoreapi.com/products'

fetch(API_URL)
    .then(res => res.json())
    .then(natija => {
            console.log(natija);
        natija.forEach((el, i, arr)=>{
            img1.src = el.image
        })

        natija.slice(1,2).forEach((el, i, arr)=>{
            img2.src = el.image
        })

        natija.slice(2,3).forEach((el, i, arr)=>{
            img3.src = el.image
        })

        natija.slice(3,4).forEach((el, i, arr)=>{
            img4.src = el.image
        })

        // for reklama 
        natija.slice(3,4).forEach((el)=>{
            reklamaImg.src = el.image;
            reklamaCategory.innerHTML = el.category
            reklamaTitle.innerHTML = el.title
            reklamaDescription.innerHTML = el.description

            

        })

        natija.slice(4,5).forEach((el)=>{
            cardsImg1.src = el.image
            cardImgTitle.innerHTML = el.title
            cardImgP.innerHTML =  el.description

            cardsImg2.addEventListener('click', ()=>{
                cardImgTitle.innerHTML = el.title
                cardImgP.innerHTML =  el.description
            })
        })

        natija.slice(5,6).forEach((el)=>{
            cardsImg2.src = el.image

            cardsImg2.addEventListener('click', ()=>{
                cardImgTitle.innerHTML = el.title
                cardImgP.innerHTML =  el.description
            })

        })

        natija.slice(6,7).forEach((el)=>{
            cardsImg3.src = el.image

            cardsImg3.addEventListener('click', ()=>{
                cardImgTitle.innerHTML = el.title
                cardImgP.innerHTML =  el.description
            })
        })
    })  


    
let shopPartCards = document.querySelector('.shop-part-cards');
let templateImageCard = document.querySelector('.template-card').content
let newFragment = new DocumentFragment()

fetch(API_URL).then(r => r.json()).then(data =>{
    // console.log(data);

   data.forEach((el)=>{
    // console.log(el);

    let nodeCloneTemplate = templateImageCard.cloneNode(true);

    nodeCloneTemplate.querySelector('img').src = el.image
    nodeCloneTemplate.querySelector('h6').innerHTML = el.title
    // description
    nodeCloneTemplate.querySelector('p').innerHTML = el.category
    nodeCloneTemplate.querySelector('.rating').innerHTML = el.rating.rate
    nodeCloneTemplate.querySelector('.shop-money').innerHTML = `${el.price}$`


    shopPartCards.appendChild(nodeCloneTemplate)
   })


})