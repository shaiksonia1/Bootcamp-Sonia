export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  stock: number;
  image: string;
}

export const products: Product[] = [
  
    {
      "id": "1",
      "name": "Premium Wireless Headphones",
      "price": 299.99,
      "description": "High-quality wireless headphones with noise cancellation and premium sound quality.",
      "stock": 50,
      "image": "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?q=80&w=1626&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": "2",
      "name": "Smart Watch Pro",
      "price": 399.99,
      "description": "Advanced smartwatch with health tracking and seamless connectivity.",
      "stock": 30,
      "image": "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80"
    },
    {
      "id": "3",
      "name": "Ultra HD Camera",
      "price": 899.99,
      "description": "Professional-grade camera with 4K video capabilities and advanced features.",
      "stock": 15,
      "image": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80"
    },
    {
      "id": "4",
      "name": "Portable Power Bank",
      "price": 49.99,
      "description": "High-capacity power bank for all your charging needs on the go.",
      "stock": 100,
      "image": "https://images.unsplash.com/photo-1706275399494-fb26bbc5da63?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": "5",
      "name": "Smart Watch Pro (Alt Version)",
      "price": 399.99,
      "description": "Advanced smartwatch with health tracking and seamless connectivity.",
      "stock": 30,
      "image": "https://images.pexels.com/photos/3783206/pexels-photo-3783206.jpeg?auto=compress&cs=tinysrgb&h=500"
    },
    {
      "id": "6",
      "name": "Ultra HD Camera (Alt Version)",
      "price": 899.99,
      "description": "Professional-grade camera with 4K video capabilities and advanced features.",
      "stock": 15,
      "image": "https://images.pexels.com/photos/1530729/pexels-photo-1530729.jpeg?auto=compress&cs=tinysrgb&h=500"
    },
    {
      "id": "7",
      "name": "Portable Power Bank (Alt Version)",
      "price": 49.99,
      "description": "High-capacity power bank for all your charging needs on the go.",
      "stock": 100,
      "image": "https://images.pexels.com/photos/4147057/pexels-photo-4147057.jpeg?auto=compress&cs=tinysrgb&h=500"
    },
    {
      "id": "8",
      "name": "Laptop Sleeve",
      "price": 29.99,
      "description": "Stylish and durable laptop sleeve to protect your device.",
      "stock": 150,
      "image": "https://images.pexels.com/photos/1451672/pexels-photo-1451672.jpeg?auto=compress&cs=tinysrgb&h=500"
    },
    {
      "id": "9",
      "name": "LED Desk Lamp",
      "price": 35.99,
      "description": "Adjustable LED desk lamp with multiple brightness levels for any workspace.",
      "stock": 80,
      "image": "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&h=500"
    },
    {
      "id": "10",
      "name": "Smartphone Stand",
      "price": 15.99,
      "description": "Ergonomic phone stand to hold your device at the perfect angle.",
      "stock": 120,
      "image": "https://images.pexels.com/photos/6135790/pexels-photo-6135790.jpeg?auto=compress&cs=tinysrgb&h=500"
    },
    {
      "id": "11",
      "name": "Wireless Earbuds Max",
      "price": 149.99,
      "description": "Premium wireless earbuds with noise cancellation and long battery life.",
      "stock": 60,
      "image": "https://images.unsplash.com/photo-1605733514002-1954c7c24b37?w=500&q=80"
    },
    {
      "id": "12",
      "name": "Gaming Mechanical Keyboard",
      "price": 129.99,
      "description": "RGB backlit mechanical keyboard with customizable switches for gamers.",
      "stock": 40,
      "image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80"
    },
    {
      "id": "13",
      "name": "Smart Home Speaker",
      "price": 99.99,
      "description": "Voice-controlled smart speaker with superior sound quality and AI assistant.",
      "stock": 75,
      "image": "https://images.unsplash.com/photo-1585237011951-93421159c3b4?w=500&q=80"
    },
    {
      "id": "14",
      "name": "Wireless Charging Pad",
      "price": 39.99,
      "description": "Fast wireless charging pad compatible with multiple devices.",
      "stock": 110,
      "image": "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=500&q=80"
    },
    {
      "id": "15",
      "name": "Bluetooth Soundbar",
      "price": 179.99,
      "description": "Sleek Bluetooth soundbar with deep bass and immersive sound experience.",
      "stock": 35,
      "image": "https://images.unsplash.com/photo-1603899125880-67402484ec30?w=500&q=80"
    },
    {
      "id": "16",
      "name": "Smart Light Bulbs",
      "price": 24.99,
      "description": "Energy-efficient smart bulbs with customizable colors and app control.",
      "stock": 200,
      "image": "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&q=80"
    },
    {
      "id": "17",
      "name": "Ergonomic Office Chair",
      "price": 249.99,
      "description": "Comfortable ergonomic chair with lumbar support for long working hours.",
      "stock": 25,
      "image": "https://images.unsplash.com/photo-1624382399019-412091455a23?w=500&q=80"
    },
    {
      "id": "18",
      "name": "Portable Mini Projector",
      "price": 199.99,
      "description": "Compact and powerful mini projector with HD resolution.",
      "stock": 50,
      "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80"
    },
    {
      "id": "19",
      "name": "Smart Fitness Tracker",
      "price": 79.99,
      "description": "Wearable fitness tracker with heart rate monitoring and step tracking.",
      "stock": 90,
      "image": "https://images.unsplash.com/photo-1577859187318-3b5df1b0eab0?w=500&q=80"
    },
    {
      "id": "20",
      "name": "USB-C Docking Station",
      "price": 89.99,
      "description": "Multi-port docking station for laptops and tablets.",
      "stock": 70,
      "image": "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b57?w=500&q=80"
    },
    {
      "id": "21",
      "name": "Wireless Earbuds Pro",
      "price": 149.99,
      "description": "Premium wireless earbuds with noise cancellation and long battery life.",
      "stock": 60,
      "image": "https://images.unsplash.com/photo-1605733514002-1954c7c24b37?w=500&q=80"
    },
    {
      "id": "22",
      "name": "RGB Gaming Keyboard",
      "price": 129.99,
      "description": "RGB backlit mechanical keyboard with customizable switches for gamers.",
      "stock": 40,
      "image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80"
    },
    {
      "id": "23",
      "name": "AI Smart Speaker",
      "price": 99.99,
      "description": "Voice-controlled smart speaker with superior sound quality and AI assistant.",
      "stock": 75,
      "image": "https://images.unsplash.com/photo-1585237011951-93421159c3b4?w=500&q=80"
    },
    {
      "id": "24",
      "name": "Fast Wireless Charger",
      "price": 39.99,
      "description": "Fast wireless charging pad compatible with multiple devices.",
      "stock": 110,
      "image": "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=500&q=80"
    },
    {
      "id": "25",
      "name": "Dolby Soundbar",
      "price": 179.99,
      "description": "Sleek Bluetooth soundbar with deep bass and immersive sound experience.",
      "stock": 35,
      "image": "https://images.unsplash.com/photo-1603899125880-67402484ec30?w=500&q=80"
    },
    {
      "id": "26",
      "name": "Smart LED Bulbs",
      "price": 24.99,
      "description": "Energy-efficient smart bulbs with customizable colors and app control.",
      "stock": 200,
      "image": "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&q=80"
    },
    {
      "id": "27",
      "name": "Luxury Office Chair",
      "price": 249.99,
      "description": "Comfortable ergonomic chair with lumbar support for long working hours.",
      "stock": 25,
      "image": "https://images.unsplash.com/photo-1624382399019-412091455a23?w=500&q=80"
    },
    {
      "id": "28",
      "name": "HD Mini Projector",
      "price": 199.99,
      "description": "Compact and powerful mini projector with HD resolution.",
      "stock": 50,
      "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80"
    },
    {
      "id": "29",
      "name": "Advanced Fitness Tracker",
      "price": 79.99,
      "description": "Wearable fitness tracker with heart rate monitoring and step tracking.",
      "stock": 90,
      "image": "https://images.unsplash.com/photo-1577859187318-3b5df1b0eab0?w=500&q=80"
    },
    {
      "id": "30",
      "name": "Multi-Port Docking Station",
      "price": 89.99,
      "description": "Multi-port docking station for laptops and tablets.",
      "stock": 70,
      "image": "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b57?w=500&q=80"
    },
    {
      "id": "31",
      "name": "Wireless Gaming Headset",
      "price": 159.99,
      "description": "High-quality wireless gaming headset with surround sound and noise-canceling mic.",
      "stock": 50,
      "image": "https://images.unsplash.com/photo-1580716461938-7c3000ff0a7a?w=500&q=80"
    },
    {
      "id": "32",
      "name": "Mechanical Keyboard Pro",
      "price": 139.99,
      "description": "Premium mechanical keyboard with customizable RGB lighting and tactile switches.",
      "stock": 35,
      "image": "https://images.unsplash.com/photo-1572954226521-39b0a9aaa8cf?w=500&q=80"
    },
    {
      "id": "33",
      "name": "Smart Home Assistant",
      "price": 109.99,
      "description": "AI-powered smart assistant for controlling home devices with voice commands.",
      "stock": 60,
      "image": "https://images.unsplash.com/photo-1593336793171-1a141e04e9f3?w=500&q=80"
    },
    {
      "id": "34",
      "name": "Ultra Slim Power Bank",
      "price": 49.99,
      "description": "High-capacity fast-charging power bank with ultra-slim design.",
      "stock": 120,
      "image": "https://images.unsplash.com/photo-1571348500628-4599be84a9e1?w=500&q=80"
    },
    {
      "id": "35",
      "name": "4K Streaming Stick",
      "price": 79.99,
      "description": "Portable 4K streaming device with smart TV features and voice remote.",
      "stock": 90,
      "image": "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=500&q=80"
    },
    {
      "id": "36",
      "name": "Wireless Charging Stand",
      "price": 29.99,
      "description": "Fast wireless charging stand compatible with multiple devices.",
      "stock": 150,
      "image": "https://images.unsplash.com/photo-1574176368500-06dfb4a3c43d?w=500&q=80"
    },
    {
      "id": "37",
      "name": "Smart LED Light Strip",
      "price": 34.99,
      "description": "Customizable RGB LED light strip with app control and voice integration.",
      "stock": 200,
      "image": "https://images.unsplash.com/photo-1604079628048-944ca9a3bce5?w=500&q=80"
    },
    {
      "id": "38",
      "name": "Ergonomic Office Desk",
      "price": 299.99,
      "description": "Adjustable ergonomic office desk with modern design.",
      "stock": 20,
      "image": "https://images.unsplash.com/photo-1589820296156-f3d107d3a12e?w=500&q=80"
    },
    {
      "id": "39",
      "name": "Compact HD Projector",
      "price": 219.99,
      "description": "Compact portable projector with HD resolution and wireless connectivity.",
      "stock": 40,
      "image": "https://images.unsplash.com/photo-1585389900023-84e0fcaf72e0?w=500&q=80"
    },
    {
      "id": "40",
      "name": "Smart Fitness Band",
      "price": 89.99,
      "description": "Advanced fitness band with heart rate and sleep tracking.",
      "stock": 85,
      "image": "https://images.unsplash.com/photo-1596652784996-6c04f5a3f85e?w=500&q=80"
    },
    {
      "id": "41",
      "name": "Professional Studio Microphone",
      "price": 129.99,
      "description": "High-quality studio microphone for streaming and podcasting.",
      "stock": 45,
      "image": "https://images.unsplash.com/photo-1588346986083-57d3e08c6632?w=500&q=80"
    },
    {
      "id": "42",
      "name": "Smart Security Camera",
      "price": 149.99,
      "description": "Wireless security camera with night vision and motion detection.",
      "stock": 55,
      "image": "https://images.unsplash.com/photo-1565061031513-9f0ea6c1a223?w=500&q=80"
    },
    {
      "id": "43",
      "name": "Noise Cancelling Headphones",
      "price": 179.99,
      "description": "Premium noise-canceling headphones with immersive sound quality.",
      "stock": 70,
      "image": "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=500&q=80"
    },
    {
      "id": "44",
      "name": "Gaming Mouse Pro",
      "price": 59.99,
      "description": "Ergonomic gaming mouse with customizable DPI settings.",
      "stock": 130,
      "image": "https://images.unsplash.com/photo-1545095291-99910d837971?w=500&q=80"
    },
    {
      "id": "45",
      "name": "Smart Digital Notebook",
      "price": 199.99,
      "description": "Electronic smart notebook with cloud sync and handwriting recognition.",
      "stock": 30,
      "image": "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=500&q=80"
    },
    {
      "id": "46",
      "name": "Home Theater System",
      "price": 499.99,
      "description": "Powerful home theater system with surround sound and Bluetooth connectivity.",
      "stock": 15,
      "image": "https://images.unsplash.com/photo-1546901043-46d48f9a7d4d?w=500&q=80"
    },
    {
      "id": "47",
      "name": "4K Ultra HD Monitor",
      "price": 349.99,
      "description": "High-resolution 4K Ultra HD monitor with stunning color accuracy.",
      "stock": 25,
      "image": "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=500&q=80"
    },
    {
      "id": "48",
      "name": "Electric Standing Desk",
      "price": 399.99,
      "description": "Height-adjustable electric standing desk for ergonomic workspace.",
      "stock": 20,
      "image": "https://images.unsplash.com/photo-1604328698692-8890edc926ca?w=500&q=80"
    },
    {
      "id": "49",
      "name": "Smart Coffee Maker",
      "price": 89.99,
      "description": "WiFi-enabled smart coffee maker with customizable brewing options.",
      "stock": 80,
      "image": "https://images.unsplash.com/photo-1571367033586-6716db059f42?w=500&q=80"
    },
    {
      "id": "50",
      "name": "Wireless Sound System",
      "price": 229.99,
      "description": "Multi-room wireless sound system with deep bass and crisp audio.",
      "stock": 40,
      "image": "https://images.unsplash.com/photo-1508898578281-774ac4893e2e?w=500&q=80"
    },
    {
      "id": "51",
      "name": "Wireless Sound System",
      "price": 229.99,
      "description": "Multi-room wireless sound system with deep bass and crisp audio.",
      "stock": 40,
      "image": "https://images.unsplash.com/photo-1508898578281-774ac4893e2e?w=500&q=80"
    },
    {
      "id": "52",
      "name": "Wireless Sound System",
      "price": 229.99,
      "description": "Multi-room wireless sound system with deep bass and crisp audio.",
      "stock": 40,
      "image": "https://images.unsplash.com/photo-1508898578281-774ac4893e2e?w=500&q=80"
    },

  ];
  

export const getProducts = async (): Promise<Product[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return products;
};

export const getProduct = async (id: string): Promise<Product | null> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return products.find(p => p.id === id) || null;
};