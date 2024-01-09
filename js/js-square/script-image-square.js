
let cpt=1;
let lastCpt = cpt;

let min;
let max;
let path;

function nextSquare(){
    cpt = (cpt+1 <= max ? cpt+1 : 1);
    lastCpt = cpt;
    changeImage(path + cpt + ".png", cpt);
}

function previousSquare(){
    cpt = (cpt-1 >= min ? cpt-1 : max);
    lastCpt = cpt;
    changeImage(path + cpt + ".png", cpt);
}

function changeImage(pathForImage,currentCpt){
    lastCpt = currentCpt;
    cpt = currentCpt;
    document.getElementById("square").src = pathForImage;
}

function changeImageButton(currentCpt){
    changeImage(path,currentCpt);
}

function setMinMaxPathSquare(minimum, maximum, pathForImage){
    min = minimum;
    max = maximum;
    path = pathForImage;
}