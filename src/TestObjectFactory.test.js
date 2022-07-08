export function testMenuItem(
    id = 3,
    name = "Pizza",
    category = "Hot dishes",
    ingredients = "Potato, Flour, Ketchup",
    weight = 220,
    price = 100,
    image = "https://image.com/pizza.jpeg",
    isAvailable = true
) {
    return {
        id: id,
        name: name,
        category: category,
        ingredients: ingredients,
        weight: weight,
        price: price,
        image: image,
        isAvailable: isAvailable
    }
}
