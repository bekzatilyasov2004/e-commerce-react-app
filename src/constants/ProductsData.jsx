const ProductsData = [
  {
    id: 1,
    img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    name: 'Fjallraven - Foldsack No. 1 Backpack',
    p: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 in...',
    price: 120.99,
    category: "Men's Clothing"
  },
  {
    id: 2,
    img: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    name: 'Mens Casual Premium Slim Fit T-Shirts',
    p: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket...',
    price: 80.50,
    category: "Men's Clothing"
  },
  {
    id: 3,
    img: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    name: 'Mens Cotton Jacket',
    p: 'Great outerwear jackets for spring/autumn/winter, suitable for many occasions...',
    price: 150.00,
    category: "Men's Clothing"
  },
  {
    id: 4,
    img: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    name: 'Mens Casual Slim Fit',
    p: 'The color could be slightly different between on the screen and in practice...',
    price: 50.99,
    category: "Men's Clothing"
  },
  {
    id: 5,
    img: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    name: 'John Hardy Women\'s Legends Naga Gold & Silver Dragon Station Chain Bracelet',
    p: 'From our Legends Collection, the Naga was inspired by the mythical water dragon...',
    price: 200.50,
    category: 'Jewelery'
  },
  {
    id: 6,
    img: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    name: 'Solid Gold Petite Micropave ',
    p: 'Satisfaction Guaranteed. Return or exchange any order within 30 days...',
    price: 70.95,
    category: 'Jewelery'
  },
  {
    id: 7,
    img: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    name: 'White Gold Plated Princess',
    p: 'Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her...',
    price: 150.00,
    category: 'Jewelery'
  },
  {
    id: 8,
    img: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    name: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
    p: 'Rose Gold Plated Double Flared Tunnel Plug Earrings...',
    price: 40.50,
    category: 'Jewelery'
  },
  {
    id: 9,
    img: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    name: 'WD 2TB Elements Portable External Hard Drive',
    p: 'USB 3.0 and USB 2.0 Compatibility, Fast data transfers...',
    price: 80.99,
    category: 'Electronics'
  },
  {
    id: 10,
    img: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    name: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
    p: 'Easy upgrade for faster boot-up, shutdown, application load and response...',
    price: 110.00,
    category: 'Electronics'
  },
  {
    id: 11,
    img: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    name: 'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',
    p: '3D NAND flash are applied to deliver high transfer speeds...',
    price: 100.00,
    category: 'Electronics'
  },
  {
    id: 12,
    img: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    name: 'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive',
    p: 'Expand your PS4 gaming experience, Play anywhere...',
    price: 120.95,
    category: 'Electronics'
  },
  {
    id: 13,
    img: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    name: 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
    p: '21.5 inches Full HD (1920 x 1080) widescreen IPS display...',
    price: 180.95,
    category: 'Electronics'
  },
  {
    id: 14,
    img: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    name: 'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor',
    p: '49-Inch Super Ultrawide Aspect Ratio Curved Gaming Monitor...',
    price: 800.95,
    category: 'Electronics'
  },
  {
    id: 15,
    img: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    name: 'Opna Women\'s Short Sleeve Moisture',
    p: 'Lightweight, comfortable, moisture-wicking fabric...',
    price: 30.00,
    category: "Women's Clothing"
  },
  {
    id: 16,
    img: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    name: 'DANVOUY Women\'s T Shirt Casual Cotton Short',
    p: 'Casual t-shirt perfect for everyday wear, 100% cotton...',
    price: 25.00,
    category: "Women's Clothing"
  },
  {
    id: 17,
    img: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    name: 'Lock and Love Women\'s Removable Hooded Faux Leather Moto Biker Jacket',
    p: 'Removable hood, zipper closure, faux leather material...',
    price: 100.00,
    category: "Women's Clothing"
  },
  {
    id: 18,
    img: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    name: 'MBJ Women\'s Solid Short Sleeve Boat Neck V ',
    p: 'Perfect t-shirt for casual wear, soft and comfortable...',
    price: 20.00,
    category: "Women's Clothing"
  },
  {
    id: 19,
    img: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    name: 'BIYLACLESEN Women\'s 3-in-1 Snowboard Jacket Winter Coats',
    p: 'Durable and waterproof coat, suitable for winter sports...',
    price: 150.00,
    category: "Women's Clothing"
  },
  {
    id: 20,
    img: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    name: 'Rain Jacket Women Windbreaker Striped Climbing Raincoats',
    p: 'Lightweight waterproof jacket, perfect for outdoor activities...',
    price: 120.00,
    category: "Women's Clothing"
  }
];

export default ProductsData;
