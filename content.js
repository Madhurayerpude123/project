document.addEventListener("DOMContentLoaded", function() {
  const products = [
      { id: 1, name: "Leather Wallet", brand: "Brand A", price: "299", category: "Men's Accessories", image: "img\img1.png" },
      { id: 2, name: "Elegant Scarf", brand: "Brand B", price: "349", category: "Women's Accessories", image: "img\img1.png" },
      { id: 3, name: "Belt", brand: "Brand C", price: "150", category: "Men's Accessories", image: "img\img1.png" },
      { id: 4, name: "Handbag", brand: "Brand D", price: "999", category: "Women's Accessories", image: "handbag.png" },
      { id: 5, name: "Sunglasses", brand: "Brand E", price: "899", category: "Men's Accessories", image: "sunglasses.png" },
      { id: 6, name: "Hat", brand: "Brand F", price: "499", category: "Women's Accessories", image: "hat.png" }
  ];

  const container = document.getElementById('containerAccessories');

  products.forEach(product => {
      container.appendChild(createProductCard(product));
  });

  function createProductCard(product) {
      let boxDiv = document.createElement("div");
      boxDiv.className = "box";

      let imgTag = document.createElement("img");
      imgTag.src = `img/${product.image}`;

      let detailsDiv = document.createElement("div");
      detailsDiv.className = "details";

      let h3 = document.createElement("h3");
      h3.textContent = product.name;

      let h4 = document.createElement("h4");
      h4.textContent = product.brand;

      let h2 = document.createElement("h2");
      h2.textContent = `₹ ${product.price}`;

      boxDiv.appendChild(imgTag);
      boxDiv.appendChild(detailsDiv);
      detailsDiv.appendChild(h3);
      detailsDiv.appendChild(h4);
      detailsDiv.appendChild(h2);

      return boxDiv;
  }
});
