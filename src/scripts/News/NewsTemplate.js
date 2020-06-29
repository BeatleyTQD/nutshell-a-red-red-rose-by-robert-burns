//Module by Brandon W. Responsible for iterating through news data to generate HTML string with each entry as well as field for adding new news article.

export default function NewsTemplate(news){
        let NewsTemplate = document.querySelector(".bottom-section")
        NewsTemplate.innerHTML = ""
        news.forEach(newsObj => {
            NewsTemplate.innerHTML += newsConverter(newsObj)
    })
    NewsTemplate += newsInputField(news)
}

const newsConverter = (newsItem) => {
    const newsHTML = 
            `<div class="card text-center">
            <div class="card-header"></div>
            <div class="card-body">
                <h5 class="card-title">${newsItem.title}</h5>
                <p class="card-text">${newsItem.synopsis}</p>
                <a href="#" class="btn purple-button">${newsItem.url}</a>
            </div>
            <div class="card-footer text-muted"></div>
            </div>
            <hr/>`
            return newsHTML
}
    
const newsInputField = (obj) => {
    const html =
            `<!-- SECTION FOR CREATING NEW ARTICLE -->
            <section class="enter-new-article">
                <h3 class="mx-auto" style="width: 300px">Create A News Article</h3>
                <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Headline</span>
                </div>
                <input type="text" class="form-control user-text" aria-label="Default" aria-describedby="inputGroup-sizing-default">
                </div>
                <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Synopsis</span>
                </div>
                <input type="text" class="form-control user-text" aria-label="Default" aria-describedby="inputGroup-sizing-default">
                </div>
                <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">&nbsp;&nbsp;&nbsp;&nbsp;URL&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </div>
                <input type="text" class="form-control user-text" aria-label="Default" aria-describedby="inputGroup-sizing-default">
                </div>
                <button type="button" class="btn gray-button float-right">Submit</button>
                ${obj.userId == window.sessionStorage.activeUser ? `<button type="button" name=${obj.id} id="delete-news-btn">Delete</button>` : ""}
            </section>
            </section>
        `
        document.querySelector(".bottom-section").innerHTML += html
}