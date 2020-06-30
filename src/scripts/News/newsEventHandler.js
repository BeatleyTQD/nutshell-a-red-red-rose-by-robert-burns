import API from "../API.js"
import NewsTemplate from "../News/NewsTemplate.js"

const deleteNewsHandler = (id) => {
    API.deleteNews(id)
    .then(() => API.getNews())
    .then((response) =>{
        NewsTemplate(response)
    })
}

export default deleteNewsHandler