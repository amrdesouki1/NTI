let products = [
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


const productsTable = document.getElementById("productsTable");
const totalProducts = document.getElementById("totalProducts");
const totalValue = document.getElementById("totalValue");
const averagePrice = document.getElementById("averagePrice");
const outOfStock = document.getElementById("outOfStock");

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortPrice = document.getElementById("sortPrice");
const emptyMessage = document.getElementById("emptyMessage");

const modalOverlay = document.getElementById("modalOverlay");
const openAddBtn = document.getElementById("openAddBtn");
const closeModal = document.getElementById("closeModal");
const cancelBtn = document.getElementById("cancelBtn");
const productForm = document.getElementById("productForm");
const modalTitle = document.getElementById("modalTitle");

const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const productCategory = document.getElementById("productCategory");
const productQuantity = document.getElementById("productQuantity");

const deleteOverlay = document.getElementById("deleteOverlay");
const cancelDelete = document.getElementById("cancelDelete");
const confirmDelete = document.getElementById("confirmDelete");

const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toastMessage");

let editId = null;
let deleteId = null;


// Read
function printProducts(list) {

    productsTable.innerHTML = "";

    if (list.length === 0) {
        emptyMessage.style.display = "block";
        return;
    }

    emptyMessage.style.display = "none";

    list.forEach(function (product) {

        const row = document.createElement("tr");

        const status = product.quantity > 0
            ? `<span class="status in-stock">In Stock</span>`
            : `<span class="status out-stock">Out of Stock</span>`;

        row.innerHTML = `
            <td>
                <span class="product-id">#${product.id}</span>
            </td>

            <td>
                <span class="product-name">${product.name}</span>
            </td>

            <td>${product.category}</td>

            <td>
                <span class="price">
                    $${product.price.toLocaleString()}
                </span>
            </td>

            <td>${product.quantity}</td>

            <td>${status}</td>

            <td>
                <div class="action-buttons">

                    <button
                        class="action-btn"
                        onclick="openEditModal(${product.id})">
                        ✏️
                    </button>

                    <button
                        class="action-btn"
                        onclick="openDeleteModal(${product.id})">
                        🗑️
                    </button>

                </div>
            </td>
        `;

        productsTable.appendChild(row);
    });
}


function getAllProducts() {
    return products;
}


function getProductById(id) {

    return products.find(function (product) {
        return product.id === id;
    });

}


// Create
function createProduct(name, price, category, quantity) {

    name = name.trim();
    category = category.trim();

    if (name === "") {
        return "Name is required";
    }

    if (price <= 0 || isNaN(price)) {
        return "Price must be greater than 0";
    }

    if (quantity < 0 || isNaN(quantity)) {
        return "Quantity must be 0 or greater";
    }

    const duplicate = products.some(function (product) {

        return product.name
            .trim()
            .toLowerCase() === name.toLowerCase();

    });

    if (duplicate) {
        return "Product name already exists";
    }

    let newId = 1;

    if (products.length > 0) {

        newId = Math.max(
            ...products.map(function (product) {
                return product.id;
            })
        ) + 1;

    }

    const newProduct = {
        id: newId,
        name: name,
        price: price,
        category: category,
        quantity: quantity
    };

    products.push(newProduct);

    return newProduct;
}


// Update
function updateProduct(id, name, price, category, quantity) {

    const index = products.findIndex(function (product) {
        return product.id === id;
    });

    if (index === -1) {
        return "Product not found";
    }

    name = name.trim();
    category = category.trim();

    if (name === "") {
        return "Name is required";
    }

    if (price <= 0 || isNaN(price)) {
        return "Price must be greater than 0";
    }

    if (quantity < 0 || isNaN(quantity)) {
        return "Quantity must be 0 or greater";
    }

    const duplicate = products.some(function (product, i) {

        return (
            i !== index &&
            product.name.toLowerCase() === name.toLowerCase()
        );

    });

    if (duplicate) {
        return "Product name already exists";
    }

    products[index].name = name;
    products[index].price = price;
    products[index].category = category;
    products[index].quantity = quantity;

    return products[index];
}


// Delete
function deleteProduct(id) {

    const index = products.findIndex(function (product) {
        return product.id === id;
    });

    if (index === -1) {
        return "Product not found";
    }

    return products.splice(index, 1)[0];
}


// Search
function filterProducts(keyword) {

    keyword = keyword.trim().toLowerCase();

    return products.filter(function (product) {

        return (
            product.name.toLowerCase().includes(keyword) ||
            product.category.toLowerCase().includes(keyword)
        );

    });

}


// B2
function toSortedByPrice(list, order = "asc") {

    return list.toSorted(function (a, b) {

        if (order === "desc") {
            return b.price - a.price;
        }

        return a.price - b.price;
    });

}


// B3
function getStoreStats() {

    const total = products.reduce(function (sum, product) {

        return sum + product.price * product.quantity;

    }, 0);


    const average = products.length > 0
        ? products.reduce(function (sum, product) {

            return sum + product.price;

        }, 0) / products.length
        : 0;


    const outStock = products.filter(function (product) {

        return product.quantity === 0;

    }).length;


    return {
        totalValue: total,
        averagePrice: average,
        outOfStock: outStock
    };

}


// B4
function groupByCategory() {

    return products.reduce(function (groups, product) {

        if (!groups[product.category]) {
            groups[product.category] = [];
        }

        groups[product.category].push(product);

        return groups;

    }, {});

}


// B5
function filterByPriceRange(min = 0, max = Infinity) {

    return products.filter(function (product) {

        return product.price >= min &&
            product.price <= max;

    });

}


// B6
const inStock = (list) => {

    return list.filter(
        product => product.quantity > 0
    );

};


function withAfterAction(fn, callback) {

    const result = fn();

    callback();

    return result;

}


// B7
const store = (function () {

    return {

        add: function (product) {
            products.push(product);
            render();
        },

        remove: function (id) {

            const index = products.findIndex(
                product => product.id === id
            );

            if (index === -1) {
                return "Product not found";
            }

            return products.splice(index, 1)[0];
        },

        find: function (id) {

            return products.find(
                product => product.id === id
            );

        },

        list: function () {
            return products;
        }

    };

})();


// B8
function addMany(...items) {

    items.forEach(function (item) {
        products.push(item);
    });

    render();

    return items;
}


function updateCategories() {

    const current = categoryFilter.value;

    const categories = [
        ...new Set(
            products.map(product => product.category)
        )
    ];

    categoryFilter.innerHTML =
        `<option value="all">All Categories</option>`;

    categories.forEach(function (category) {

        categoryFilter.innerHTML += `
            <option value="${category}">
                ${category}
            </option>
        `;

    });

    if (categories.includes(current)) {
        categoryFilter.value = current;
    }

}


function getDisplayedProducts() {

    let list = [...products];

    const keyword =
        searchInput.value.trim().toLowerCase();

    if (keyword !== "") {

        list = list.filter(function (product) {

            return (
                product.name.toLowerCase().includes(keyword) ||
                product.category.toLowerCase().includes(keyword)
            );

        });

    }

    const category = categoryFilter.value;

    if (category !== "all") {

        list = list.filter(function (product) {
            return product.category === category;
        });

    }

    const order = sortPrice.value;

    if (order !== "") {
        list = toSortedByPrice(list, order);
    }

    return list;
}


function updateDashboard() {

    totalProducts.textContent = products.length;

    const stats = getStoreStats();

    totalValue.textContent =
        "$" + stats.totalValue.toLocaleString();

    averagePrice.textContent =
        "$" + stats.averagePrice.toLocaleString();

    outOfStock.textContent =
        stats.outOfStock;

}


function render() {

    updateCategories();
    updateDashboard();
    printProducts(getDisplayedProducts());

}


function openAddModal() {

    editId = null;

    modalTitle.textContent = "Add Product";

    productForm.reset();

    clearErrors();

    modalOverlay.classList.add("show");

    productName.focus();

}


function openEditModal(id) {

    const product = getProductById(id);

    if (!product) {
        return;
    }

    editId = id;

    modalTitle.textContent = "Edit Product";

    productName.value = product.name;
    productPrice.value = product.price;
    productCategory.value = product.category;
    productQuantity.value = product.quantity;

    clearErrors();

    modalOverlay.classList.add("show");

}


function closeProductModal() {

    modalOverlay.classList.remove("show");

}


function clearErrors() {

    document.querySelectorAll(".error").forEach(function (error) {

        error.textContent = "";

    });

}


function showFormError(message) {

    document.getElementById("nameError").textContent =
        message;

}


productForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = productName.value;
    const price = Number(productPrice.value);
    const category = productCategory.value;
    const quantity = Number(productQuantity.value);

    clearErrors();

    if (editId === null) {

        const result = createProduct(
            name,
            price,
            category,
            quantity
        );

        if (typeof result === "string") {
            showFormError(result);
            return;
        }

        showToast("Product added successfully");

    } else {

        const result = updateProduct(
            editId,
            name,
            price,
            category,
            quantity
        );

        if (typeof result === "string") {
            showFormError(result);
            return;
        }

        showToast("Product updated successfully");
    }

    closeProductModal();
    render();

});


