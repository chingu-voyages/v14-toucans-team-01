function onButtonClick() {
  let textBox = document.getElementsByName("wine_input")[0];
  console.log(textBox.value);
  sessionStorage.wineMenu = textBox.value;
  console.log(sessionStorage.wineMenu);
  location.href="./_winesearch.html";
}