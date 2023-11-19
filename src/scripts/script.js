window.onload = function(){
const jobCards = document.querySelectorAll('.card-job-container');

if(jobCards.length > 0) {
jobCards.forEach(card => {
    card.addEventListener('mouseover', function(e){
        showJobOffer(this);
    });

    card.addEventListener('mouseout', function(e){
        hideJobOffer(this);
    })
});
}

window.addEventListener("scroll",function(){
    changeNavigationStyle();
});


const showJobOffer = function(card){
card.classList.add('card-job-active')
};

const hideJobOffer = function(card){
    if(card.classList.contains('card-job-active'))
        card.classList.remove('card-job-active')
}

const changeNavigationStyle = function(){
    const navi = document.getElementsByClassName('top-menu-container')[0];
    const naviLogo = document.getElementsByClassName('navi-logo')[0];

    if(this.window.scrollY > 30){

    navi.classList.add('top-menu-active');

    }
    else{
        navi.classList.remove('top-menu-active')
    }
}
}