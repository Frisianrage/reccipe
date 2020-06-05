function getTitle() {
  console.log(document.title);
}

function showUrl() {
  alert(window.location.href);
}

function setTitle() {
  const titleElement = document.getElementById("titleonpic");
  titleElement.innerHTML = document.title;
  console.log(titleElement.innerHTML);
}
