const blogArticles = [
  {
    image: 'images/popularitem1.jpg',
    title: 'delicious',
    description: 'lorem ipsum doreat do reme fas si',
    articleLink: '../blog/article1.html'
  },
  {
    image: 'images/popularitem2.jpg',
    title: 'orange cake',
    description: 'lorem ipsum doreat do reme fas si',
    articleLink: '../blog/vanillaCake.html'
  },
  {
    image: 'images/popularitem4.jpg',
    title: 'chocolate icecream',
    description: 'lorem ipsum doreat do reme fas si',
    articleLink: '../blog/chocolateicecrem.html'
  }
];

let articlesHTML = "";

blogArticles.forEach((article) => {
  articlesHTML += `
  <div class="popular-items">
          <div class="popular-image">
            <img src="${article.image}" alt="">
          </div>
          <div class="item-info">
            <h2 class="title">${article.title}</h2>
            <h2 class="description">${article.description}</h2>
            <a href="${article.articleLink}" target="_blank">Read more  <i class='bx bx-right-arrow-alt'></i></a>
          </div>
        </div>
  `;
});

document.querySelector('.js-popular-items-container').innerHTML = articlesHTML;

const latestBlogArticles = [
  {
    image: 'images/popularitem1.jpg',
    title: 'Delicious',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    articleLink: '../blog/article1.html'
  },
  {
    image: 'images/popularitem2.jpg',
    title: 'Orange Cake',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    articleLink: '../blog/vanillaCake.html'
  },
  {
    image: 'images/popularitem4.jpg',
    title: 'Chocolate Ice Cream',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    articleLink: '../blog/chocolateicecrem.html'
  }
];

let latestblogHTML = "";

latestBlogArticles.forEach((article) => {
  latestblogHTML += `
  <div class="popular-items">
          <div class="popular-image">
            <img src="${article.image}" alt="">
          </div>
          <div class="item-info">
            <h2 class="title">${article.title}</h2>
            <h2 class="description">${article.description}</h2>
            <a href="${article.articleLink}" target="_blank">Read more  <i class='bx bx-right-arrow-alt'></i></a>
          </div>
        </div>
  `;
});

document.querySelector('.latest-blog .js-popular-items-container').innerHTML = latestblogHTML;

// Special menu products
const specialProducts = [
  {
    image: 'images/specialfood1.jpg',
    itemName: 'cherry cake',
    itemDescription: 'lorem ipsun dokar sit',
    priceCents: 43
  },
  {
    image: 'images/specialfood2.jpg',
    itemName: 'strawberry cake',
    itemDescription: 'heaven on eart ipsum cherry',
    priceCents: 54
  },
  {
    image: 'images/speicalfood3.jpg',
    itemName: 'vanilla cake',
    itemDescription: 'lorem ipsun dokar sit ipsimslo',
    priceCents: 100
  },
  {
    image: 'images/specialfood4.jpg',
    itemName: 'strawberry cupcake',
    itemDescription: 'lorem ipsun dokar sit ipsimslo',
    priceCents: 32
  }
];

// Breakfast menu products
const breakfastProducts = [
  {
    image: 'images/breakfast1.jpg',
    itemName: 'croissant and cafe',
    itemDescription: 'lorem ipsun dokar sit',
    priceCents: 43
  },
  {
    image: 'images/breakfast2.jpg',
    itemName: '2 coffees special',
    itemDescription: 'heaven on eart ipsum cherry',
    priceCents: 54
  },
  {
    image: 'images/breakfast3.jpg',
    itemName: 'cookie and coffee',
    itemDescription: 'lorem ipsun dokar sit ipsimslo',
    priceCents: 100
  },
  {
    image: 'images/breakfast4.jpg',
    itemName: 'slice cake and coffee',
    itemDescription: 'lorem ipsun dokar sit ipsimslo',
    priceCents: 32
  }
];

