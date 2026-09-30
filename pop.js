const preface = document.getElementById("preface");
const closeModal = document.getElementById("close-modal");
const readMore = document.getElementById("pop");

if (readMore && preface) {
    readMore.addEventListener("click", function (event) {
        event.preventDefault();
        preface.style.display = "flex";
    });
}

if (closeModal && preface) {
    closeModal.addEventListener("click", function () {
        preface.style.display = "none";
    });

    preface.addEventListener("click", function (event) {
        if (event.target === preface) {
            preface.style.display = "none";
        }
    });
}
