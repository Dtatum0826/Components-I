import './index.less'
import {data} from'./components/article/article.js'
import {menuItems} from './components/menu/menu.js'



  
  console.log('its working');
    
function articleMaker(articleObj){
    const container = document.createElement('div');
    container.classList = "article";
    
    
    const h2= document.createElement('h2');
    const pDate = document.createElement('p');
    pDate.classList = 'date';
    const p1 =document.createElement('p');
    const p2 =document.createElement('p');
    const p3 =document.createElement('p');

    const span = document.createElement('span');
    span.classList = 'expandButton';

    container.appendChild(h2);
    container.appendChild(pDate);
    container.appendChild(p1);
    container.appendChild(p2);
    container.appendChild(p3);
    container.appendChild(span);

    h2.textContent = articleObj.title;
    pDate.textContent = articleObj.date;
    p1.textContent = articleObj.firstParagraph;
    p2.textContent = articleObj.secondParagraph;
    p3.textContent = articleObj.thirdParagraph;
    span.textContent = '+'
console.log(p1)

    span.addEventListener('click',() => {
        container.classList.toggle('article-open')
    
    })

    
   
    
    return container
}

data.forEach(item =>{
    console.log(item)
document.querySelector('div.articles').appendChild(articleMaker(item))
})

articleMaker(data);


function menuMaker(menuArray){
    const menuContainer = document.createElement('div')
    const menuList = document.createElement('ul')
    
    menuContainer.appendChild(menuList);
    
    menuContainer.classList = 'menu'
    
    menuArray.forEach(item =>{
      const menuItem = document.createElement('li')
       menuItem.textContent = item;
       menuList.appendChild(menuItem);


    })
    const menuButton = document.querySelector('.menu-button')

    menuButton.addEventListener('click',()=> {
       menuContainer.classList.toggle('menu--open')
    })

    return menuContainer;
} 
const header = document.querySelector('.header')
header.appendChild(menuMaker(menuItems));