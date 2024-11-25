import {
  tiger,
  delayP,
  insertLast,
  getNode,
  renderUserCard,
  changeColor,
  renderSpinner,
  renderEmptyCard,
  clearContents,
} from './lib/index.js';


const END_POINT = 'http://localhost:3000/users';

const userCardInner = getNode('.user-card-inner');
const createButton = getNode('.create');
const cancelButton = getNode('.cancel');
const doneButton = getNode('.done');


// user 데이터 fetch
// fetch 데이터 유저의 이름만 콘솔에 출력

async function renderUserList() {

  renderSpinner(userCardInner);

  try {

    const response = await tiger.get(END_POINT);

    // getNode('.loadingSpinner').remove();

    gsap.to('.loadingSpinner', {
      opacity: 0,
      onComplete() {
        this._targets[0].remove();
      }
    });

    const data = response.data;


    await delayP(1000); // 렌더링을 늦춤


    data.forEach((user) => renderUserCard(userCardInner, user));

    changeColor('.user-card');

    gsap.from('.user-card', {
      // delay: 1, // 애니메이션을 늦춤
      x: -100,
      opacity: 0,
      stagger: {
        each: 0.1,
        from: 'start'
      }
    });

  }
  catch {

    renderEmptyCard(userCardInner);
    
  }

}

renderUserList();

function handleDeleteCard(e) {
  const button = e.target.closest('button');

  if (!button) return;

  // article 태그의 data-index의 user-'숫자'를 가져오기 위해 article 태그 찾기
  const article = button.parentElement;
  const index = article.dataset.index.slice(5);

  tiger.delete(`${END_POINT}/${index}`).then(() => {
    alert('삭제가 완료됐습니다.');

    clearContents(userCardInner);
    renderUserList(); // 삭제할때마다 새로고침하지 않아도 됨
  });
}

function handleCreate() {
  this.classList.add('open');
  gsap.to('.pop', {autoAlpha:1}); // gsap으로 visibility 제어
}

function handleCancel(e) {
  e.stopPropagation(); // 버블링떄문에 취소 버튼을 누르면 create 버튼이 같이 동작함
  createButton.classList.remove('open');
  gsap.to('.pop', {autoAlpha:0});
}

function handleDone(e) {
  e.preventDefault();

  const username = getNode('#nameField').value;
  const email = getNode('#emailField').value;
  const website = getNode('#siteField').value;

  const obj = {username, email, website};

  tiger.post(END_POINT, {username, email, website})
  .then(() => {
    gsap.to('.pop', {autoAlpha:0});
    clearContents(userCardInner);
    renderUserList();

    getNode('#nameField').value = '';
    getNode('#emailField').value = '';
    getNode('#siteField').value = '';
  })
}


// 모든 삭제 버튼에 이벤트를 걸기 위해 부모 요소인 userCardInner에 이벤트 위임
userCardInner.addEventListener('click', handleDeleteCard);
createButton.addEventListener('click', handleCreate);
cancelButton.addEventListener('click', handleCancel);
doneButton.addEventListener('click', handleDone);


// 1. input value 가져오기
// 2. value 모아서 객체 생성
// 3. 생성 버튼 누르면 POST 통신 하도록
// 4. body에 생성한 객체 실어보내기
// 5. 카드 컨텐츠 비우기
// 6. 유지카드 리렌더링