// Utilizando o fetch con then.

// fetch("http://localhost:3000/products").then((resposta)=> resposta.json()
// ).then((data)=>console.log(data)).catch((erro)=>{
//         console.log(Error,"Deu erro aqui o")
// })

//

// Utilizando o fetch com async/await.

async function fetchProduct() {
    const resposta=await fetch("http://localhost:3000/products")
    const data= await resposta.json()
    console.log(data)
}

// Passando Parâmetros na requisição

async function fetchProductById(id) {
    const response=await fetch(`http://localhost:3000/products/${id}`)
    const datas=await response.json()
    console.log(datas)
}
// fetchProduct()
// fetchProductById(2)
const productsName=document.querySelector('#name')
const productsPrice=document.querySelector('#price')
const form=document.getElementsByTagName('form')

addEventListener('submit',async (e)=>{
e.preventDefault()
fetch('http://localhost:3000/products',{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        id:new Date().getTime().toString(),
        name:productsName.value,
        price:productsPrice.value,
    })    
})

})
// await fetchProduct()
