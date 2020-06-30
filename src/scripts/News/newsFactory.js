//Module by Brandon W. Responsible for taking in user inputted data for a news article and returning a new object.
export default function newsFactory(title, synopsis, url) {
    return {
        "userId": parseInt(window.sessionStorage.activeUser),
        "title": title,
        "time": Date.now(),
        "synopsis": synopsis,
        "url": url
    }
}
