/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling





// const second = document.getElementsByClassName('second')[0];
// const _second = document.querySelector('.second');


// console.log(second.parentElement); // h1
// console.log(second.previousElementSibling); // span.first
// console.log(second.nextElementSibling); //
// console.log(second.children); //






/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest





// 1. nav 태그 요소

const nav = document.querySelector('nav');

console.log(nav);


// 2. nav 태그 안에 있는 about li 태그 요소

const about = nav.querySelector('.about');
const _about = nav.querySelector('ul > li:nth-child(1)');

console.log(about);


// 3. data-name이 contact인 li 태그 요소

const contact = nav.querySelector('li[data-name="contact"]');

console.log(contact);


// 4. nav 요소 안에 있는 모든 자식 요소

const children = nav.querySelectorAll('*');
const _children = nav.children[0].children;

console.log(children);


const li = [..._children].find((li) => {return li.matches('.about')});










/* 문서 대상 확인 */
// - matches
// - contains