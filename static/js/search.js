// Sample data for restaurants (15 entries)
const restaurants = [
    { name: "Pizza Palace", cuisine: "Italian", location: "Downtown" },
    { name: "Burger Bonanza", cuisine: "American", location: "Westside" },
    { name: "Sushi Stop", cuisine: "Japanese", location: "Eastside" },
    { name: "Taco Town", cuisine: "Mexican", location: "Midtown" },
    { name: "Curry Corner", cuisine: "Indian", location: "Southside" },
    { name: "Noodle Nook", cuisine: "Chinese", location: "Northside" },
    { name: "Pasta Place", cuisine: "Italian", location: "Uptown" },
    { name: "BBQ Barn", cuisine: "American", location: "Riverside" },
    { name: "Saffron Spice", cuisine: "Indian", location: "Central" },
    { name: "Dim Sum Delight", cuisine: "Chinese", location: "Westend" },
    { name: "Falafel Feast", cuisine: "Middle Eastern", location: "Downtown" },
    { name: "Ramen Retreat", cuisine: "Japanese", location: "Eastend" },
    { name: "Burrito Bliss", cuisine: "Mexican", location: "Southend" },
    { name: "Gyro Galaxy", cuisine: "Greek", location: "Midtown" },
    { name: "Vegan Village", cuisine: "Vegan", location: "Northend" }
];

// Sample data for food items (15 entries)
const foodItems = [
    { name: "Margherita Pizza", category: "Italian", restaurant: "Pizza Palace" },
    { name: "Cheeseburger", category: "American", restaurant: "Burger Bonanza" },
    { name: "California Roll", category: "Japanese", restaurant: "Sushi Stop" },
    { name: "Tacos Al Pastor", category: "Mexican", restaurant: "Taco Town" },
    { name: "Butter Chicken", category: "Indian", restaurant: "Curry Corner" },
    { name: "Kung Pao Chicken", category: "Chinese", restaurant: "Noodle Nook" },
    { name: "Fettuccine Alfredo", category: "Italian", restaurant: "Pasta Place" },
    { name: "BBQ Ribs", category: "American", restaurant: "BBQ Barn" },
    { name: "Paneer Tikka", category: "Indian", restaurant: "Saffron Spice" },
    { name: "Steamed Pork Buns", category: "Chinese", restaurant: "Dim Sum Delight" },
    { name: "Falafel Wrap", category: "Middle Eastern", restaurant: "Falafel Feast" },
    { name: "Tonkotsu Ramen", category: "Japanese", restaurant: "Ramen Retreat" },
    { name: "Chicken Burrito", category: "Mexican", restaurant: "Burrito Bliss" },
    { name: "Greek Salad", category: "Greek", restaurant: "Gyro Galaxy" },
    { name: "Vegan Buddha Bowl", category: "Vegan", restaurant: "Vegan Village" }
];

// Function to display restaurants
function displayRestaurants(restaurantsToShow) {
    const restaurantResults = document.getElementById('restaurantResults');
    restaurantResults.innerHTML = ''; // Clear previous results
    if (restaurantsToShow.length === 0) {
        restaurantResults.innerHTML = '<p>No restaurants found.</p>';
        return;
    }
    restaurantsToShow.forEach(restaurant => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${restaurant.name}</h3>
            <p>Cuisine: ${restaurant.cuisine}</p>
            <p>Location: ${restaurant.location}</p>
        `;
        restaurantResults.appendChild(card);
    });
}

// Function to display food items
function displayFoodItems(foodItemsToShow) {
    const foodResults = document.getElementById('foodResults');
    foodResults.innerHTML = ''; // Clear previous results
    if (foodItemsToShow.length === 0) {
        foodResults.innerHTML = '<p>No food items found.</p>';
        return;
    }
    foodItemsToShow.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${item.name}</h3>
            <p>Category: ${item.category}</p>
            <p>Restaurant: ${item.restaurant}</p>
        `;
        foodResults.appendChild(card);
    });
}

// Search restaurants function
function searchRestaurants() {
    const searchTerm = document.getElementById('restaurantSearch').value.toLowerCase();
    const filteredRestaurants = restaurants.filter(restaurant =>
        restaurant.name.toLowerCase().includes(searchTerm)
    );
    displayRestaurants(filteredRestaurants);
}

// Search food items function
function searchFoodItems() {
    const searchTerm = document.getElementById('foodSearch').value.toLowerCase();
    const filteredFoodItems = foodItems.filter(item =>
        item.name.toLowerCase().includes(searchTerm) || 
        item.category.toLowerCase().includes(searchTerm)
    );
    displayFoodItems(filteredFoodItems);
}

// Initialize by displaying all restaurants and food items
document.addEventListener('DOMContentLoaded', () => {
    displayRestaurants(restaurants);
    displayFoodItems(foodItems);
});