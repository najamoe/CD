function addCd() {
  const author = document.getElementById("author").value.trim();
  const title = document.getElementById("title").value.trim();
  const year = document.getElementById("year").value.trim();
  const tableBody = document.getElementById("cd-list");

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${author}</td>
    <td>${title}</td>
    <td>${year}</td>
    <td><button class="delete-btn">&#x1F5D1;</button></td> <!-- Trash icon for delete -->
  `;

  tableBody.appendChild(row);

  // Clearing the input fields
  document.getElementById("author").value = "";
  document.getElementById("title").value = "";
  document.getElementById("year").value = "";

  // Attach delete functionality to the button
  row.querySelector(".delete-btn").addEventListener("click", function () {
    row.remove();
  });
}

// Attach event listener to the submit button
document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector("input[type='submit']")
    .addEventListener("click", function (event) {
      event.preventDefault(); // Prevent form submission (which would reload the page)
      addCd();
    });
});
