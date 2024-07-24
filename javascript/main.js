//pushes the articles to the html
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

if (document.querySelector('.popular-dishes .js-popular-items-container')) {
  document.querySelector('.popular-dishes .js-popular-items-container').innerHTML = articlesHTML;
}

//pushes the latest blog articles to html
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

if (document.querySelector('.latest-blog .js-popular-items-container')) {
  document.querySelector('.latest-blog .js-popular-items-container').innerHTML = latestblogHTML;
}

//blog posts articles 

// Displaying blog posts in the left_blog_container
let blogHTML = '';

blogPosts.forEach((blogs) => {
  blogHTML += `
    <div class="blogPost">
      <div class="blog-image">
        <img src="${blogs.image}" alt="">
      </div>
      <div class="date">
        <p>${blogs.date}</p>
      </div>
      <div class="blog-info">
        <a href="${blogs.articleLink}">${blogs.postName}</a>
        <p>${blogs.blogSnippet}</p>
        <p>${blogs.category}</p>
      </div>
    </div>
  `;
});

if (document.querySelector('.js-blog-container')) {
  document.querySelector('.js-blog-container').innerHTML = blogHTML;
}

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
              <img src="${special.image}" alt="${special.itemName}">
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
              <img src="${breakfast.image}" alt="${breakfast.itemName}">
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
              <img src="${lunch.image}" alt="${lunch.itemName}">
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
              <img src="${dinner.image}" alt="${dinner.itemName}">
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
  const activeLink = document.querySelector(`.menu-row-one ul li a[onclick="showMenu('${category}')"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }
}
