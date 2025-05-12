fetch("http://localhost:3000/products").then((resposta)=> resposta.json()
).then((data)=>console.log(data)).catch((erro)=>{
        console.log(Error,"Deu erro aqui o")
})
