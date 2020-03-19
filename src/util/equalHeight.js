export default function setEqualHeight(el) {
    const elements = document.getElementsByClassName(el);
    let max = 0;
    setTimeout(() => {
        elements.forEach(element => {
            let height = parseInt(window.getComputedStyle(element).height);
            if (height > max) {
                max = height;
            }
        });
        elements.forEach(el => {
            el.style.height = max + "px";
        });
    }, 0);
}