let cards=[
    {
        title:"kutta lelo",
        discription:"random discription",
        price:"$300",
        image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9G7s1_JyxPaWCVFXa0hngn_t9x8ApWKZP5g&s"
    },
    {
        title:"kutta lelo",
        discription:"random discription",
        price:"$300",
        image:
        "https://images.aeonmedia.co/images/acd6897d-9849-4188-92c6-79dabcbcd518/essay-final-gettyimages-685469924.jpg?width=3840&quality=75&format=auto"
    },
    {
        title:"kutta lelo",
        discription:"random discription",
        price:"$300",
        image:
        "https://www.thesprucepets.com/thmb/B8A1ji4QjXo6dVxy1hbhR9pYhZA=/4000x0/filters:no_upscale():strip_icc()/spruce-pets-white-dog-breeds-2025-header-9fe5f4f0cbe241b6b28caa23ca44db90.jpg"
    },
    {
        title:"kutta lelo",
        discription:"random discription",
        price:"$300",
        image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR5pGWq6Lxj1xdc5TEHiquZWqPHKpjaTxt8g&s"
    },
]


let container=document.querySelector(".container")
cards.forEach((item) =>{
    let card=`<div class="card">
    <img src="${item.image}" alt="">
    <h2>${item.title}</h2>
        <p>${item.discription}</p>
        <span>${item.price}</span><br>
        <button>Buy Now</button>`

        container.innerHTML +=card;
})