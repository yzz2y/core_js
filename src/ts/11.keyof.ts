

type Person = {
  name: string, 
  age: number
}

const person: Person = {
  name: 'tiger', 
  age: 35
}

// keyof: 지정해놓은 type의 key를 뽑기
function getProperty(obj: Person, key: keyof Person) { // key: 'name' | 'age'
  return obj[key];
}

getProperty(person, 'name');





// utility type

// 입력한 css값이 유효한지 확인하는 함수
function validCssProperty<T extends keyof CSSStyleDeclaration>(prop: T) {
  return prop in document.body.style;
}

validCssProperty('color');





const product = {
  id: 1, 
  name: 'macbook', 
  price: 300
};


function setProperty<T, K extends keyof T>(product: T, key: K, value: T[K]): T {
  product[key] = value;
  return product;
}

setProperty(product, 'price', 100); // { id: 1, name: 'macbook', price: 100 }





const products = [
  {name: 'mac', price: 500}, 
  {name: 'iPhone', price: 300}, 
  {name: 'iPad', price: 300}
];

function getProperties<T, K extends keyof T>(arr: T[], key: K): T[K][] {
  return arr.map(p => p[key]);
}

getProperties(products, 'name'); // ['mac', 'iPhone', 'iPad']