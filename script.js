document.addEventListener('DOMContentLoaded',function(){
    const navSearch = document.getElementById('nav-search');

navSearch.addEventListener('focusin',function(){
    navSearch.classList.add('nav-search-click');
});

navSearch.addEventListener('focusout',function(){
    navSearch.classList.remove('nav-search-click');
});

});