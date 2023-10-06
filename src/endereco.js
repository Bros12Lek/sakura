const cep = document.querySelector("#cep");

cep.addEventListener("blur" , (event) =>{
    fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
        .then((Response) =>{
            return Response.json()
        })
        .then((Response) =>{
            console.log(Response)
        })
})