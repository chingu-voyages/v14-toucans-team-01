
function func1() {
  sessionStorage.ingredients = document.getElementById("input_message").value;
  console.log(localStorage.ingredients);
  location.href="./_searchresult.html";
}
