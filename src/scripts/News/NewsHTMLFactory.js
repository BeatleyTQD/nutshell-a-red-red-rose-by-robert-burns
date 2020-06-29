const newsConverter = (newsItem) => {
    const newsHTML = 
            `<div class="card text-center">
            <div class="card-header"></div>
            <div class="card-body">
                <h5 class="card-title">${newsItem.headline}</h5>
                <p class="card-text">${newsItem.synopsis}</p>
                <a href="#" class="btn purple-button">${newsItem.url}</a>
            </div>
            <div class="card-footer text-muted"></div>
            </div>
            <hr/>`
            return newsHTML
}

