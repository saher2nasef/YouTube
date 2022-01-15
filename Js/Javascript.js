    // Check Sign in
    let Left = document.querySelector(".Left")
    Left.innerHTML = `
    <button class="img">
        <img src="images/User/1.jpg" />
        <div class="DivUser">
            <div>
                <img src="images/User/1.jpg" />
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

    // 


    window.onload = function() {
        for (let i = 0; i < 22; i++) {
            let Section = document.querySelector("section.MainArea")
            Section.innerHTML += `                
        <div data-id="">
            <div class="Image">                            
            </div>
            <div class="InfoVideo">
               <span></span>
                <div class="info">
                    <span></span>
                    <a href="#" class="a"></a>
                </div>
            </div>
        </div>
    `;
        }
        fetch("Js/Pages/Videos.json")
            .then(response => response.json())
            .then(json => {
                let Section = document.querySelector("section.MainArea")
                const shuffledArray = json.sort((a, b) => 0.5 - Math.random());
                Section.innerHTML = ""
                for (let i = 0; i < (shuffledArray.length); i++) {
                    Section.innerHTML += `                
                <div data-id="${shuffledArray[i].Id}">
                    <div class="Image">
                        <img src="${shuffledArray[i].ImageMain.slice(3,shuffledArray[i].ImageMain.length)}" alt="">
                        <div class="time">10:50</div>
                        <div class="Top">
                            <button><i class="fa fa-history"></i></button>
                            <button><i class="fa fa-list-ol"></i></button>
                        </div>
                    </div>
                    <div class="InfoVideo">
                        <img src="${shuffledArray[i].ImageNoMain.slice(3,shuffledArray[i].ImageNoMain.length)}" alt="">
                        <div class="info">
                            <h5>${(shuffledArray[i].title.length >= 74)? shuffledArray[i].title.slice(0,70) + "...." : shuffledArray[i].title  }</h5>
                            <a href="#">${shuffledArray[i].Title2}</a>
                            <h6><span>${shuffledArray[i].Views}</span> <span>${shuffledArray[i].Long}</span></h6>
                        </div>
                    </div>
                </div>
            `;
                }
                let Sections = document.querySelectorAll("section.MainArea>div")
                Sections.forEach(Section => {
                    Section.onclick = function() {
                        location.href = "Watch/?" + this.dataset.id
                    }
                })
            });



        let buttonUser = document.querySelector(".Left button")
        let DivUser = document.querySelector(".Left button .DivUser")
        buttonUser.onclick = function() {
            DivUser.classList.toggle("active")
        }
        var r = document.querySelector(':root');
        let Bool = 0;

        function Toggle() {
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

        let body = document.querySelector("body");
        if (localStorage.getItem("Dir")) {
            if (localStorage.getItem("Dir") == "true") {
                body.classList.add("DirBody")
            } else {
                body.classList.remove("DirBody")
            }
        } else {
            body.classList.remove("DirBody")
        }
    }