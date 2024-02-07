let xhttp = new XMLHttpRequest()

xhttp.onload = function() {
    let obj = JSON.parse(this.responseText)
    obj.forEach( function(value, index){
        let projects = document.querySelector('#projects')
        if (index <= 1){
            let html = ``
            if (index == 1){
                html = `
                <div class="col-lg-1"></div>
                <div class="col-lg-4 project">
                <div class="row">
                    <div class="col-lg-8 pr-title"><h3><a href="${value.svn_url}" style="color: #ffffff; text-decoration: none"> ${value.name}</a></h3></div>
                    <div class="col-lg-4 stars">
                        <span>${value.stargazers_count}</span>
                        <img src="img/star.png" alt="" height="30px" width="30px">
                    </div>
                </div>
                <div class="col-lg-8 pr-description">
                    <p style="white-space: nowrap;overflow: hidden;">${value.description}</p>
                </div>
            </div>`
            }
            else{
                html = `<div class="col-lg-3 project">
                <div class="row">
                    <div class="col-lg-8 pr-title"><h3><a href="${value.svn_url}" style="color: #ffffff; text-decoration: none"> ${value.name}</a></h3></div>
                    <div class="col-lg-4 stars">
                        <span>${value.stargazers_count}</span>
                        <img src="img/star.png" alt="" height="30px" width="30px">
                    </div>
                </div>
                <div class="col-lg-8 pr-description">
                    <p style="white-space: nowrap;overflow: hidden;">${value.description}</p>
                </div>
            </div>`
            }
           
            projects.innerHTML += html
        }
        if (index == 2){
            projects.innerHTML += `
                <div class="col-lg-1"></div>
                <div class="col-lg-3 project">
                <div class="row">
                    <div class="col-lg-8 pr-title"><h3><a href="${value.svn_url}" style="color: #ffffff; text-decoration: none"> ${value.name}</a></h3></div>
                    <div class="col-lg-4 stars">
                        <span>${value.stargazers_count}</span>
                        <img src="img/star.png" alt="" height="30px" width="30px">
                    </div>
                </div>
                <div class="col-lg-8 pr-description">
                    <p style="white-space: nowrap;overflow: hidden;">${value.description}</p>
                </div>
            </div>`
        }
       
    });
}

xhttp.open("GET", "https://api.github.com/users/tonycoc/repos")

xhttp.send()

let message_show = false
let container = document.getElementById("container_id")
let message = document.getElementById("message_id")

if (window.screen.width <= 1080) {
    
    if (!message_show){
        message.addEventListener("click", function(){
            
            message.style.display = "none"
            container.setAttribute("style","-webkit-filter: blur(0px)")
        })
    }
}