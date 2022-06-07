/* toggle raiting variants start */

const ratingVariants = document.querySelector('.rating_variants');
const ratingElements = document.querySelectorAll('.rating_el');

let addActiveClass = (e) =>{
    let target = e.target;

    ratingElements.forEach( (item) => item.classList.remove('rating_el-active'));
    target.classList.toggle('rating_el-active');
}

ratingVariants.addEventListener('click', addActiveClass);

/* toggle raiting variants end */