window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const functionApiUrl = 'https://getresume-counter.azurewebsites.net/api/GetResumeCounter?code=_1NtrXaLF3OyMKjIOV0vq3mbd6H5qXlP_Xp63MkkSOSmAzFuuMSpZg=='
const localFunctionApiUrl = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.")
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}