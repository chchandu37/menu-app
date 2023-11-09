// Function to display favorite meals
function displayFavoriteMeals() {
    const favoriteMeals = JSON.parse(localStorage.getItem('favoriteMeals')) || [];
    const favoriteMealsList = document.getElementById('favourite-meals');
    favoriteMealsList.innerHTML = '';

    favoriteMeals.forEach(meal => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.innerHTML = `
            <span>${meal.name}</span>
            <img src="${meal.image}" class="img-fluid" alt="${meal.name}" data-id="${meal.id}">
            <button class="btn btn-danger" data-id="${meal.id}">Remove from Favorites</button>
        `;

        listItem.querySelector('button').addEventListener('click', () => {
            removeFromFavorites(meal.id);
            displayFavoriteMeals();
        });

        listItem.querySelector('img').addEventListener('click', () => {
            navigateToPage(`meal.html?id=${meal.id}`);
        });

        favoriteMealsList.appendChild(listItem);
    });
}

// Call the function to display favorite meals when the page loads
displayFavoriteMeals();
