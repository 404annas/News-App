/*
const API_KEY = "acfec20727e04f14b172aa27e88b56ff";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load", () => fetchNews("Pakistan"));
async function fetchNews(query) {
  const response = await fetch(`${url}${query}&apiKey=${API_KEY}`);
  const data = await response.json();
  // console.log(data)

  const results = data.articles;
  console.log(results);

  bindData(data.articles);
}

function bindData(newsArticles) {
  const cardsContainer = document.getElementById("cards-container");
  const newsTemplate = document.getElementById("template-news-card");

  cardsContainer.innerHTML = "";

  newsArticles.forEach((article) => {
    if (!article.urlToImage) {
      return;
    }
    const cardClone = newsTemplate.content.cloneNode(true);
    fillDataCards(cardClone, article);
    cardsContainer.appendChild(cardClone);
  });
}

function fillDataCards(cardClone, article) {
  const newsImg = cardClone.querySelector("#news-image");
  const newsTitle = cardClone.querySelector("#news-title");
  const newsSource = cardClone.querySelector("#news-source");
  const newsDescription = cardClone.querySelector("#news-desc");

  newsImg.src = article.urlToImage;
  newsTitle.innerHTML = article.title;
  newsDescription.innerHTML = article.description;

  const date = new Date(article.publishedAt).toLocaleString("en-US");
  newsSource.innerHTML = `${article.source.name} | ${date}`;
  cardClone.firstElementChild.addEventListener("click", () => {
    window.open(article.url, "_blank");
  });
}

let currentSelectedNav = null;
function onNavItemClick(id) {
  fetchNews(id);
  const navItem = document.getElementById(id);
  currentSelectedNav?.classList.remove("active");
  currentSelectedNav = navItem;
  currentSelectedNav.classList.add("active");
}

const newsInput = document.querySelector(".news-input");
const searchBtn = document.querySelector(".search-button");
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!newsInput.value) {
    return;
  } else {
    fetchNews(newsInput.value);
    currentSelectedNav.classList.remove("active");
    currentSelectedNav = null;
  }
});
*/

// Code For Practice -->

const API_KEY = "acfec20727e04f14b172aa27e88b56ff";
const url = "https://newsapi.org/v2/everything?q=";

const myLogo = document.querySelector(".logo");
myLogo.addEventListener("click", function () {
  window.location.href = "index.html";
});

window.addEventListener("load", () => {
  fetchNews("Pakistan");
});

async function fetchNews(query) {
  const response = await fetch(`${url}${query}&apiKey=${API_KEY}`);
  const data = await response.json();
  // console.log(data)

  const results = data.articles;
  console.log(results);

  bindData(data.articles);
}

function bindData(newsArticles) {
  const cardsContainer = document.getElementById("cards-container");
  const cardsTemplate = document.getElementById("template-news-card");

  cardsContainer.innerHTML = "";

  newsArticles.forEach((article) => {
    if (!article.urlToImage) {
      return;
    }
    let card = cardsTemplate.content.cloneNode(true);
    setupCard(card, article);
    cardsContainer.appendChild(card);
  });
}

function setupCard(newsCard, newsArticle) {
  const newsImage = newsCard.querySelector("#news-image");
  const newsTitle = newsCard.querySelector("#news-title");
  const newsAuthor = newsCard.querySelector("#news-author");
  const newsDescription = newsCard.querySelector("#news-desc");
  const newsSource = newsCard.querySelector("#news-source");

  newsImage.src = newsArticle.urlToImage;
  newsTitle.innerHTML = newsArticle.title;
  newsAuthor.innerHTML = `By - ${newsArticle.author}`;
  newsDescription.innerHTML = newsArticle.description;
  newsSource.innerHTML =
    `Published` + "&nbsp;" + `- ${newsArticle.publishedAt.split("T")[0]}`;

  newsCard.firstElementChild.addEventListener("click", () => {
    window.open(newsArticle.url, "_blank");
  });
}

let currentSelectedNav = null;
function onNavItemClick(id) {
  fetchNews(id);
  const navItem = document.getElementById(id);
  currentSelectedNav?.classList.remove("active");
  currentSelectedNav = navItem;
  currentSelectedNav.classList.add("active");
}

const newsInput = document.querySelector(".news-input");
const searchBtn = document.querySelector(".search-button");
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!newsInput.value) {
    return;
  } else {
    fetchNews(newsInput.value);
    currentSelectedNav.classList.remove("active");
    currentSelectedNav = null;
  }
});
