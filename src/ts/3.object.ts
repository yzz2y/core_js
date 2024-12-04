const user: {
  id?: number, // optional chaining으로 optional property 구현: 안써도 에러가 나지 않음
  name: string,
  age: number
} = {
  name: 'tiger', 
  age: 40
}


const config: {
  readonly apiKey: string // 읽기 전용 속성으로 만듦 -> 수정할 수 없음 (js의 Object.freeze()와 동일하게 작동)
} = {
  apiKey: 'ASzxjciqwe14nmzk@'
}


