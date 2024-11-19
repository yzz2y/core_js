function getAttr(node, prop) {

  // 노드 인자에 문자열 입력하는 경우 validation
  if (isString(node)) node = getNode(node);

  // 속성명 인자에 문자열 입력하지 않는 경우 validation
  if(!isString(prop)) throw typeError('getAttr 함수에 전달된 두 번째 인수는 문자 타입이어야 합니다.');


  return node.getAttribute(prop);

}

function setAttr(node, prop, value) {

  if (isString(node)) node = getNode(node);

  if (!isString(prop)) throw typeError('setAttr 함수의 두 번째 인수는 문자 타입이어야 합니다.');

  if (isUndefined(value) || value === '') { // value가 undefined이거나 빈 문자열인 경우 -> 해당 속성을 지움
    node.removeAttribute(prop);
    return;
  }

  if (prop.startsWith('data')) { // prop이 'data-뭐시기' 형태로 전달될 경우
    prop = prop.slice(5); // 'data-'뒤만 잘라내서 다시 할당
    node.dataset[prop] = value; // prop이 변수로 전달됨 -> 대괄호 표기법
    return;
  }

  node.setAttribute(prop, value);

}


// attr('.about', 'id') -> getter
// attr('.about', 'id', 'star') -> setter

// function attr(node, prop, value) {
  
//   if (!value) {
//     return getAttr(node, prop);
//   } else {
//     setAttr(node, prop, value);
//   }

// }

// 화살표 함수 형태
const attr = (node, prop, value) => !value ? getAttr(node, prop) : setAttr(node, prop, value);