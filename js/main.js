let task = document.querySelector("#task");
let liveToastBtn = document.querySelector("#liveToastBtn");
let list = document.querySelector("#list");
let alert = document.querySelector("#alert");
const alertTrue = ` <div class="alert alert-success" role="alert">
Listeye Eklendi
</div>`;
const alertEror = `<div class="alert alert-danger" role="alert">
Listeye Boş Liste Ekleyemezsiniz
</div>`;
function BtnClick() {
  if (task.value != "") {
    let newTask = document.createElement("li");
    newTask.innerHTML = task.value;
    localStorage.setItem(task.value, task.value);
    list.append(newTask);

    task.value = "";
    alert.innerHTML = alertTrue;
  } else {
    alert.innerHTML = alertEror;
  }
}
document.querySelector("#clear").addEventListener("click", function clear() {
  list.innerHTML = "";
});
liveToastBtn.addEventListener("click", BtnClick);
