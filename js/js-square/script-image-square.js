
let cpt2=1;
let lastCpt2 = cpt2;

let min2;
let max2;
let path2;

function nextSquare(){
    cpt2 = (cpt2+1 <= max2 ? cpt2+1 : 1);
    lastCpt2 = cpt2;
    changeImageSquare(path2 + cpt2 + ".png", cpt2);
}

function previousSquare(){
    cpt2 = (cpt2-1 >= min ? cpt2-1 : max2);
    lastCpt2 = cpt2;
    changeImageSquare(path2 + cpt2 + ".png", cpt2);
}

function changeImageSquare(path2ForImage,currentCpt2){
    lastCpt2 = currentCpt2;
    cpt2 = currentCpt2;
    document.getElementById("square").src = path2ForImage;
}

function changeImageButtonSquare(currentCpt2){
    changeImageSquare(path2,currentCpt2);
}

function setMinMaxPathSquare(minimum, maximum, pathForImage){
    min2 = minimum;
    max2 = maximum;
    path2 = pathForImage;
}