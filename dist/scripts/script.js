window.onload=function(){const t=document.querySelectorAll(".card-job-container"),e=document.querySelectorAll(".close");t.length>0&&t.forEach((t=>{t.addEventListener("click",(function(){n(this)}))})),e.length>0&&e.forEach((t=>{t.addEventListener("click",(function(t){t.stopPropagation(),o()}))})),window.addEventListener("scroll",(function(){c()}));const n=function(t){document.querySelectorAll(".card-job-container").forEach((t=>{t.classList.remove("card-job-active")})),t.classList.add("card-job-active")},o=function(){document.querySelectorAll(".card-job-container").forEach((t=>{t.classList.remove("card-job-active")}))},c=function(){const t=document.getElementsByClassName("top-menu-container")[0];document.getElementsByClassName("navi-logo")[0];this.window.scrollY>30?t.classList.add("top-menu-active"):t.classList.remove("top-menu-active")},a=document.querySelectorAll(".apply-btn");a.length>0&&a.forEach((t=>{t.addEventListener("click",(function(){showModal()}))}));const s=document.getElementsByClassName("modal")[0];showModal=function(){s.style.display="block"};const l=document.getElementsByClassName("close-btn")[0];null!=l&&(l.onclick=()=>s.style.display="none",window.onclick=function(t){t.target==s&&(s.style.display="none")});const i=document.querySelectorAll(".article");i.length>0&&i.forEach((t=>{t.getBoundingClientRect().top<screen.height-100&&t.classList.add("show")}));const d=function(){i.length>0&&i.forEach((t=>{t.getBoundingClientRect().top<screen.height-100?t.classList.add("show"):t.classList.remove("show")}))};window.addEventListener("scroll",(function(){d()}));const r=["Wydobycie i produkcja kruszyw","Produkcja wapna","Recykling","Produkcja betonu"],u=document.getElementById("random-text-container"),m=document.querySelector(".content-section");setInterval((function(){const t=document.createElement("div");t.classList.add("animated-text"),t.textContent=r[Math.floor(Math.random()*r.length)];const[e,n]=function(t){const e=m.offsetWidth-t.clientWidth,n=m.offsetHeight-t.clientHeight-70;return[Math.floor(Math.random()*e),Math.floor(Math.random()*n)]}(t);t.style.left=n+"px",t.style.top=e+"px",u.appendChild(t),t.addEventListener("animationend",(()=>{t.remove()}))}),1500)},document.addEventListener("DOMContentLoaded",(function(){const t=document.querySelector(".content-title"),e=document.querySelector(".content-subtitle"),n=document.querySelector(".content-paragraph");null!=t&&null!=e&&null!=n&&(t.style.animation="fadeInLeft 3s forwards",e.style.animation="fadeIn 1s 2s forwards",n.style.animation="fadeIn 1s 3s forwards")})),document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector(".menuBtn"),e=document.querySelector(".top-menu");t.addEventListener("click",(function(){t.classList.toggle("act"),t.classList.contains("act")?e.classList.add("act"):e.classList.remove("act")}))}));