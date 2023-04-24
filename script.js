async function datas(){
    try {
        const response = await fetch("https://bobsburgers-api.herokuapp.com/characters/?limit=9&skip=249")
        const data = await response.json()
        data.forEach(ele =>{
            const createCountryObject = {
                ...ele,
                name : ele.name,
                brewery_type : ele.brewery_type,
                address_1 : ele.address_1,
                phone : ele.phone,
                website_url : ele.website_url
            }
             createCountry(createCountryObject)
        });
    } catch (error) {
        document.body.innerHTML += `<h1>Error occured</h1>` 
          
    }
}

function createCountry(ele){
    //image of the character with icons
    // url of the Character with icons
    // gender of the Character with icons
    // occupation the character with icons
    //
    document.body.innerHTML += `
        <div class="content">
        <div class="card">
        <div class="pos1">
        <img class="png" src="${ele.image}"></img>     
        </div>
        <div class="pos2">
            <div class="companyName"><h2 class="name">${ele.name}</h2></div> 
            <div class="details">
    <div class="icon"><span class="material-symbols-outlined">
    boy
    </span>
    </div>
    <div class="values"><div class="address">${ele.gender}</div></div>
</div>
            <div class="details">
            <div class="icon"><span class="material-symbols-outlined">
palette
</span>
            </div>
            <div class="values"><div class="address">${ele.hairColor}</div></div>
        </div>
        <div class="details">
            <div class="icon"><span class="material-symbols-outlined">
                globe_asia
                </span>
            </div>
            <div class="values"><div class="website">${ele.url}</div></div>
        </div>
        <div class="details">
            <div class="icon"><span class="material-symbols-outlined">
            work
            </span>
            </div>
            <div class="values"><div class="phone">${ele.occupation}</div></div>
        </div>
    
        </div>
    </div>
    </div>
    `
}
datas()