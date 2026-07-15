const archiveBtn = document.getElementById("archiveBtn");
const archive = document.getElementById("archive");
const arrow = document.getElementById("arrow");

archiveBtn.addEventListener("click", () => {

    archive.classList.toggle("show");

    if (archive.classList.contains("show")) {

        arrow.textContent = "▾";

    } else {

        arrow.textContent = "▸";

    }

});