function openDeleteModal(id) {

    deleteId = id;

    deleteOverlay.classList.add("show");

}


function closeDeleteModal() {

    deleteOverlay.classList.remove("show");

    deleteId = null;

}


confirmDelete.addEventListener("click", function () {

    if (deleteId === null) {
        return;
    }

    const result = deleteProduct(deleteId);

    if (typeof result === "string") {
        showToast(result);
    } else {
        showToast("Product deleted successfully");
    }

    closeDeleteModal();

    render();

});


searchInput.addEventListener("input", function () {
    render();
});


categoryFilter.addEventListener("change", function () {
    render();
});


sortPrice.addEventListener("change", function () {
    render();
});


openAddBtn.addEventListener("click", openAddModal);

closeModal.addEventListener("click", closeProductModal);

cancelBtn.addEventListener("click", closeProductModal);

cancelDelete.addEventListener("click", closeDeleteModal);


modalOverlay.addEventListener("click", function (e) {

    if (e.target === modalOverlay) {
        closeProductModal();
    }

});


deleteOverlay.addEventListener("click", function (e) {

    if (e.target === deleteOverlay) {
        closeDeleteModal();
    }

});


function showToast(message) {

    toastMessage.textContent = message;

    toast.classList.add("show");

    setTimeout(function () {

        toast.classList.remove("show");

    }, 2500);

}


render();