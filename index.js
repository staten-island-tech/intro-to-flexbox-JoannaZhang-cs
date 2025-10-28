const DOMSelectors = {
  name: document.getElementById("name"),
  price: document.getElementById("price"),
  src: document.getElementById("src"),
  brand: document.getElementById("brand"),
  display: document.querySelector(".container"),
};

const rackets = [
  {
    id: 1,
    name: "Wilson Pro Staff",
    price: 79,
    inStock: true,
    brand: "Wilson",
    src: "https://www.wilson.com/en-us/tennis/tennis-rackets/media_1f64860413082850951fe50dfb684746385dc6863.jpg?width=750&format=jpg&optimize=medium",
    alt: "Wilson Pro Staff",
  },

  {
    id: 2,
    name: "Wilson Blade",
    price: 49,
    inStock: true,
    brand: "Wilson",
    src: "https://img.tennis-warehouse.com/watermark/rs.php?path=WBPRO6-1.jpg&nw=455",
    alt: "Wilson Blade",
  },

  {
    id: 3,
    name: "Wilson Clash",
    price: 49,
    inStock: true,
    brand: "Wilson",
    src: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSqSPlHT8Gj8GBXnwhEb4C89UZGRzWXoDWg9PF-YGtPIPi7BqLia9i3SXgOSvBDg3Hv7u8eoxcD7_-VqRSX1kaYKh-UlvgdtWEzGAlLrcxRihIjWp98czLKkw",
    alt: "Wilson Clash",
  },

  {
    id: 4,
    name: "Wilson Ultra",
    price: 49,
    inStock: true,
    brand: "Wilson",
    src: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSOpUq0s-DgDZNGj-p19GNiZl7YwuQg94YPR3kl05k3_XUY2kkDoHW4HTKeSPwUONo_evpomynvY72nDgoteJsSCS-Vawljm9AgBPJZbl1PXnf4YnCIFLlU",
    alt: "Wilson Ultra",
  },

  {
    id: 5,
    name: "Babolat Pure Aero",
    price: 59,
    inStock: true,
    brand: "Babolot",
    src: "https://tennisexpress.com/cdn/shop/files/B101499-370-x.jpg?v=1752851049&width=1220",
    alt: "Babolat Pure Aero",
  },

  {
    id: 6,
    name: "Babolat Pure Drive",
    price: 59,
    inStock: true,
    brand: "Babolot",
    src: "https://tse3.mm.bing.net/th/id/OIP.xzRQubpnNOIpMbKdyBxbjwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    alt: "Babolat Pure Drive",
  },

  {
    id: 7,
    name: "Babolot Pure Strike",
    price: 59,
    inStock: true,
    brand: "Babolot",
    src: "https://img.tennis-warehouse.com/watermark/rs.php?path=PS1620-1.jpg&nw=455",
    alt: "Babolat Pure Strike",
  },

  {
    id: 8,
    name: "Babolot Boost",
    price: 39,
    inStock: true,
    brand: "Babolot",
    src: "https://img.tennis-warehouse.com/watermark/rs.php?path=BABOAP-1.jpg&nw=455",
    alt: "Babolat Boost",
  },

  {
    id: 9,
    name: "Yonex Ezone",
    price: 59,
    inStock: true,
    brand: "Yonex",
    src: "https://tse3.mm.bing.net/th/id/OIP.xzRQubpnNOIpMbKdyBxbjwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    alt: "Yonex Ezone",
  },

  {
    id: 10,
    name: "Yonex VCore",
    price: 59,
    inStock: true,
    brand: "Yonex",
    src: "https://img.tennis-warehouse.com/watermark/rs.php?path=VCR100-1.jpg&nw=455",
    alt: "Yonex Vcore",
  },

  {
    id: 11,
    name: "Yonex Astrel",
    price: 49,
    inStock: true,
    brand: "Yonex",
    src: "https://thetennisshoponline.com/wp-content/uploads/2024/01/yonex-astrel-105-web.jpg",
    alt: "Yonex Astrel",
  },

  {
    id: 12,
    name: "Yonex Percept",
    price: 49,
    inStock: true,
    brand: "Yonex",
    src: "https://img.tennis-warehouse.com/watermark/rs.php?path=PERC-1.jpg&nw=540",
    alt: "Yonex Percept",
  },

  {
    id: 13,
    name: "Dunlop FX 500",
    price: 49,
    inStock: true,
    brand: "Dunlop",
    src: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSN7_q99lcvOBgmZf6PiicAka-V9sVDta9-PkJ5PuCbgZMmXswRqsr7Z_vW9EKUIMYrODntlX6nZry0rfFXEGl_vb4DdaeebJmNrLrb6JuDrDOHDwzUBxeJ",
    alt: "Dunlop FX 500",
  },

  {
    id: 14,
    name: "Dunlop SX 300",
    price: 49,
    inStock: true,
    brand: "Dunlop",
    src: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ9MEwbmzHPuc4NyWEpNaIBgjRjIurEI75SYDcEemIOmCAPIaDYdTXV8eE-TEJ7E-DLQOXA53Cayw1fC_EPBmmQrE1vNboPF1M-mRp67fihI3VjzKcuTfssaw",
    alt: "Dunlop SX 300",
  },

  {
    id: 15,
    name: "Dunlop CX 400",
    price: 49,
    inStock: true,
    brand: "Dunlop",
    src: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSeVuePyp6K1m1badCq-Oaa7wq2Rq-J6c9smvBzhDvjHu9qvznNNqiWpTxhmSrPfLXJvXY5us3J9jYxUo2rtU3Roi37t785cTzpFE49L7IlsmEi7yBBdUfZbg",
    alt: "Dunlop FX 500",
  },

  {
    id: 16,
    name: "Dunlop LX 1000",
    price: 49,
    inStock: true,
    brand: "Dunlop",
    src: "https://img.tennis-warehouse.com/watermark/rs.php?path=LX1000-1.jpg&nw=455",
    alt: "Dunlop LX 1000",
  },

  {
    id: 17,
    name: "Head Speed",
    price: 69,
    inStock: true,
    brand: "Head",
    src: "https://img.tennis-warehouse.com/watermark/rs.php?path=HSPDML-1.jpg&nw=455",
    alt: "Head Speed",
  },
  {
    id: 18,
    name: "Head Extreme",
    price: 49,
    inStock: true,
    brand: "Head",
    src: "https://img.tennis-warehouse.com/watermark/rs.php?path=HREM24-1.jpg&nw=455",
    alt: "Head Extreme",
  },
  {
    id: 19,
    name: "Head Radical",
    price: 49,
    inStock: true,
    brand: "Head",
    src: "https://img.tennis-warehouse.com/watermark/rs.php?path=XCEEDR-1.jpg&nw=455",
    alt: "Head Radical",
  },
  {
    id: 20,
    name: "Head Gravity",
    price: 49,
    inStock: true,
    brand: "Head",
    src: "https://img.tennis-warehouse.com/watermark/rs.php?path=HGMPG-1.jpg&nw=455",
    alt: "Head Gravity",
  },
];

