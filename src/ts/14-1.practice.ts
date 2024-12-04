import { Sprites } from './type.d';
const END_POINT = 'https://pokeapi.co/api/v2/pokemon/3';


async function fetchData(url: string): Promise<Pokemon> {
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

const data = await fetchData(END_POINT);

function createCard() {
    const tag = `
    <div class="card">
      <img src="${data.sprites['font_default']}" alt="" />
      <h2>${data.name}</h2>
    </div>
  `
  return tag;
}

function renderCard(target: Element, data: Main) {
  document.body.insertAdjacentElement('beforeend', createCard(data));
}

async function render() {
  const data = await fetchData(END_POINT);
  renderCard(document.body, data);
}




function fetchPokemon() {

  const arr: Promise<Main>[] = [];

  Array(10).fill(null).forEach((_, i) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${i + 1}`;
    arr.push(fetch(url).then((res) => res.json()));
  });

  return arr;

}

async function createPokemonObject(arr: Main[]) {

  let pokemon;

  await Promise.all(arr).then((all) => {
    pokemon = all.map((item) => {
      name: item.name,
      image: item.sprites['front_default'];
    })
  });
  
}

function renderPokemon() {
  const data = fetchPokemon();
  createPokemonObject(data);
}