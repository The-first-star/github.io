const preface = document.getElementById("preface");
const close = document.getElementById("close");
const readMore = document.getElementById("pop");

if (readMore && preface) {
    readMore.addEventListener("click", function (event) {
        event.preventDefault();
        preface.style.display = "flex";
        document.body.style.overflow = "hidden";
    });
}

if (close && preface) {
    const closePreface = function () {
        preface.style.display = "none";
        document.body.style.overflow = "";
    };

    close.addEventListener("click", closePreface);

    preface.addEventListener("click", function (event) {
        if (event.target === preface) {
            closePreface();
        }
    });
}