rackets.forEach((rackets) => inject(rackets));
createFilterButtons();

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault(); // stops page from refreshing
  let racket = {
    title: document.getElementById("title").value,
    artist: document.getElementById("artist").value,
    url: document.getElementById("url").value,
  };
  inject(racket); // add to the page
  clearFields(); // reset form inputs
});

function inject(racket) {
  DOMSelectors.display.insertAdjacentHTML(
    "afterbegin",
    `<div class="card" data-type="${racket.brand}">
    <img class="display-src" src="${racket.src}"/>
    <h2 class="display-brand">${racket.brand}</h2>
    <h3 class="display-album">${racket.name}</h3>
    <h5 class="price">$${racket.price}</h5>
    <button class="buy-btn">Buy Now</button>
    <button class="remove btn">Remove</button>
    </div>`
  );
}

// <div class="filters">
//   <button data-brand="all" class="active">
//     All
//   </button>
//   <button data-brand="Dunlop">Wilson</button>
//   <button data-brand="Babolot">Wilson</button>
//   <button data-brand="Yonex">Wilson</button>
//   <button data-brand="Wilson">Wilson</button>
//   <button data-brand="Head">Wilson</button>
// </div>;

rackets.forEach((racket) => inject(racket));

function createFilterButtons() {
  const filters = document.querySelector(".filters");
  const brands = Array.from(new Set(rackets.map((r) => r.brand))); // unique brands

  // Add "All" button first
  const allBtn = document.createElement("button");
  allBtn.textContent = "All";
  allBtn.dataset.brand = "all";
  allBtn.classList.add("active");
  filters.appendChild(allBtn);

  // Create one button per brand
  brands.forEach((brand) => {
    const btn = document.createElement("button");
    btn.textContent = brand;
    btn.dataset.brand = brand;
    filters.appendChild(btn);
  });

  // Handle clicks on buttons
  filters.addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON") return;

    // toggle active styling
    filters
      .querySelectorAll("button")
      .forEach((b) => b.classList.remove("active"));
    e.target.classList.add("active");

    const brand = e.target.dataset.brand;
    filterByBrand(brand);
  });
}

function filterByBrand(brand) {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const cardBrand = card.getAttribute("data-type");
    console.log(cardBrand);
    if (brand === "all" || cardBrand === brand) {
      // if (brand === "all" || cardBrand === brand) {
      // card.style.display = "block";
      card.style.display = ""; //contextual: could be ""(string), "block", "flex"
    } else {
      card.style.display = "none";
    }
  });
}
// filterByBrand("Yonex");

const cart = [];
function createCartObject(racket) {
  const cartProduct = { ...racket, quantity: 1 };
  return cartProduct;
  //... is "spread operator". copies all elements of the proudct without rewriting it
}

function checkCart(prod) {
  if (!prod) {
    return;
  }
  //create cart object here
  const cartProduct = { ...prod, quantity: 1 };
  const found = cart.find((cartItem) => cartItem === cartProduct.title);
  if (found) {
    found.quantity += 1;
  } else {
    cart.push(prod);
  }
}
checkCart(prod);
checkCart(prod);
console.log(cart);
