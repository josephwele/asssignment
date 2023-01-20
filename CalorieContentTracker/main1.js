const searchFood = document.getElementById("searchFood")
const displayFoods = document.getElementById("displayFoods")
const displayCalories = document.getElementById("displayCalories")
const foodButton = document.getElementById("btn-foodInputContainer")
const userButton = document.getElementById("btn-userDataContainer")
const age = document.getElementById("age")
const gender = document.getElementById("gender")
const height = document.getElementById("height")
const weight = document.getElementById("weight")
const activityLevel = document.getElementById("activityLevel")
let calorie;

const foodUrl = 'https://edamam-food-and-grocery-database.p.rapidapi.com/parser'
const foodAPI = '7ab34fccb6msh058d959fc9393bap1fe836jsn8b45319eb450'
const foodHost = 'edamam-food-and-grocery-database.p.rapidapi.com'

const calUrl = "https://fitness-calculator.p.rapidapi.com/dailycalorie"
const calAPI = '80fefe0e63msh79190a807afeedfp19ee1djsn154cf08c9a54'
const calHost = "fitness-calculator.p.rapidapi.com"

document.getElementById("calBackground").style.display = "none";

function fetchData(url, headers, params, thenHandler){
    axios.get(url,{
          headers: headers,
          params: params
    })
    .then(response => {
      thenHandler(response)
    })
    .catch(error => {
      console.log(error);
    });
  }


function foodHandler(response){
    for (let i = 0; i < 10; i++){
      renderFood(response.data.hints[i])
    }
    document.getElementById("calBackground").style.display = "block";
    searchFood.value = ""
  
  }
  
  function calHandler(response){
    renderCalorie(response.data.data.goals["maintain weight"])
  }
  



foodButton.addEventListener("click", (e) => {
    e.preventDefault()
    displayFoods.innerHTML = ""

    fetchData(foodUrl, {'X-RapidAPI-Key': foodAPI, 'X-RapidAPI-Host': foodHost}, {ingr: searchFood.value}, foodHandler)
})

userButton.addEventListener("click", (e) => {
  e.preventDefault()

  fetchData(calUrl, {'X-RapidAPI-Key': calAPI, 'X-RapidAPI-Host': calHost}, { age: age.value,gender: gender.value,height: height.value,weight: weight.value,
    activitylevel: activityLevel.value}, calHandler)
})




function renderFood(hint){
  const foodLabel = JSON.stringify(hint.food.label)
  const foodCal = hint.food.nutrients.ENERC_KCAL
  const foodImage = hint.food.image
  
  displayFoods.innerHTML += `
  <ul class="food-section" data-food-label=${foodLabel} data-cal-label=${foodCal}>
      <li><h2> ${hint.food.label}</h2>
      <p>${Math.round(foodCal)} cal</p>
      <img src=${foodImage}></li>
    </ul>
  `
  addClickEvent();
}

function addClickEvent() {
  for (let i = 0; i < document.getElementsByClassName("food-section").length; i++) {
    document.getElementsByClassName("food-section")[i].addEventListener('click', function(){

      currCal = parseInt(this.dataset.calLabel)

      const taskLst = document.createElement("div");
      taskLst.classList.add("task");

      const taskContent = document.createElement("div");
      taskContent.classList.add("content");

      taskContent.innerText = `${this.dataset.foodLabel}, ${this.dataset.calLabel} cal`

      calorie -= currCal
      displayCalories.innerHTML = `
    <h3> ${Math.round(calorie)}</h3>
  `

      taskLst.appendChild(taskContent);


      const taskActions = document.createElement("div");
      taskActions.classList.add("actions")

      
      const taskRemove = document.createElement("button");
      taskRemove.classList.add("Remove");
      taskRemove.innerHTML = "Remove";

      taskActions.appendChild(taskRemove);

      taskLst.appendChild(taskActions);

      meals.appendChild(taskLst);

      taskRemove.addEventListener('click', () => {
      meals.removeChild(taskLst)
      calorie += currCal
      displayCalories.innerHTML = `
    <h3> ${Math.round(calorie)}</h3>
  `

  })

    });
  }
}


function renderCalorie(cal){

  calorie = cal;


  displayCalories.innerHTML = `
    <h3> ${Math.round(calorie)}</h3>
  `
}

