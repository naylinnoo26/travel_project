
let searchBtn = document.getElementById('search-btn');
let clearBtn = document.getElementById('clear-btn').value;

searchBtn.addEventListener('click', () => {
    let userSearch = document.getElementById('userSearch').value;
    if(userSearch != ""){
        userSearch = userSearch.toLowerCase();
        
    }
})

/* 
fetch('travel_recommendation_api.json')
    .then(response => {
        if(!response.ok){
            throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("There was a problem with the fetch operation:", error);
    })
*/