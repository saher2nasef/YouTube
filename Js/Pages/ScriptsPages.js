let Left = document.querySelector(".Left")
Left.innerHTML = `
    <button class="img">
    <img src="../images/User/1.jpg" />
    <div class="DivUser">
        <div>
            <img src="../images/User/1.jpg" />
            <div>
                <h6>Saher Nasef</h6>
            </div>                
        </div>    
        <hr/>
        <span onclick="Toggle()">Toggle</span>
        <hr/>
        <span onclick="RTL()">Direction</span>
    </div>
    </button>
    <button class="bell"><i class="fa fa-bell"></i></button>
    <button class="th"><i class="fa fa-th"></i></button>
    <button class="video"><i class="fa fa-video"></i></button>
    <button class="search"><i class="fa fa-search"></i></button>
`;
let buttonUser = document.querySelector(".Left button")
let DivUser = document.querySelector(".Left button .DivUser")
buttonUser.onclick = function() {
    DivUser.classList.toggle("active")
}
var r = document.querySelector(':root');
let Bool = 0;

function Toggle(div) {
    if (Bool == 0) {
        Bool = 1
        r.style.setProperty('--ColorMain', '#515ac8');
        r.style.setProperty('--BackGroundColor', '#FFF');
        r.style.setProperty('--BackGroundColor2', '#EEE');
        r.style.setProperty('--Color', '#000');
        r.style.setProperty('--Search1', '#EEE');
        r.style.setProperty('--Search2', '#000');
    } else if (Bool == 1) {
        Bool = 2
        r.style.setProperty('--ColorMain', '#d83b3b');
        r.style.setProperty('--BackGroundColor', '#3d3c38');
        r.style.setProperty('--BackGroundColor2', '#312d2a');
        r.style.setProperty('--Color', '#fff');
        r.style.setProperty('--Search1', '#2a2325');
        r.style.setProperty('--Search2', '#fff');
    } else if (Bool == 2) {
        Bool = 3
        r.style.setProperty('--ColorMain', '#ef7847');
        r.style.setProperty('--BackGroundColor', '#3d3c38');
        r.style.setProperty('--BackGroundColor2', '#312d2a');
        r.style.setProperty('--Color', '#fff');
        r.style.setProperty('--Search1', '#2a2325');
        r.style.setProperty('--Search2', '#fff');

    } else if (Bool == 3) {
        Bool = 0
        r.style.setProperty('--ColorMain', '#00c3ff');
        r.style.setProperty('--BackGroundColor', '#3d3c38');
        r.style.setProperty('--BackGroundColor2', '#312d2a');
        r.style.setProperty('--Color', '#fff');
        r.style.setProperty('--Search1', '#2a2325');
        r.style.setProperty('--Search2', '#fff');
    }
}

function RTL() {
    let body = document.querySelector("body");
    if (localStorage.getItem("Dir") != null) {
        if (localStorage.getItem("Dir") == "true") {
            body.classList.remove("DirBody")
            localStorage.setItem("Dir", false)
        } else {
            localStorage.setItem("Dir", true)
            body.classList.add("DirBody")
        }
    } else {
        localStorage.setItem("Dir", true)
        body.classList.add("DirBody")
    }
}
window.onload = function() {
    let body = document.querySelector("body");
    if (localStorage.getItem("Dir")) {
        if (localStorage.getItem("Dir") == "true") {
            body.classList.add("DirBody")
        } else {
            body.classList.remove("DirBody")
        }
    }
}

