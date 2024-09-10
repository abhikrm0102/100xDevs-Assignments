/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

// function calculateTotalSpentByCategory(transactions) {
//   return [];
// }

// Solution: -
function calculateTotalSpentByCategory(transactions) {
  // Initialize an empty object to store total spent per category
  let categoryTotal = {};

/*
  // Iterate over the transactions using a for loop
  //Option 1
  for (let i = 0; i < array.length; i++) {
    const transaction = transactions[i];
    const { category, price } = transaction;

    // If the category doesn't exist, initialize it with 0
    if (!categoryTotal[category]) {
      categoryTotal[category] = 0;
    }

    // Add the current transaction price to the category's total
    categoryTotal[category] += price;    
  }

  //Option 2
  transactions.forEach(transaction => {
    const { category, price } = transaction;

    // If the category doesn't exist, initialize it with 0
    if (!categoryTotals[category]) {
      categoryTotals[category] = 0;
    }

    // Add the current transaction price to the category's total
    categoryTotals[category] += price;
  });
*/

  let result = [];
/*
  //Convert the categoryTotals object into an array of objects
  //Option 1
  for (let i = 0; i < Object.keys(categoryTotals).length; i++) {
    let category = Object.keys(categoryTotals)[i];
    result.push({
      category: category,
      totalSpent: categoryTotals[category]
    });
  }
  
  //Option 2
  for (let category in categoryTotals) {
    result.push({
      category: category,
      totalSpent: categoryTotals[category]
    });
  }
*/

  return result;
}

module.exports = calculateTotalSpentByCategory;
