
window.addEventListener('load', start);
window.addEventListener('click', circle);
window.addEventListener('scroll', bgChange);

var id = null;


function start() {
    const fillTitle = "Hi, im eiks.";
    let hTitle = document.querySelector('.home-title');
    let index = -1;
    let toFill = [];
    clearInterval(id);
    id = setInterval(type, 100);
    function type() {
        if (hTitle.textContent == "Hi, im eiks.") {
            clearInterval(id);
        } else {
            index++;
            toFill.push(fillTitle[index]);
            console.log(toFill.join(''));
            hTitle.textContent = toFill.join('');
        }
    }
}



function circle(e) {
    console.log(e);
    let circle = document.createElement("div");
    circle.className = "circle";
    circle.style.top = `${e.pageY - 25}px`;
    circle.style.left = `${e.pageX - 25}px`;
    circle.style.background = randomColor(50);
    document.body.appendChild(circle)
    setTimeout(() => {
        circle.remove();
    }, 1000)
}



function bgChange() {
    const body = document.querySelector('body');
    if (window.scrollY > 930) {

        const fillTitle = "Future ruler of the world.";
        const text = document.querySelector(".console-text");
        let small = document.createElement("small");
        let br = document.createElement("br");
        let index = -1;
        let toFill = [];

        clearInterval(id);
        id = setInterval(type, 100);

        function type() {
            if (text.textContent == "Future ruler of the world.") {

                clearInterval(id);
                text.appendChild(br)
                text.appendChild(small)
                small.textContent = " joke, ahah"

            } else {

                index++
                toFill.push(fillTitle[index]);
                console.log(toFill.join(''));
                text.textContent = toFill.join('');

            }
        }
    }
    else if (window.scrollY > 1860) {
        body.classList.add("bodybg-change");
    } else {
        body.classList.remove("bodybg-change");

    }

}



function randomColor(brightness) {
    function randomChannel(brightness) {
        var r = 255 - brightness;
        var n = 0 | ((Math.random() * r) + brightness);
        var s = n.toString(16);
        return (s.length == 1) ? '0' + s : s;
    }
    return '#' + randomChannel(brightness) + randomChannel(brightness) + randomChannel(brightness);
}