// Dinner menu products
const dinnerProducts = [
  {
    image: 'images/dinner1.jpg',
    itemName: 'lemon cake',
    itemDescription: 'lorem ipsun dokar sit',
    priceCents: 43
  },
  {
    image: 'images/dinner2.jpg',
    itemName: 'circle cake',
    itemDescription: 'heaven on eart ipsum cherry',
    priceCents: 54
  },
  {
    image: 'images/dinner3.jpg',
    itemName: 'strawberry pie cake',
    itemDescription: 'lorem ipsun dokar sit ipsimslo',
    priceCents: 100
  },
  {
    image: 'images/dinner4.jpg',
    itemName: 'croissant',
    itemDescription: 'lorem ipsun dokar sit ipsimslo',
    priceCents: 32
  }
];

// Lunch menu products
const lunchProducts = [
  {
    image: 'images/lunch1.jpg',
    itemName: 'waffle and cream',
    itemDescription: 'lorem ipsun dokar sit',
    priceCents: 43
  },
  {
    image: 'images/lunch2.jpg',
    itemName: 'waffle and fruit',
    itemDescription: 'heaven on eart ipsum cherry',
    priceCents: 54
  },
  {
    image: 'images/lunch3.jpg',
    itemName: 'pancake with strawberry',
    itemDescription: 'lorem ipsun dokar sit ipsimslo',
    priceCents: 100
  },
  {
    image: 'images/lunch4.jpg',
    itemName: 'bread and berries',
    itemDescription: 'lorem ipsun dokar sit ipsimslo',
    priceCents: 32
  }
];

// Function to show menu items
function showMenu(category) {
  const menuItemsContainer = document.getElementById('menu-items-container');
  let menuItemsHTML = '';

  switch (category) {
    case 'special':
      specialProducts.forEach((special) => {
        menuItemsHTML += `
          <div class="menu-items">
            <div class="menu-image">
              <img src="${special.image}">
            </div>
            <div class="menu-info">
              <h2>${special.itemName}</h2>
              <p>${special.itemDescription}</p>
              <span>R:${special.priceCents}</span>
            </div>
          </div>`;
      });
      break;
    case 'breakfast':
      breakfastProducts.forEach((breakfast) => {
        menuItemsHTML += `
          <div class="menu-items">
            <div class="menu-image">
              <img src="${breakfast.image}">
            </div>
            <div class="menu-info">
              <h2>${breakfast.itemName}</h2>
              <p>${breakfast.itemDescription}</p>
              <span>R:${breakfast.priceCents}</span>
            </div>
          </div>`;
      });
      break;
    case 'lunch':
      lunchProducts.forEach((lunch) => {
        menuItemsHTML += `
          <div class="menu-items">
            <div class="menu-image">
              <img src="${lunch.image}">
            </div>
            <div class="menu-info">
              <h2>${lunch.itemName}</h2>
              <p>${lunch.itemDescription}</p>
              <span>R:${lunch.priceCents}</span>
            </div>
          </div>`;
      });
      break;
    case 'dinner':
      dinnerProducts.forEach((dinner) => {
        menuItemsHTML += `
          <div class="menu-items">
            <div class="menu-image">
              <img src="${dinner.image}">
            </div>
            <div class="menu-info">
              <h2>${dinner.itemName}</h2>
              <p>${dinner.itemDescription}</p>
              <span>R:${dinner.priceCents}</span>
            </div>
          </div>`;
      });
      break;
    default:
      return;
  }

  //pushing it to html
  menuItemsContainer.innerHTML = menuItemsHTML;

  // Remove active class from links
  const menuLinks = document.querySelectorAll('.menu-row-one ul li a');
  menuLinks.forEach(link => link.classList.remove('active'));

  // Add active class to the clicked link
  const activeLink = document.querySelector(`.menu-row-one ul li a[href="#"][onclick="showMenu('${category}']"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }
}


