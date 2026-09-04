
var products = [
    {
        id: 1,
        name: "Laptop",
        price: 18500,
        category: "Electronics",
        quantity: 4
    },
    {
        id: 2,
        name: "Mouse",
        price: 120,
        category: "Electronics",
        quantity: 25
    },
    {
        id: 3,
        name: "Notebook",
        price: 35,
        category: "Stationery",
        quantity: 100
    },
    {
        id: 4,
        name: "Desk Lamp",
        price: 420,
        category: "Home",
        quantity: 0
    }
];

// print Function

function printProducts(list) {
    console.table(list);
}


// 2) CREATE

function createProduct(name = "", price = 0, category = "", quantity = 0) {

    
    name = name.trim();
    category = category.trim();

    
    if (name === "") {
        return "Error: name is required";
    }

    if (price <= 0) {
        return "Error: price must be greater than 0";
    }

    if (quantity < 0) {
        return "Error: quantity must be 0 or greater";
    }

    // Check duplicate name
    var duplicate = products.some(function (product) {
        return product.name.trim().toLowerCase() === name.toLowerCase();
    });

    if (duplicate) {
        return "Error: product name already exists";
    }

    // Auto increment ID
    var newId = products.length > 0
        ? Math.max(...products.map(function (product) {
            return product.id;
        })) + 1
        : 1;

    var newProduct = {
        id: newId,
        name: name,
        price: price,
        category: category,
        quantity: quantity
    };

    products.push(newProduct);

    return newProduct;
}



// 3) READ ALL

function getAllProducts() {
    printProducts(products);

    return products;
}

// 4) READ ONE

function getProductById(id) {

    var product = products.find(function (product) {
        return product.id === id;
    });

    if (!product) {
        return null;
    }

    return product;
}


// 5) UPDATE

function updateProduct(id, name, price, category, quantity) {

    var index = products.findIndex(function (product) {
        return product.id === id;
    });

    if (index === -1) {
        return "Error: product not found";
    }

    name = name.trim();
    category = category.trim();

    if (name === "") {
        return "Error: name is required";
    }

    if (price <= 0) {
        return "Error: price must be greater than 0";
    }

    if (quantity < 0) {
        return "Error: quantity must be 0 or greater";
    }

    // Check duplicate name
    var duplicate = products.some(function (product, i) {
        return i !== index &&
            product.name.toLowerCase() === name.toLowerCase();
    });

    if (duplicate) {
        return "Error: product name already exists";
    }

    products[index].name = name;
    products[index].price = price;
    products[index].category = category;
    products[index].quantity = quantity;

    return products[index];
}


// 6) DELETE

function deleteProduct(id) {

    var index = products.findIndex(function (product) {
        return product.id === id;
    });

    if (index === -1) {
        return "Error: product not found";
    }

    var confirmDelete = confirm("Are you sure you want to delete this product?");

    if (!confirmDelete) {
        return "Delete cancelled";
    }

    var deletedProduct = products.splice(index, 1);

    return deletedProduct[0];
}


// 7) FILTER / SEARCH

function filterProducts(keyword) {

    keyword = keyword.trim().toLowerCase();

    var result = products.filter(function (product) {

        return product.name.toLowerCase().includes(keyword) ||
            product.category.toLowerCase().includes(keyword);

    });

    return result;
}


// 8) INTERACTIVE MENU

function startApp() {

    var choice;

    while (true) {

        choice = prompt(
            "===== NTI Mini Store =====\n\n" +
            "1) Add product\n" +
            "2) Show all products\n" +
            "3) Show product by ID\n" +
            "4) Update product\n" +
            "5) Delete product\n" +
            "6) Search / Filter\n" +
            "0) Exit\n\n" +
            "Choose a number:"
        );

        
        if (choice === null || choice === "0") {
            console.log("Application closed.");
            break;
        }

        // ADD
        if (choice === "1") {

            var name = prompt("Enter product name:");

            if (name === null) {
                continue;
            }

            var price = Number(prompt("Enter product price:"));
            var category = prompt("Enter product category:");
            var quantity = Number(prompt("Enter product quantity:"));

            var result = createProduct(
                name,
                price,
                category,
                quantity
            );

            if (typeof result === "string") {
                alert(result);
            } else {
                console.log("Product added successfully:");
                console.log(result);
            }
        }

        // SHOW ALL
        else if (choice === "2") {

            getAllProducts();
        }

        // SHOW BY ID
        else if (choice === "3") {

            var id = Number(prompt("Enter product ID:"));

            var product = getProductById(id);

            if (product === null) {
                alert("Error: product not found");
            } else {
                console.log(product);
            }
        }

        // UPDATE
        else if (choice === "4") {

            var updateId = Number(prompt("Enter product ID:"));

            var oldProduct = getProductById(updateId);

            if (!oldProduct) {
                alert("Error: product not found");
                continue;
            }

            var newName = prompt(
                "Enter new name:",
                oldProduct.name
            );

            var newPrice = Number(prompt(
                "Enter new price:",
                oldProduct.price
            ));

            var newCategory = prompt(
                "Enter new category:",
                oldProduct.category
            );

            var newQuantity = Number(prompt(
                "Enter new quantity:",
                oldProduct.quantity
            ));

            var updated = updateProduct(
                updateId,
                newName,
                newPrice,
                newCategory,
                newQuantity
            );

            if (typeof updated === "string") {
                alert(updated);
            } else {
                console.log("Product updated successfully:");
                console.log(updated);
            }
        }

        // DELETE
        else if (choice === "5") {

            var deleteId = Number(prompt("Enter product ID:"));

            var deleted = deleteProduct(deleteId);

            if (typeof deleted === "string") {
                alert(deleted);
            } else {
                console.log("Product deleted:");
                console.log(deleted);
            }
        }

        // SEARCH

        else if (choice === "6") {

            var keyword = prompt("Enter search keyword:");

            if (keyword === null) {
                continue;
            }

            var filtered = filterProducts(keyword);

            console.table(filtered);
        }

        // WRONG CHOICE

        else {

            alert("Invalid choice. Please choose from 0 to 6.");
        }
    }
}


