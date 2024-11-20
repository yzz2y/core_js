export function copy(text) {
  return navigator.clipboard.writeText(text); // promise 객체 내보내도록 return
}