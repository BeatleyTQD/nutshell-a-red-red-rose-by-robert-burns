export default function NewsTemplate() { 
    
        const bottomHTML = `
            <section class="container">
            <!-- SECTION FOR POPULATING NEWS ENTRIES -->
            <section class="news-feed">
                <!-- INDIVIDUAL NEWS ENTRY -->
            

            <div class="card text-center">
                <div class="card-header"></div>
                <div class="card-body">
                <h5 class="card-title">News Headline</h5>
                <p class="card-text">Cliche venmo veniam gluten-free viral marfa keffiyeh. Truffaut neutra quinoa kogi. Labore laborum fugiat raw denim velit snackwave. Pickled venmo minim heirloom taiyaki microdosing sustainable ex. Aliqua fashion axe disrupt labore sint helvetica narwhal asymmetrical shabby chic locavore occupy adaptogen raclette id lomo. </p>
                <a href="#" class="btn purple-button">URL</a>
                </div>
                <div class="card-footer text-muted"></div>
            </div>
            <hr/>

            <div class="card text-center">
                <div class="card-header"></div>
                <div class="card-body">
                <h5 class="card-title">News Headline</h5>
                <p class="card-text">Nisi pariatur edison bulb, mlkshk fashion axe crucifix YOLO leggings pok pok laborum. Actually hammock tousled lorem ipsum artisan, locavore thundercats occaecat tumblr irony gastropub fam hashtag. Quinoa qui poutine, af sed seitan ugh sriracha readymade viral lumbersexual synth celiac chambray.</p>
                <a href="#" class="btn purple-button">URL</a>
                </div>
                <div class="card-footer text-muted"></div>
            </div>
            <hr/>
            </section>

            <!-- SECTION FOR CREATING NEW ARTICLE -->
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
            </section>

            </section>
        `
        console.log("rendering bottom html")
        renderBottomSection(bottomHTML)
}

 const renderBottomSection = (html) => {
    document.querySelector(".bottom-section").innerHTML = html;
    }
const newsGenerator = () =>{

}
const newsTemplate = (obj)=>{
    return ``
}