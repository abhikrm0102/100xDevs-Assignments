/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  
  transactions = [
			{
				id: 1,
				timestamp: 1656076800000,
				price: 10,
				category: 'Food',
				itemName: 'Pizza',
			},
			{
				id: 2,
				timestamp: 1656259600000,
				price: 20,
				category: 'Food',
				itemName: 'Burger',
			},
			{
				id: 3,
				timestamp: 1656019200000,
				price: 15,
				category: 'Clothing',
				itemName: 'T-Shirt',
			},
			{
				id: 4,
				timestamp: 1656364800000,
				price: 30,
				category: 'Electronics',
				itemName: 'Headphones',
			},
			{
				id: 5,
				timestamp: 1656105600000,
				price: 25,
				category: 'Clothing',
				itemName: 'Jeans',
			},
	];

	Output -
  [
		{ category: 'Food', totalSpent: 30 },
		{ category: 'Clothing', totalSpent: 40 },
		{ category: 'Electronics', totalSpent: 30 },
	]

*/

/*
// All code blow is all that was provided in the original code snippet as question prompt

function calculateTotalSpentByCategory(transactions) {
  return [];
}

module.exports = calculateTotalSpentByCategory;
*/

// Solution: -

//Option 1: Using Array

function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = [];  // Initialize an empty array to hold category totals
  // Iterate through each transaction
  transactions.forEach(transaction => {
    const { category, price } = transaction; // Destructure category and price from the transaction object
    // Check if the category already exists in the categoryTotals array
    const existingCategory = categoryTotals.find(item => item.category === category); // Find the existing category in the array
    if (existingCategory) {
      // If it exists, accumulate the total price
      existingCategory.totalSpent += price;
    } else {
      // If it doesn't exist, create a new entry
      categoryTotals.push({ category: category, totalSpent: price });
    }
  });
  return categoryTotals;
}

/*

// Option 2: Using Object but here we have to convert the object to array at the end

function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {};
  // Iterate through each transaction
  transactions.forEach(transaction => {
    const { category, price } = transaction;
    // If the category doesn't exist in the totals object, initialize it
    if (!categoryTotals[category]) {
      categoryTotals[category] = 0;
    }
    // Accumulate the total price for the category
    categoryTotals[category] += price;
  });
  // Convert the totals object into the desired output format
  return Object.keys(categoryTotals).map(category => ({
    category: category,
    totalSpent: categoryTotals[category]
  }));
}
*/
module.exports = calculateTotalSpentByCategory;
