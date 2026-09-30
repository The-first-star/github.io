const preface = document.getElementById("preface");
const closeModal = document.getElementById("close-modal");
const readMore = document.getElementById("pop");

if (readMore && preface) {
    readMore.addEventListener("click", function (event) {
        event.preventDefault();
        preface.style.display = "flex";
        document.body.style.overflow = "hidden";
    });
}

if (closeModal && preface) {
    const closePreface = function () {
        preface.style.display = "none";
        document.body.style.overflow = "";
    };

    closeModal.addEventListener("click", closePreface);

    preface.addEventListener("click", function (event) {
        if (event.target === preface) {
            closePreface();
        }
    });
}
