// // foodUrl = 'https://edamam-food-and-grocery-database.p.rapidapi.com/parser'
// // foodAPI = '7ab34fccb6msh058d959fc9393bap1fe836jsn8b45319eb450'
// // foodHost = 'edamam-food-and-grocery-database.p.rapidapi.com'

// // calUrl = "https://fitness-calculator.p.rapidapi.com/dailycalorie"
// // calAPI = '80fefe0e63msh79190a807afeedfp19ee1djsn154cf08c9a54'
// // calHost = "fitness-calculator.p.rapidapi.com"



// function fetchData(url, headers, params, thenHandler){
//   axios.get(url,{
//         headers: headers,
//         params: params
//   })
//   .then(response => {
//     thenHandler(response.data)
//   })
//   .catch(error => {
//     console.log(error);
//   });
// }


// foodButton.addEventListener("click", (e) => {
//     e.preventDefault()
//     displayFoods.innerHTML = ""

//     fetchData(foodUrl, {foodAPI, foodHost}, {ingr: `${searchFood.value}`}, foodHandler(response.data))
// })

// userButton.addEventListener("click", (e) => {
//   e.preventDefault()

//   fetchData(calUrl, {calAPI, calHost}, { age: age.value,gender: gender.value,height: height.value,weight: weight.value,
//     activitylevel: activityLevel.value}, calHandler(response.data))
// })


// function foodHandler(response){
//   for (let i = 0; i < 10; i++){
//     renderFood(response.data.hints[i])
//   }
//   document.getElementById("calBackground").style.display = "block";
//   searchFood.value = ""

// }

// function calHandler(response){
//   renderCalorie(response.data.data.goals["maintain weight"])
// }