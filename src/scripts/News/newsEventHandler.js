//Module by Brandon W. Responsible for creating the delete and save functionality for the news portion of the application.
import API from "../API.js"
import data from "../main.js"
import NewsTemplate from "../News/NewsTemplate.js"
import newsFactory from "./newsFactory.js"

const deleteNewsHandler = (id) => {
    //deletes selected news item and then fetches and displays updated data set
    API.deleteNews(id)
    .then(() => API.getNews())
    .then((response) =>{
        NewsTemplate(response)
    })
}


const saveNewsHandler = () => {
    //Obtains and stores user submitted data into variables to be passed into the news factory function
    const newsTitleInput = document.querySelector("#title-news-input").value
    const newsSynopsisInpupt = document.querySelector("#synopsis-news-input").value
    const newsURLInput= document.querySelector("#url-news-input").value
    //takes variables above, passes them in to create a new entry, fetches and displays updated data set
    API.saveNews(newsFactory(newsTitleInput, newsSynopsisInpupt, newsURLInput))
    .then((response) => {
        NewsTemplate(response)
    })
}

export {deleteNewsHandler, saveNewsHandler}