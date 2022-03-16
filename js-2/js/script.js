const alertWarning = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
Listeye bir şeyler eklemek için lütfen bir şeyler yaz
</div>`;
const alertSuccess = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
Eklendi!
</div>`;

const newElement = () => {
  const alert = document.getElementById("alert");
  const val = document.getElementById("task").value;
  const item = `<span>${val}</span><span onclick="deleteElement(event)">X</span>`;
  const list = document.getElementById("list");
  const listToAdd = document.createElement("li");
  listToAdd.id = val;
  listToAdd.onclick = (event) => doneElement(event);
  listToAdd.innerHTML = item;
  if (!list.innerHTML.includes(item) && val) {
    list.appendChild(listToAdd);
    alert.innerHTML = alertSuccess;
    closeAlert();
  } else if (!val) {
    alert.innerHTML = alertWarning;
    closeAlert();
  }
};

const deleteElement = (event) => {
  const list = document.getElementById("list");
  list.removeChild(event.target.parentElement);
};

const doneElement = (event) => {
  const item = event.target.id ? event.target : event.target.parentElement;
  item.style.backgroundColor =
    item.style.backgroundColor === "blue" ? "white" : "blue";
  item.style.color = item.style.color === "white" ? "black" : "white";
};

const closeAlert = (interval = 1000) => {
  const alert = document.getElementById("alert");
  setTimeout(() => {
    alert.style.display = "none";
  }, interval);
  alert.style.display = "block";
};
