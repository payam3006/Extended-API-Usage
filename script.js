q = console.log;

let apiUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772";
apiUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

async function getData() {
  const response = await fetch(apiUrl);
  q(response);

  const data = await response.json();
  q(data);

  list = data.meals[0];
  q(list);

  //name1
  q(list.strMeal);

  //img
  q(list.strMealThumb);

  //categories
  q(list.strCategory);
  q(list.strArea);

  //Instructions
  q(list.strInstructions);

  //Ingredients
  q(list.strIngredient1);
  q(list.strMeasure1);
  //   currencies = Object.keys(list);
  //   currenciesVlues = Object.values(list);
  //   currencies.forEach(function (value, index) {
  //     firstCurrencyList.innerHTML += `<option id="${value}" data-price="${currenciesVlues[index]}">${value}</option>`;
  //     secondCurrencyList.innerHTML += `<option id="${value}2" data-price="${currenciesVlues[index]}">${value}</option>`;
  //   });
  //   document.getElementById("EUR2").setAttribute("selected", "selected");
  //   const euroInd = currencies.indexOf("EUR");
  //   const usdInd = currencies.indexOf("USD");
  //   exchangeRate = currenciesVlues[euroInd];
  //   rate.innerHTML = `1 ${currencies[usdInd]} = ${exchangeRate} ${currencies[euroInd]}`;
  //   document.getElementById("secondCurrencyValue").value =
  //     currenciesVlues[euroInd].toFixed(4);

  //   console.log(currencies.indexOf("EUR"));
  //   console.log(list);
}

async function search(mealName) {
  apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
  const response = await fetch(apiUrl);
  q(response);

  const data = await response.json();
  q(data);

  list = data.meals;
  for (let i = 0; i < list.length; i++) {
    q(`name${i + 1}`, list[i].strMeal);
    q(`imgUrl${i + 1}`, list[i].strMealThumb);
  }
}

getData();

search("steak");
