// Function to search for meals and display search results.
function searchMeals(query) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        .then(response => response.json())
        .then(data => {
            const searchResults = document.getElementById('search-results');
            searchResults.innerHTML = '';

            data.meals.forEach(meal => {
                const mealCard = document.createElement('div');
                mealCard.className = 'card col-md-4';
                mealCard.innerHTML = `
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}" data-id="${meal.idMeal}">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">${meal.strInstructions.substring(0, 100)}...</p>
                        <button class="btn btn-primary" data-id="${meal.idMeal}">Favorite</button>
                    </div>
                `;
                mealCard.querySelector('button').addEventListener('click', () => {
                    addToFavorites(meal.idMeal, meal.strMeal, meal.strMealThumb);
                });
                mealCard.querySelector('img').addEventListener('click', () => {
                    navigateToPage(`meal.html?id=${meal.idMeal}`);
                });
                searchResults.appendChild(mealCard);
            });
        })
        .catch(error => console.error(error));
}
// Event listener for the search input
document.getElementById('search').addEventListener('input', function () {
    const query = this.value;
    searchMeals(query);
});