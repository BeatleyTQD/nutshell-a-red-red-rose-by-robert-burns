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
        NewsTemplate(response.sort((a,b)=>b.time-a.time))
    })
}


const saveNewsHandler = (obj) => {
    //Obtains and stores user submitted data into variables to be passed into the news factory function
    const newsTitleInput = document.querySelector("#title-news-input").value
    const newsSynopsisInpupt = document.querySelector("#synopsis-news-input").value
    const newsURLInput= document.querySelector("#url-news-input").value
    if (newsTitleInput !== "" || newsSynopsisInpupt !== "" || newsURLInput !== ""){
    //takes variables above, passes them in to create a new entry, fetches and displays updated data set
    API.saveNews(newsFactory(newsTitleInput, newsSynopsisInpupt, newsURLInput))
    .then(() => API.getNews())
    .then((response) => {
        NewsTemplate(response.sort((a,b)=>b.time-a.time))
    })
    } else (alert("Please fill out entire form!"))
}

export {deleteNewsHandler, saveNewsHandler}