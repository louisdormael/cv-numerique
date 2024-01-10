
let cpt=1;
let lastCpt = cpt;

let min;
let max;
let path;


function next(){
    cpt = (cpt+1 <= max ? cpt+1 : 1);
    lastCpt = cpt;
    changeImage(path + cpt + ".png", cpt);
}

function previous(){
    cpt = (cpt-1 >= min ? cpt-1 : max);
    lastCpt = cpt;
    changeImage(path + cpt + ".png", cpt);
}

function changeImage(pathForImage,currentCpt){
    lastCpt = currentCpt;
    cpt = currentCpt;
    document.getElementById("change-image").src = pathForImage;
}

function changeImageButton(currentCpt){
    changeImage(path,currentCpt);
}

function setMinMaxPathApple(minimum, maximum, pathForImage){
    min = minimum;
    max = maximum;
    path = pathForImage;
}
