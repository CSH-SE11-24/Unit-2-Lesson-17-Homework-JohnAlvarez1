const prompt = require('prompt-sync')()
// Create an object that represents your favorite restaurant with the keys name (string), cuisine (string), and rating (number)
let FavRestaurant = {
  name: "McDonald's",
  cuisine: "Big Mac", 
  rating: 4
}

// Console log the restaurant's name using the object
console.log(FavRestaurant.name)


// Add a new key called location and add the restaurant's location
FavRestaurant.location = "McDonald's, 1600 Bruckner Blvd, Bronx, NY 10473"


// Change the rating of the restaurant to increase it by one
FavRestaurant.rating++


// Add a new key called test and set the value to null

FavRestaurant.test = null

// Delete the test key

delete FavRestaurant.test

// Console log the object to see if the test key is gone

console.log(FavRestaurant)


// Loop through the object and print every key and element.
// It should look like: 
// name is Ugly Baby
// cuisine is thai
// rating is 10
// location is 407 Smith St, Brooklyn

for(let key in FavRestaurant) {
  console.log(`${key} is ${FavRestaurant[key]}`)
}



