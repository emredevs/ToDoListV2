let task = document.querySelector("#task");
let liveToastBtn = document.querySelector("#liveToastBtn");
let list = document.querySelector("#list");
let alert = document.querySelector("#alert");
const alertTrue = ` <div class="alert alert-success" role="alert">
Listeye Eklendi
</div>`;
const alertError = `<div class="alert alert-danger" role="alert">
Listeye Boş Liste Ekleyemezsiniz
</div>`;
liveToastBtn.addEventListener("click", BtnClick);
let clearX;
function BtnClick() {
  if (task.value != "") {
    let newTask = document.createElement("li");
    clearX = document.createElement("span");
    clearX.innerHTML = "X";
    newTask.innerHTML = task.value;
    newTask.appendChild(clearX);
    list.append(newTask);
    task.value = "";
    alert.innerHTML = alertTrue;
    clearX.addEventListener("click", function () {
      list.removeChild(newTask);
    });
  } else {
    alert.innerHTML = alertError;
  }
}
document.querySelector("#clear").addEventListener("click", function clear() {
  list.innerHTML = "";
});
