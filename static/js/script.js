async function fetchData(number){
    try{
        const data = await fetch(`http://numbersapi.com/${number}`)
        return await data.text();
    } catch(e){
        console.log(e)
    }
}

$( document ).ready(async function() {
    let name_client = $("#name_client");
    let surname_client = $("#surname_client");
    let patronymic_client = $("#patronymic_client");
    let birthday_client = $("birthday_client");
    let button = $("#43");
    button.click(async function(){
        const response = await fetchData(input.val());
        console.log(response)
        h1.text(response)
    })
});