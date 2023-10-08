const cep = document.querySelector("#cep");
const lograd = document.querySelector("#lograd");
const compl = document.querySelector("#compl");
const bai = document.querySelector("#bai");
const cidade = document.querySelector("#cidade");

cep.addEventListener("blur" , (event) =>{
    fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
        .then((Response) =>{
            return Response.json()
        })
        .then((Response) =>{
            console.log(Response)
            const {logradouro, complemento,bairro,localidade} = Response;
            lograd.value = logradouro;
            compl.value = complemento
            bai.value = bairro
            cidade.value = localidade;
        })
})