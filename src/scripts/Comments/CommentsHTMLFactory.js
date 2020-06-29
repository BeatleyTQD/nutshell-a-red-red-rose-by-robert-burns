const commentsConverter = (commentsItem) => {
    const commentsHTML = 
            `<div class="card text-center">
            <div class="card-header"></div>
            <div class="card-body">
                <h5 class="card-title">${commentsItem.user}</h5>
                <p class="card-text">${commentsItem.comment}</p>
            </div>
            <div class="card-footer text-muted"></div>
            </div>
            <hr/>`
            return commentsHTML
}




// // Something for editing own posts?
// <div class="card text-center">
// <div class="card-header"></div>
// <div class="card-body">
//   <h5 class="card-title">Post You Made</h5>
//   <p class="card-text">Four loko mlkshk marfa bespoke, brunch williamsburg meditation normcore cloud bread. Gochujang vegan sriracha letterpress hammock messenger bag scenester semiotics wolf narwhal.</p>
//   <button type="button" class="btn btn-outline-info">Edit Post</button>
// </div>
// <div class="card-footer text-muted"></div>
// </div>
// <hr/>