/* 
let ele = document.querySelector('.scrolled');
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll" , () => {
    let adv = document.documentElement.scrollTop;
    ele.style.width = `${( adv / height ) * 100}%`;
    
})
 */


let myScroll = document.querySelector('.scrolled');

let height = document.documentElement.scrollHeight -document.documentElement.clientHeight;

window.addEventListener("scroll" , () => {
 
  let adv = document.documentElement.scrollTop;

  myScroll.style.width = `${(adv / height) * 100}%`;
})



