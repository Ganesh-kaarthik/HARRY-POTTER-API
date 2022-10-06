let maindiv = document.getElementById("main-container");

//using function to fetch data from api
let HarryPotterData=async ()=>{
    try{
        const data = await fetch("https://hp-api.herokuapp.com/api/characters");
        //convert the data into json format
        const persons = await data.json();
        persons.forEach((person) => {
            DisplayCharacters(person);
        });
    } catch(error){
        console.log(`error`)
    }
}

HarryPotterData();

const DisplayCharacters=(person) =>{
    maindiv.innerHTML +=`
    <div class="card " style="width: 18rem; id="cardx">
  <img src=${person.image} class="card-img-top" alt="image">
  <div class="card-body">
    <h5 class="}">Name: ${person.name}</h5>
    <p class="card-text">Species: ${person.species}</p>
    <p class="card-text">Date Of Birth: ${person.dateOfBirth}</p>
  </div>
</div>    
    `
}
