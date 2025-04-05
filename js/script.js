'use strict';
const titleClickHandler = function(event){
    const clickedElement = this;
    console.log('Link was clicked!');
    console.log(event);
    const activeLinks = document.querySelectorAll(".titles a.active");
    for(let activeLink of activeLinks){
        activeLink.classList.remove('active');
    }
    /* remove class 'active' from all article links  [done]*/
    const activeArticles = document.querySelectorAll(".posts article.active");
    for(let acriveArticle of activeArticles){
        acriveArticle.classList.remove('active');
    }
    /* add class 'active' to the clicked link [done] */
    clickedElement.classList.add('active');
    /* remove class 'active' from all articles */
  
    /* get 'href' attribute from the clicked link */
  
    /* find the correct article using the selector (value of 'href' attribute) */
  
    /* add class 'active' to the correct article */
  }
  
const links = document.querySelectorAll('.titles a');
  
for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }