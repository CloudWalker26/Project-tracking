<!-- HTML -->
<header>
      <div class="desktop-logo"><img src="images/logo.svg" alt="" /></div>
      <nav class="menu">
        <ul>
          <li><a class="home" href="">Home</a></li>
          <li><a class="About" href="">About</a></li>
          <li><a class="Contact" href="">Contact</a></li>
          <li><a class="blog" href="">Blog</a></li>
          <li><a class="Careers" href="">Careers</a></li>
        </ul>
      </nav>
      <button class="request-btn">Request Invite</button>

      <div class="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>

<!-- css -->

header {
width: 70%;
height: 15vh;
margin: 0 auto;
display: flex;
}

header .desktop-logo {
margin-left: 20px;
display: flex;
justify-content: center;
align-items: center;
}

header nav {
display: flex;
width: 500px;
margin-left: auto;
}

header nav ul {
display: flex;
width: 400px;
align-items: center;
position: relative;
left: -60px;
}
header nav ul li a {
margin-left: 20px;
}

.home::after {
background-color: red;
content: "";
width: 0;
height: 5px;
left: 0;
bottom: 0;
transition: width 0.35s ease 0s;
position: absolute;

left: 20px;
}
.About::after {
background-color: red;
content: "";
width: 0;
height: 5px;
left: 0;
bottom: 0;
transition: width 0.35s ease 0s;
position: absolute;
left: 90px;
}
.Contact::after {
background-color: red;
content: "";
width: 0;
height: 5px;
left: 0;
bottom: 0;
transition: width 0.35s ease 0s;
position: absolute;
left: 160px;
}
.blog::after {
background-color: red;
content: "";
width: 0;
height: 5px;
left: 0;
bottom: 0;
transition: width 0.35s ease 0s;
position: absolute;
left: 245px;
}
.Careers::after {
background-color: red;
content: "";
width: 0;
height: 5px;
left: 0;
bottom: 0;
transition: width 0.35s ease 0s;
position: absolute;
left: 305px;
}

.home:hover::after {
width: 50px;
}
.About:hover::after {
width: 50px;
}
.Contact:hover::after {
width: 70px;
}
.blog:hover::after {
width: 45px;
}
.Careers:hover::after {
width: 75px;
}

.request-btn {
height: 50px;
width: 150px;
margin: auto 20px;
border-radius: 25px;
color: white;
cursor: pointer;
font-size: medium;
background: linear-gradient(90deg, hsl(136, 65%, 51%), hsl(192, 70%, 51%));
}

.request-btn:hover {
opacity: 0.8;
}

header .hamburger {
display: absolute;
display: none;
margin-left: auto;
margin-right: 20px;
width: 40px;
height: 40px;
z-index: 2;
cursor: pointer;
position: relative;
top: -20px;
}

header .hamburger span {
background-color: hsl(233, 26%, 24%);
width: 35px;
height: 5px;
display: block;
margin: 6px;
font-family: "Public Sans", sans-serif;
}

header .hamburger.active span:first-child {
transform: rotate(45deg) translate3d(9px, 12px, 0);
}
header .hamburger.active span:nth-child(2) {
transform: scale(0);
}
header .hamburger.active span:last-child {
transform: rotate(-45deg) translate3d(2px, -8px, 0);
}

@media (max-width: 1000px) {
header {
width: 100%;
padding: 30px 0;
height: 8vh;
}

header nav {
display: none;
}

header .request-btn {
display: none;
}

header .hamburger {
display: block;
}

header .menu.active {
position: fixed;
/_ overflow: hidden; _/
background-color: hsl(220, 16%, 96%);
display: flex;
flex-direction: column;
width: 90%;
margin: 80px auto;
height: 200px;
border-radius: 5px;
right: 0;
top: 0;
bottom: 0;
left: 0;
z-index: 2;
/_ box-shadow: 10px 10px 70px 50px hsl(233, 26%, 24%); _/
}

header .menu.active ul {
flex-direction: column;
width: 95%;
height: 90%;
margin: auto;
}

header .menu.active ul li {
width: 100%;
text-align: center;
}

header .menu.active ul li a {
text-align: center;
color: hsl(233, 26%, 24%);
padding: 8px;
display: block;
position: relative;
left: 50px;
}

header .menu.active ul li a:hover::after {
display: none;
}
