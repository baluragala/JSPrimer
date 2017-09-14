var x = 3;


function randomize(flag) {
    var x;
    if (flag) {
        let x = 100;
        var result = Math.random() * x;
    }
    console.log(x)
}

function one() {
    function two() {
        function three() {
        }
        three();

    }
}


randomize(false);


const rec = {toast:'burnt'}
