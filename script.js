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
fetchProduct()
