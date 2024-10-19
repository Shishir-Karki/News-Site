import { subtleColors } from './constants.js';
import { countries } from './constants.js';

function changeBackgroundColor() {
    const randomColor = subtleColors[Math.floor(Math.random() * subtleColors.length)];
    document.body.style.backgroundColor = randomColor.color;
}

function populateLanguage(){
    const languageFilter = document.getElementById('language-filter');
    languageFilter.innerHTML = '';

    countries.forEach(country=>{
        const option = document.createElement('option')
        option.value = country.code.toLowerCase();
        option.textContent = `${country.language}`;
        languageFilter.appendChild(option);

    })
}

function showNews(data) {
    const newsContainer = document.querySelector('.news-container');
    newsContainer.innerHTML = ''; 

    if (!data|| data.length === 0) {
        const noNewsMessage = document.createElement('p');
        noNewsMessage.innerText = 'No news articles found. Please try another search.';
        newsContainer.appendChild(noNewsMessage);
        return;
    }

    data.forEach((newsItem) => {
        if (!newsItem.image) return; 

        const newsCard = document.createElement('div');
        newsCard.classList.add('card');

        const image = document.createElement('img');
        image.src = newsItem.image;
        image.alt = newsItem.title;

        const title = document.createElement('h2');
        title.innerText = newsItem.title;

        const author = document.createElement('p');
        author.innerText = `By: ${newsItem.source.name || 'Unknown Author'}`;

        const desc = document.createElement('p');
        author.innerText = newsItem.description;

        const published = document.createElement('p');
        const date = new Date(newsItem.publishedAt);
        published.innerText = `Published on: ${date.toLocaleDateString()}`;

        newsCard.appendChild(image);
        newsCard.appendChild(title);
        newsCard.appendChild(author);
        newsCard.appendChild(published);

        newsContainer.appendChild(newsCard);
    });
}

function loadNews() {
    const language = document.getElementById('language-filter').value;
    const sortBy = document.getElementById('sort-filter').value;
    const searchInput = document.querySelector('.search input').value || "latest"; 
    const fromDate = document.getElementById('from-date').value;
    const toDate = document.getElementById('to-date').value;

    let apiUrl = `https://gnews.io/api/v4/search?q=${searchInput}&lang=${language}&sortby=${sortBy}&token=796ab89a10e0aabd7d23f9c65a3e7ae7`;

    if (fromDate) apiUrl += `&from=${fromDate}`;
    if (toDate) apiUrl += `&to=${toDate}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then((data) => {
            if (data.articles) {
                showNews(data.articles);
                setupSearch(data.articles);
            } else {
                console.error("Unexpected response structure: ", data);
                showNews([]);
            }
        })
        .catch((error) => {
            console.error("Error fetching news: ", error);
        });
}

function setupSearch(articles) {
    const searchInput = document.querySelector('.search input');
    const searchInFilter = document.getElementById('search-in-filter');

    searchInput.addEventListener('input', function () {
        const query = searchInput.value.toLowerCase();
        const searchIn = searchInFilter.value;

        const filteredArticles = articles.filter(article => {
            if (searchIn === 'all') {
                return (
                    (article.title && article.title.toLowerCase().includes(query)) ||
                    (article.description && article.description.toLowerCase().includes(query)) ||
                    (article.content && article.content.toLowerCase().includes(query))
                );
            }
            return article[searchIn] && article[searchIn].toLowerCase().includes(query);
        });

        showNews(filteredArticles);
    });
}

window.onload = function() {
    changeBackgroundColor();
    populateLanguage();
    loadNews();
};


document.getElementById('language-filter').addEventListener('change', loadNews);
document.getElementById('sort-filter').addEventListener('change', loadNews);
document.getElementById('from-date').addEventListener('change', loadNews);
document.getElementById('to-date').addEventListener('change', loadNews);
