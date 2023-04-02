q = console.log;

let apiUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772";

const results = document.getElementById("results");

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

async function openn(mealId) {
  document.getElementById("notify").classList.add("hidden");
  document.getElementById("results").classList.add("hidden");
  apiUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  const response = await fetch(apiUrl);
  // q(response);

  const data = await response.json();
  // q(data);

  const list = data.meals[0];

  //name1
  document.getElementById("title").classList.remove("hidden");
  document.getElementById("title").innerText = `${list.strMeal}`;
  //   q(list.strMeal);

  //img
  document.getElementById("main").classList.remove("hidden");
  document.getElementById("main").src = `${list.strMealThumb}`;
  //   q(list.strMealThumb);

  //categories
  document.getElementById("categories").classList.remove("hidden");
  document.getElementById("categories").innerHTML = `<p>${list.strCategory}</p>
    <p>${list.strArea}</p>`;
  //   q(list.strCategory);
  //   q(list.strArea);

  //Instructions
  document.getElementById("instructions").classList.remove("hidden");
  document.getElementById("instructions").innerText = `${list.strInstructions}`;
  //   q(list.strInstructions);

  //Ingredients
  document.getElementsByClassName("ingredients")[0].classList.remove("hidden");
  document.getElementById("ingredients").classList.remove("hidden");
  document.getElementById("ingredients").innerHTML = "";
  let i = 1;

  q(list);
  //   q(`list.strIngredient${i}`);
  //   q(eval(`list.strIngredient${i}`));

  while (
    eval(`list.strIngredient${i}`) !== "" &&
    eval(`list.strIngredient${i}`) !== null &&
    i !== 21
  ) {
    let newDiv = document.createElement("div");
    newDiv.innerText = `${eval(`list.strIngredient${i}`)} ${eval(
      `list.strMeasure${i}`
    )}`;
    document.getElementById("ingredients").appendChild(newDiv);
    i += 1;
  }

  //   q(list);
  //   q(list.strIngredient1);
  //   q(list.strMeasure1);
}

async function random() {
  document.getElementById("notify").classList.add("hidden");
  document.getElementById("results").classList.add("hidden");
  apiUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
  const response = await fetch(apiUrl);
  // q(response);

  const data = await response.json();
  // q(data);

  const list = data.meals[0];
  //   q(list);

  //name1
  document.getElementById("title").classList.remove("hidden");
  document.getElementById("title").innerText = `${list.strMeal}`;
  //   q(list.strMeal);

  //img
  document.getElementById("main").classList.remove("hidden");
  document.getElementById("main").src = `${list.strMealThumb}`;
  //   q(list.strMealThumb);

  //categories
  document.getElementById("categories").classList.remove("hidden");
  document.getElementById("categories").innerHTML = `<p>${list.strCategory}</p>
  <p>${list.strArea}</p>`;
  //   q(list.strCategory);
  //   q(list.strArea);

  //Instructions
  document.getElementById("instructions").classList.remove("hidden");
  document.getElementById("instructions").innerText = `${list.strInstructions}`;
  //   q(list.strInstructions);

  //Ingredients
  document.getElementsByClassName("ingredients")[0].classList.remove("hidden");
  document.getElementById("ingredients").classList.remove("hidden");
  document.getElementById("ingredients").innerHTML = "";
  let i = 1;

  while (eval(`list.strIngredient${i}`) !== "" && i != 21) {
    let newDiv = document.createElement("div");
    newDiv.innerText = `${eval(`list.strIngredient${i}`)} ${eval(
      `list.strMeasure${i}`
    )}`;
    document.getElementById("ingredients").appendChild(newDiv);
    i += 1;
  }

  //   q(list);
  //   q(list.strIngredient1);
  //   q(list.strMeasure1);
}

async function search() {
  const mealName = document.getElementById("mealFinder").value;
  if (mealName == "") {
    return alert("please enter a meal name!");
  } else {
    apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
    const response = await fetch(apiUrl);
    // q(response);

    const data = await response.json();
    // q(data);

    const list = data.meals;
    if (list == null) {
      return alert("no Result!");
    } else {
      document.getElementById("notify").classList.remove("hidden");
      document.getElementById("results").classList.remove("hidden");
      document.getElementById("title").classList.add("hidden");
      document.getElementById("main").classList.add("hidden");
      document.getElementById("categories").classList.add("hidden");
      document.getElementById("instructions").classList.add("hidden");
      document.getElementById("ingredientsTitle").classList.add("hidden");
      document.getElementById("ingredients").classList.add("hidden");

      document.getElementById(
        "notify"
      ).innerText = `Search resauls for "${mealName}";`;
      results.innerHTML = "";
      for (let i = 0; i < list.length; i++) {
        results.innerHTML += `<div class="result" onclick="openn(${
          list[i].idMeal
        })">
        <img id="r${i + 1}" src="${list[i].strMealThumb}" alt="">
        <div id="cover${i + 1}" class="cover">${list[i].strMeal}</div>
    </div>`;
        // q(`name${i + 1}`, list[i].strMeal);
        // q(`imgUrl${i + 1}`, list[i].strMealThumb);
      }
    }
  }
}

// getData();

// search("steak");
