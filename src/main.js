import "@/src/style/style.css";
import { getNode, insertLast } from "kind-tiger";
import santa from "@/src/assets/santa.png"; // vite가 제공해주는 '동적 자산' 가져오는 방식
import {btn} from "@/src/style/style.module.css"; // 객체 -> 구조분해할당



const app = getNode('#app');


const template = /* HTML */`
  <figure class="container">
    <img style="width:30vw" src="${santa}" />
    <figcaption>산타 모자를 쓴 호랑이</figcaption>
  </figure>
  <button type="button" class="${btn}">BUTTON</button>
`

insertLast(app, template);