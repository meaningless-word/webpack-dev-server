import "./styles.css";

const API_URL = "http://localhost:3000/contacts";

function getContacts() {
  let query = `${API_URL}/${document.getElementById("row_id").value}`;
  fetch(query)
    .then((response) => response.json())
    .then((contacts) => {
      showRows(contacts);
    })
    .catch((error) => console.error("Error:", error));
}

function showRows(rows) {
  let s = "";
  if (rows instanceof Array) {
    rows.forEach((row) => {
        s += prepareRow(row);
      });
  } else {
    s = prepareRow(rows);
  }
  document.getElementById("content").innerHTML = s;
}

function prepareRow(row) {
  let s = "";
  s += `<div class="grid-item">${row.id}</div>`;
  s += `<div class="grid-item">${row.name}</div>`;
  s += `<div class="grid-item">${row.email}</div>`;
  s += `<div class="grid-item">${row.phone}</div>`;
  return s;
}

document.getElementById("getContacts").addEventListener("click", getContacts);
