// typing animation

var typed = new Typed(".typing",{
    strings:[
    "AI Developer",
    "Machine Learning Enthusiast",
    "Full Stack Developer"
    ],
    typeSpeed:70,
    backSpeed:40,
    loop:true
    });
    
    
    // particle background
    
    particlesJS("particles-js",{
    particles:{
    number:{value:80},
    size:{value:3},
    move:{speed:2}
    }
    });
    
    
    // GitHub API projects
    
    fetch("https://api.github.com/users/YOURUSERNAME/repos")
    
    .then(res=>res.json())
    
    .then(data=>{
    
    const container=document.getElementById("projectContainer");
    
    data.slice(0,6).forEach(repo=>{
    
    const card=`
    <div class="project-card">
    
    <h3>${repo.name}</h3>
    
    <p>${repo.description || "Project repository"}</p>
    
    <a href="${repo.html_url}" target="_blank">View Code</a>
    
    </div>
    `;
    
    container.innerHTML+=card;
    
    });
    
    });
    
    
    // scroll animation
    
    AOS.init({
    duration:1200
    });