var container = document.getElementById('container');
var count = 0

function work(count) {
    var dash1 = document.getElementById('dash1')
    var dash2 = document.getElementById('dash2')
    var dash3 = document.getElementById('dash3')
    var dot1 = document.getElementById('dot1')
    var dot2 = document.getElementById('dot2')
    var dot3 = document.getElementById('dot3')
    let sBar = document.querySelector('.sidebar');
    console.log(count);
    if (count % 2 == 0) {
        sBar.style.left = '0vw';
        dash2.style.animation = 'rotateDash2 0.2s ease forwards'
        dot1.style.animation = 'extentDash2NDot 0.2s ease  forwards'
        dot2.style.animation = 'extentDash2NDot 0.2s ease  forwards'
        dot3.style.animation = 'extentDash2NDot 0.2s ease  forwards'
        dash1.style.animation = 'rotate1 0.2s ease forwards';
        dash3.style.animation = 'rotate2 0.2s ease forwards';
    }
    else {
        sBar.style.left = '-50vw';
        dash1.style.animation = 'rerotate1 0.2s ease forwards';
        dash3.style.animation = 'rerotate2 0.2s ease forwards';

        dash2.style.animation = 'rerotateDash2 0.2s ease forwards'
        dot1.style.animation = 'reextentDash2NDot 0.2s ease  forwards'
        dot2.style.animation = 'reextentDash2NDot 0.2s ease  forwards'
        dot3.style.animation = 'reextentDash2NDot 0.2s ease  forwards'
    }
}

container.addEventListener('click', () => {
    work(count);
    count++;
});