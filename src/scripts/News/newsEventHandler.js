import API from "../API.js"
import data from "../main.js"
import NewsTemplate from "../News/NewsTemplate.js"
import newsFactory from "./newsFactory.js"

const deleteNewsHandler = (id) => {
    API.deleteNews(id)
    .then(() => API.getNews())
    .then((response) =>{
        NewsTemplate(response)
    })
}


const saveNewsHandler = () => {
    const newsTitleInput = document.querySelector("#title-news-input").value
    const newsSynopsisInpupt = document.querySelector("#synopsis-news-input").value
    const newsURLInput= document.querySelector("#url-news-input").value

    API.saveNews(newsFactory(newsTitleInput, newsSynopsisInpupt, newsURLInput))
    .then((response) => {
        data.events = response
        NewsTemplate(response)
    })
}

export {deleteNewsHandler, saveNewsHandler}