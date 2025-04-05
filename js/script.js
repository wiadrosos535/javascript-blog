'use strict';
const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    /* remove class 'active' from all article links  [done]*/
    const activeLinks = document.querySelectorAll(".titles a.active");
    for(let activeLink of activeLinks){
        activeLink.classList.remove('active');
    }
    /* add class 'active' to the clicked link [done] */
    clickedElement.classList.add('active');
    /* remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll(".posts article.active");
    for(let activeArticle of activeArticles){
        activeArticle.classList.remove('active');
    }
    /* get 'href' attribute from the clicked link [done]*/
    let hrefName = clickedElement.getAttribute('href');
    /* find the correct article using the selector (value of 'href' attribute)[done] */
    let correctArticle = document.querySelector(hrefName);
    /* add class 'active' to the correct article[done] */
    correctArticle.classList.add('active');
  }
  
const links = document.querySelectorAll('.titles a');
  
for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }