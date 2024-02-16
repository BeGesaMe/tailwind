// API ni chaqirib oldim
let API_URL = 'https://fakestoreapi.com/products';


// HTMLdan elementlarni chaqirib oldim 
let closer = document.querySelector('.closer');
let korzinka = document.querySelector('.korzinka');
let korzinkaBox = document.querySelector('.korzinka-box');
let body = document.querySelector('body');
let rek = document.querySelector('.rek');


// Modalni ishga tushirdik start
korzinka.addEventListener('click', ()=>{
    korzinkaBox.style = "display:block"
})
closer.addEventListener('click',()=>{
    korzinkaBox.style = "display: none"
})
// Modalni end



// TEMPLATEni ichidagi elementlarni chaqirib oldik
let templateCard = document.querySelector('.template-card').content;
let cardsBox = document.querySelector('.cards-box');
let newFragment = new DocumentFragment()


let cardShop = document.querySelectorAll('.');


function setProduct(){
    localStorage.setItem('product', JSON.stringify(basketProduct))
}

let basketProduct = JSON.parse(localStorage.getItem('product'))
? JSON.parse(localStorage.getItem('product')) : [];


fetch(API_URL).then(res => res.json()).then(data =>{
 

    data.slice(0,3).forEach((el) =>{
        console.log(el);
        let nodeCloneTemplate1 = templateCard.cloneNode(true);

        let cardImage = nodeCloneTemplate1.querySelector('.-img')
        let cardTitle = nodeCloneTemplate1.querySelector('.card-title')
        let cardCategory = nodeCloneTemplate1.querySelector('.category')
        let cardRating = nodeCloneTemplate1.querySelector('.rating')
        let description = nodeCloneTemplate1.querySelector('.description')
        let cardShopMoney = nodeCloneTemplate1.querySelector('.shop-money')


        cardImage.src = el.image
        cardTitle.innerHTML = el.title
        cardCategory.innerHTML = el.category
        cardRating.innerHTML = `${el.rating.rate} Reviews`
        description.innerHTML = el.description
        cardShopMoney.innerHTML = `${el.price}$`

        let addBtn = nodeCloneTemplate1.querySelector('.addButtun')

        
        addBtn.addEventListener('click', ()=>{
            rek.style = 'display: none'
            basketProduct.push(data)
            setProduct()
        })

        cardsBox.appendChild(nodeCloneTemplate1)
    })

    





})

