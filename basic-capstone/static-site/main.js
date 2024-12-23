const products = [
    { id: 1, name: "Laptop", price: "$1000", description: "High-performance laptop" },
    { id: 2, name: "Smartphone", price: "$700", description: "Latest model smartphone" },
    { id: 3, name: "Headphones", price: "$150", description: "Noise-cancelling headphones" },
    { id: 4, name: "Smartwatch", price: "$200", description: "Feature-rich smartwatch" },
    { id: 5, name: "Tablet", price: "$400", description: "Portable and powerful tablet" },
    { id: 6, name: "Gaming Console", price: "$500", description: "Next-gen gaming console" },
    { id: 7, name: "Bluetooth Speaker", price: "$120", description: "Compact and powerful speaker" },
    { id: 8, name: "Desktop PC", price: "$800", description: "High-performance desktop computer" },
    { id: 9, name: "Monitor", price: "$300", description: "4K ultra HD monitor" },
    { id: 10, name: "Keyboard", price: "$50", description: "Mechanical gaming keyboard" },
    { id: 11, name: "Mouse", price: "$30", description: "Ergonomic wireless mouse" },
    { id: 12, name: "Printer", price: "$150", description: "All-in-one color printer" },
    { id: 13, name: "Camera", price: "$900", description: "DSLR camera with high resolution" },
    { id: 14, name: "Action Camera", price: "$300", description: "Waterproof action camera" },
    { id: 15, name: "Power Bank", price: "$40", description: "Fast-charging power bank" },
    { id: 16, name: "Drone", price: "$1000", description: "High-performance quadcopter drone" },
    { id: 17, name: "E-Reader", price: "$150", description: "Compact e-book reader" },
    { id: 18, name: "Fitness Tracker", price: "$100", description: "Lightweight fitness tracker" },
    { id: 19, name: "VR Headset", price: "$300", description: "Immersive virtual reality headset" },
    { id: 20, name: "Graphics Card", price: "$400", description: "High-end gaming graphics card" },
    { id: 21, name: "External Hard Drive", price: "$100", description: "1TB portable hard drive" },
    { id: 22, name: "Router", price: "$80", description: "High-speed Wi-Fi router" },
    { id: 23, name: "Projector", price: "$600", description: "Full HD home projector" },
    { id: 24, name: "Microwave Oven", price: "$200", description: "Smart microwave oven" },
    { id: 25, name: "Refrigerator", price: "$1200", description: "Energy-efficient refrigerator" },
    { id: 26, name: "Air Conditioner", price: "$800", description: "Smart split AC" },
    { id: 27, name: "Washing Machine", price: "$700", description: "Front-load washing machine" },
    { id: 28, name: "Vacuum Cleaner", price: "$300", description: "Cordless vacuum cleaner" },
    { id: 29, name: "Coffee Maker", price: "$100", description: "Automatic coffee maker" },
    { id: 30, name: "Electric Kettle", price: "$50", description: "Fast boiling kettle" },
    { id: 31, name: "Toaster", price: "$30", description: "4-slice toaster" },
    { id: 32, name: "Blender", price: "$100", description: "High-speed blender" },
    { id: 33, name: "Dishwasher", price: "$900", description: "Energy-efficient dishwasher" },
    { id: 34, name: "Smart Light Bulb", price: "$20", description: "Wi-Fi-enabled light bulb" },
    { id: 35, name: "Security Camera", price: "$150", description: "Wireless HD security camera" },
    { id: 36, name: "Smart Thermostat", price: "$250", description: "Energy-saving thermostat" },
    { id: 37, name: "Electric Scooter", price: "$500", description: "Lightweight electric scooter" },
    { id: 38, name: "Electric Bike", price: "$1200", description: "High-performance e-bike" },
    { id: 39, name: "Hoverboard", price: "$300", description: "Self-balancing hoverboard" },
    { id: 40, name: "3D Printer", price: "$1500", description: "Compact 3D printer" },
    { id: 41, name: "Air Purifier", price: "$200", description: "HEPA air purifier" },
    { id: 42, name: "Smart Doorbell", price: "$150", description: "Video-enabled doorbell" },
    { id: 43, name: "Electric Grill", price: "$200", description: "Non-stick electric grill" },
    { id: 44, name: "Stand Mixer", price: "$400", description: "Heavy-duty stand mixer" },
    { id: 45, name: "Juicer", price: "$150", description: "Cold press juicer" },
    { id: 46, name: "Electric Toothbrush", price: "$80", description: "Rechargeable toothbrush" },
    { id: 47, name: "Hair Dryer", price: "$60", description: "Ionic hair dryer" },
    { id: 48, name: "Shaver", price: "$100", description: "Electric rotary shaver" },
    { id: 49, name: "Iron", price: "$50", description: "Steam iron" },
    { id: 50, name: "Heater", price: "$150", description: "Portable room heater" },
    { id: 51, name: "Fan", price: "$80", description: "Energy-efficient ceiling fan" },
    { id: 52, name: "Dehumidifier", price: "$300", description: "Compact dehumidifier" },
    { id: 53, name: "Electric Blanket", price: "$120", description: "Heated blanket" },
    { id: 54, name: "Water Heater", price: "$250", description: "Tankless water heater" },
    { id: 55, name: "Smart Lock", price: "$200", description: "Keyless entry smart lock" }
];
const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search-input");

function renderProducts(products) {
    productList.innerHTML = ""; // Clear current products
    if (products.length === 0) {
        productList.innerHTML = "<p>No products found</p>";
    } else {
        products.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.className = "product";
            productDiv.innerHTML = `
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <strong>${product.price}</strong>
                <button class="buy-now-btn" onclick="buyNow(${product.id})">Buy Now</button>
            `;
            productList.appendChild(productDiv);
        });
    }
}

function searchProducts(query) {
    const lowerCaseQuery = query.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(lowerCaseQuery) ||
        product.description.toLowerCase().includes(lowerCaseQuery)
    );
    renderProducts(filteredProducts);
}

function buyNow(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        alert(`You have selected the ${product.name} for ${product.price}. Proceed to checkout!`);
    } else {
        alert("Product not found.");
    }
}

// Event listener for search input
searchInput.addEventListener("input", (event) => {
    searchProducts(event.target.value);
});

// Initial render
renderProducts(products);
