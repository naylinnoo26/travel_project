
const searchBtn = document.getElementById('search-btn');
console.log(searchBtn);

searchBtn.addEventListener('click', () => {
    const userSearch = document.getElementById("userSearch").value.toLowerCase();
    fetch('travel_recommendation_api.json')
        .then(response => {
            if(!response.ok){
                throw new Error("Network response was not ok " + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            let cards = ``;
            if(userSearch == "beach"){
                for(let i = 0; i < data.beaches.length; i++){
                    cards += `
                        <div class="image-card" id="location-card">
                            <div class="location-img">
                                <img src="${data.beaches[i].imageUrl}" alt="${data.beaches[i].id}">
                            </div>
                            <div class="location-info">
                                <p>${data.beaches[i].name}</p>
                                <p>${data.beaches[i].description}</p>
                                <button class="vist-btn">Vist</button>
                            </div>
                        </div>
                        `;
                }
            } else if(userSearch == "countries"){
                for(let i = 0; i < data.countries.length; i++){
                    for(let j = 0; j < data.countries[i].cities.length; j++){
                        cards += `
                        <div class="image-card" id="location-card">
                            <div class="location-img">
                                <img src="${data.countries[i].cities[j].imageUrl}" alt="${data.countries[i].cities[j].name}">
                            </div>
                            <div class="location-info">
                                <p>${data.countries[i].cities[j].name}</p>
                                <p>${data.countries[i].cities[j].description}</p>
                                <button class="vist-btn">Vist</button>
                            </div>
                        </div>
                        `;
                    }
                }
            } else if(userSearch == "temples"){
                for(let i = 0; i < data.temples.length; i++){
                    cards += `
                        <div class="image-card" id="location-card">
                            <div class="location-img">
                                <img src="${data.temples[i].imageUrl}" alt="${data.temples[i].id}">
                            </div>
                            <div class="location-info">
                                <p>${data.temples[i].name}</p>
                                <p>${data.temples[i].description}</p>
                                <button class="vist-btn">Vist</button>
                            </div>
                        </div>
                        `;
                }
            }
            document.getElementById("search-display").innerHTML = cards;
        })
        .catch(error => {
            console.error("There was a problem with the fetch operation:", error);
        })
})

/* 

*/