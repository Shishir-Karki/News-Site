import { subtleColors } from './constants.js';

function changeBackgroundColor() {
    // Pick a random color from the subtleColors array
    const randomColor = subtleColors[Math.floor(Math.random() * subtleColors.length)];
    document.body.style.backgroundColor = randomColor.color;
}

function showNews(data) {
    const newsContainer = document.querySelector('.news-container');
    newsContainer.innerHTML = ''; // Clear existing news

    if (!data || data.length === 0) {
        // Show a message if no news articles are found
        const noNewsMessage = document.createElement('p');
        noNewsMessage.innerText = 'No news articles found. Please try another search.';
        newsContainer.appendChild(noNewsMessage);
        return;
    }

    data.forEach((newsItem) => {
        if (!newsItem.urlToImage) return; // Skip if no image

        const newsCard = document.createElement('div');
        newsCard.classList.add('card');

        const image = document.createElement('img');
        image.src = newsItem.urlToImage;
        image.alt = newsItem.title;

        const title = document.createElement('h2');
        title.innerText = newsItem.title;

        const author = document.createElement('p');
        author.innerText = `By: ${newsItem.author || 'Unknown Author'}`;

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
    const searchInput = document.querySelector('.search input').value || "latest"; // Default to "latest" if no query is provided
    const fromDate = document.getElementById('from-date').value;
    const toDate = document.getElementById('to-date').value;

    let apiUrl = `https://newsapi.org/v2/everything?q=${searchInput}&sortBy=${sortBy}&language=${language}&apiKey=4f5e94183c6048708ae906964a3a8fa8`;

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
    loadNews();
};

// Event listeners for filters
document.getElementById('language-filter').addEventListener('change', loadNews);
document.getElementById('sort-filter').addEventListener('change', loadNews);
document.getElementById('from-date').addEventListener('change', loadNews);
document.getElementById('to-date').addEventListener('change', loadNews);
