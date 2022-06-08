/* toggle raiting variants start */

const ratingVariants = document.querySelector('.rating_variants');
const ratingElements = document.querySelectorAll('.rating_el');
const mark = document.querySelector('.mark');
const form = document.querySelector('.rating');
const mainScreen = document.querySelector('.main');
const cardScreen = document.querySelector('.card');


let addActiveClass = (e) =>{
    let target = e.target;

    ratingElements.forEach( (item) => item.classList.remove('rating_el-active'));

    if (target != ratingVariants) {
    target.classList.toggle('rating_el-active');
    }

    mark.textContent = target.placeholder;
}

ratingVariants.addEventListener('click', addActiveClass);


/* toggle raiting variants end */


/* get mark from rating start*/

let showMark = (e) => {
    mainScreen.style = 'display: none';
    cardScreen.style = 'display: block';
    e.preventDefault();
}

form.addEventListener('submit', showMark)

/* get mark from rating end*/