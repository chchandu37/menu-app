// Function to load and display meal details
function loadMealDetails(mealId) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(response => response.json())
        .then(data => {
            const meal = data.meals[0];

            const mealName = document.getElementById('meal-name');
            const mealImage = document.getElementById('meal-image');
            const mealInstructions = document.getElementById('meal-instructions');

            mealName.textContent = meal.strMeal;
            mealImage.src = meal.strMealThumb;
            mealInstructions.textContent = meal.strInstructions;

            const addToFavoritesButton = document.getElementById('add-to-favorites');
            addToFavoritesButton.addEventListener('click', () => {
                addToFavorites(meal.idMeal, meal.strMeal, meal.strMealThumb);
            });
        })
        .catch(error => console.error(error));
}

// Load meal details based on the URL parameter
const urlParams = new URLSearchParams(window.location.search);
const mealId = urlParams.get('id');
if (mealId) {
    loadMealDetails(mealId);
}
