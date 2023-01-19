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

document.getElementById("calBackground").style.display = "none";

foodButton.addEventListener("click", (e) => {
    e.preventDefault()


    displayFoods.innerHTML = ""


    axios.get('https://edamam-food-and-grocery-database.p.rapidapi.com/parser',{
        headers:{
          'X-RapidAPI-Key': '7ab34fccb6msh058d959fc9393bap1fe836jsn8b45319eb450',
          'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
        },
        params: {
          ingr: `${searchFood.value}`
        }
  })
  .then(response => {
    for (let i = 0; i < 10; i++){
      renderFood(response.data.hints[i])
    }
    document.getElementById("calBackground").style.display = "block";
    searchFood.value = ""
    // response.data.hints.map((hint) => console.log(hint.food.label))
    // response.data.hints.food.map((hint) => renderFood(hint))
  })
  .catch(error => {
    console.log(error);
  });

})



userButton.addEventListener("click", (e) => {
  e.preventDefault()


  axios.get("https://fitness-calculator.p.rapidapi.com/dailycalorie", {
    params:{
      age: age.value,
      gender: gender.value,
      height: height.value,
      weight: weight.value,
      activitylevel: activityLevel.value
    },
    headers: {
      'X-RapidAPI-Key': '80fefe0e63msh79190a807afeedfp19ee1djsn154cf08c9a54',
      'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
    }
  })
  .then(response => {
    // console.log(age.value)
    // console.log(gender.value)
    // console.log(height.value)
    // console.log(weight.value)
    // console.log(activityLevel.value)
      let maintainWeight = response.data.data.goals["maintain weight"]
      // console.log(maintainWeight);
      //response.data.data.goals.map((goal)=> renderCalorie(goal));
      renderCalorie(maintainWeight)
      document.getElementById("calBackground").style.display = "block";

  })
  .catch(error => {
    console.log(error);
  });
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

      ////////// Object Literal \\\\\\\\\\\\\\
      taskContent.innerText = this.dataset.foodLabel + ", " + this.dataset.calLabel + " cal"
      ////////// Object Literal \\\\\\\\\\\\\\

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

