const reSizeImg = () => {
    document.querySelector(".img-div").style.width = window.innerWidth;
}

reSizeImg();

window.addEventListener('resize', () => reSizeImg());