// Inner Videos
let DivVideos = document.querySelector(".sectionOtherVideo")
let sectionVideo = document.querySelector(".sectionVideo")
window.onload = function() {
    for (let i = 0; i < 10; i++) {
        DivVideos.innerHTML += `
        <div>
            <span></span>
            <div>
                <span></span>
                <a href="#" class="a"></a>                
            </div>
        </div>
        `
    }
    fetch("../Js/Pages/Videos.json")
        .then(response => response.json())
        .then(json => {

            for (let i = 0; i < json.length; i++) {
                if (json[i].Id == location.href.slice(location.href.indexOf("?") + 1, location.href.length)) {

                    document.querySelector("head title").innerHTML = json[i].title + " - YouTube";
                    let Text = json[i].description;
                    if (Text.length >= 100) {
                        Text = `                                        
                        <p>${Text.slice(0, 100).replaceAll("\n", "<br/>")}</p>
                        <button id="Show">قراءة المزيد</button>
                    `;
                    } else if (Text.length <= 100) {
                        Text = `                                        
                    <p>${Text}</p>
                    <button id="Show" hidden>قراءة المزيد</button>
                `;
                    }
                    sectionVideo.innerHTML = `
                    <img src="${json[i].ImageMain}" />
                    <div class="VideoInfo">
                                <h5>${json[i].title}</h5>
                                <div class="VideoBottom">
                                    <div class="Date">
                                        <span>${json[i].Views}</span>
                                        <span>${json[i].Long}</span>
                                    </div>
                                    <div class="Opinion">
                                        <button><i class="fa fa-thumbs-up"></i><span>22</span></button>
                                        <button><i class="fa fa-thumbs-down"></i><span>1</span></button>
                                        <button><i class="fa fa-share"></i><span>مشاركة</span></button>
                                        <button><i class="fas fa-save"></i><span>حفظ</span></button>
                                        <button><i class="fas fa-ellipsis-h"></i><span></span></button>
                                    </div>
                                </div>
                                <hr>
                                <div class="VideoInfo2">
                                    <div class="Channle">
                                        <button id="Subscribe">اشترك</button>
                                        <div class="Channle_Child">
                                            <img src="${json[i].ImageNoMain}" alt="">
                                            <div>
                                                <a href="#">${json[i].Title2}</a>
                                                <span>${json[i].subscribers}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="description">
                                        ${Text}
                                    </div>
                                </div>
                                <hr/>
                            </div>
                        </div>
                `;
                    let Show = document.getElementById("Show");
                    let description = document.querySelector(".description p");
                    let Bool = false;
                    Show.innerHTML = "عرض المزيد"
                    Show.onclick = function() {
                        if (Bool) {
                            Text = Text.slice(0, 100) + "...";
                            this.innerHTML = "عرض المزيد"
                            Bool = false
                        } else {
                            Text = json[i].description;
                            Bool = true
                            this.innerHTML = "عرض محتوى أقل"
                        }
                        description.innerHTML = Text.replaceAll("\n", "<br/>");
                    }
                }
            }

            window.onresize = function() {
                Inner();
            }

            function Inner() {
                DivVideos.innerHTML = ""
                json.forEach(jsons => {

                    if (window.innerWidth <= 1050) {
                        DivVideos.innerHTML += `
                        <div title="${jsons.title}" data-id="${jsons.Id}">
                            <img src="${jsons.ImageMain}">
                            <div>
                            <h5>${jsons.title}</h5>
                                <a href="#">${jsons.Title2}</a>
                                <h6><span>${jsons.Views}</span> <span>${jsons.Long}</span></h6>
                            </div>
                        </div>
                    `;
                    } else {
                        DivVideos.innerHTML += `
                    <div title="${jsons.title}" data-id="${jsons.Id}">
                        <img src="${jsons.ImageMain}">
                        <div>
                        <h5>${(jsons.title.length >= 40)? jsons.title.slice(0,40) + "...." : jsons.title}</h5>
                            <a href="#">${jsons.Title2}</a>
                            <h6><span>${jsons.Views}</span> <span>${jsons.Long}</span></h6>
                        </div>
                    </div>
                `;
                    }

                });
            }
            Inner();
            let Childer = DivVideos.children
            for (let i = 0; i < Childer.length; i++) {
                Childer[i].onclick = function() {
                    location.href = "?" + Childer[i].dataset.id
                }
            }
        });
}