//Prevent Duplicate Names

function isDuplicateName(name) {

    name = name.trim().toLowerCase();

    return products.some(function (product) {

        return product.name.trim().toLowerCase() === name;

    });
}


//  Sort By Price
// default = asc


function toSortedByPrice(list, order = "asc") {

    var newList = list.toSorted(function (a, b) {

        if (order === "desc") {
            return b.price - a.price;
        }

        return a.price - b.price;
    });

    return newList;
}

// Store Statistics

function getStoreStats() {

    var totalValue = products.reduce(function (sum, product) {

        return sum + (product.price * product.quantity);

    }, 0);


    var averagePrice = products.reduce(function (sum, product) {

        return sum + product.price;

    }, 0) / products.length;


    var outOfStock = products.filter(function (product) {

        return product.quantity === 0;

    }).length;


    return {
        totalValue: totalValue.toFixed(2),
        averagePrice: averagePrice.toFixed(2),
        outOfStock: outOfStock
    };
}

// B4 - Group By Category

function groupByCategory() {

    return products.reduce(function (groups, product) {

        if (!groups[product.category]) {
            groups[product.category] = [];
        }

        groups[product.category].push(product);

        return groups;

    }, {});
}


// Filter By Price Range
// default params

function filterByPriceRange(min = 0, max = Infinity) {

    return products.filter(function (product) {

        return product.price >= min &&
            product.price <= max;

    });
}


// ========================================
// B6 - Arrow + HOF
// ========================================

// Arrow function
const inStock = (list) => {

    return list.filter(p => p.quantity > 0);

};


// Higher Order Function
function withAfterAction(fn, callback) {

    var result = fn();

    callback();

    return result;
}


// ========================================
// B7 - IIFE + Object Methods
// ========================================

var store = (function () {

    return {

        add: function (product) {

            products.push(product);

            return product;
        },

        remove: function (id) {

            var index = products.findIndex(function (product) {

                return product.id === id;

            });

            if (index === -1) {
                return "Error: product not found";
            }

            return products.splice(index, 1)[0];
        },

        find: function (id) {

            return products.find(function (product) {

                return product.id === id;

            });
        },

        list: function () {

            return products;
        }
    };

})();


// ========================================
// B8 - Rest Parameters
// ========================================

function addMany(...items) {

    items.forEach(function (item) {

        products.push(item);

    });

    return items;
}
// TEST

console.log("===== CRUD TESTS =====");

// Create
console.log(
    createProduct("Keyboard", 350, "Electronics", 12)
);

// Duplicate
console.log(
    createProduct(" keyboard ", 400, "Electronics", 5)
);

// Show all
getAllProducts();

// Find
console.log(
    getProductById(4)
);

// Filter
console.log(
    filterProducts("elec")
);

// Sort
console.log(
    toSortedByPrice(products)
);

console.log(
    toSortedByPrice(products, "desc")
);

// Statistics
console.log(
    getStoreStats()
);

// Group by category
console.log(
    groupByCategory()
);

// Price range
console.log(
    filterByPriceRange(100, 500)
);

// In stock
console.log(
    inStock(products)
);

// Higher Order Function
withAfterAction(
    function () {
        console.log("Main action done");
    },
    function () {
        console.log("Done");
    }
);

// Store object
console.log(
    store.find(1)
);

console.log(
    store.list()
);


// Add many
addMany(
    {
        id: 6,
        name: "Pen",
        price: 15,
        category: "Stationery",
        quantity: 50
    },
    {
        id: 7,
        name: "Chair",
        price: 800,
        category: "Home",
        quantity: 10
    }
);

console.table(products);

