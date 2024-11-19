function getNode(node, context = document) {

  if (context.nodeType != 9) { // document -> 9번 노드
    context = document.querySelector(context);
    // context = getNode(context); // 재귀 방식으로도 작성 가능
  }

  return context.querySelector(node);

}

function getNodes(node, context = document) {

  if (context.nodeType != 9) { // document -> 9번 노드
    context = document.querySelector(context);
    // context = getNode(context);
  }

  return context.querySelectorAll(node);

}