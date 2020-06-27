export default function TopSectionTemplate(){
    let html =  `
    <div class="tp-container">
    <div class=" text-center header " style="height: 100px;">
        <img src="./images/NutshellV2.png" style="height: 100px; width: 100px;">
    </div>
    <section class="top-section container-fluid flex-container">
        <div class="top-box-sizing">
            <div class="flex-container">
                <div class="sidebar-sticky text-center side-bar-custom">
                    <ul class="nav flex-column">
                      <li id="nav"  class="nav-item">
                        <a name="dashboard" class="nav-link active " href="#">
                          Dashboard 
                        </a>
                      </li>
                      <li id="nav"  class="nav-item">
                        <a name="news" class="nav-link " href="#">
                          News
                        </a>
                      </li>
                      <li id="nav" class="nav-item">
                        <a name="events" class="nav-link " href="#">
                          Events
                        </a>
                      </li>
                      <li id="nav" class="nav-item">
                        <a name="comments" class="nav-link " href="#">
                          Comments
                        </a>
                      </li>
                      <li id="nav" class="nav-item">
                        <a name="users" class="nav-link " href="#">
                          Users
                        </a>
                      </li>
                      <li id="nav"  class="nav-item">
                        <a name="friends" class="nav-link " href="#">
                          Friends
                        </a>
                      </li>
                      
                    </ul>
        
                  </div>
            </div>
            <div class="user-section col-4  flex-container"> 
                <h1>Dashboard</h1>
                <h2 ><strong>Welcome</strong> Anthony</h2>
                <div class="user-info d-flex  flex-container">
                   <div class="img">
                    <img class="profile-img " src="https://img.favpng.com/11/7/14/money-stock-photography-maneki-neko-royalty-free-cat-bite-png-favpng-7atuHBjfXH4CBV38sTEW2DxDF.jpg">
                    </div>
                    <div class="stats text-right">
                   <div class="tasks text-right">
                       <h3>Friends: 0</h3>
                       <h3>Tasks: 0</h3>
                       <h3>Events: 0</h3>
                   </div>
                </div>
                
                </div>
                 
            </div>
            <div class="task-section col-6">
                <div class="tasks-box">
                    <div class="task-cards">
                        <div class="t-card d-flex flex-row">
                            <input class="checkbox" type="checkbox" name="task">
                            <h1>Laundry</h1>
                        </div>
                        <div class="t-card d-flex flex-row">
                            <input class="checkbox" type="checkbox" name="task">
                            <h1>Write Journal</h1>
                        </div>
                        <div class="t-card d-flex flex-row">
                            <input class="checkbox" type="checkbox" name="task">
                            <h1>Read Book</h1>
                        </div>
                        <div class="t-card d-flex flex-row">
                            <input class="checkbox" type="checkbox" name="task">
                            <h1>Kill the Gym</h1>
                        </div>
                        <div class="t-card d-flex flex-row">
                            <input class="checkbox" type="checkbox" name="task">
                            <h1>Break Shit</h1>
                        </div>
                        <div class="t-card d-flex flex-row">
                            <input class="checkbox" type="checkbox" name="task">
                            <h1>Enter Beast Mode</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section> 
 </div>
    `
    renderTopSection(html);
}
const renderTopSection= (html) =>{
    document.querySelector('.top-sec-container').innerHTML += html;
}