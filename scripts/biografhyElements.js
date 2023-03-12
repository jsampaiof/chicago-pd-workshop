const profdesc = document.querySelector('.professores-desc');

export function biografhyElements(){
    if (profdesc.childNodes.length > 0) {
        while (profdesc.firstChild) {
            profdesc.removeChild(profdesc.firstChild);
        };
    };
    if(profdesc.style.display = 'none'){
        profdesc.style.display = 'flex';
    };
    let divprofpic = document.createElement('div');
    let divprofbio = document.createElement('div');
    divprofpic.setAttribute('class', 'prof-pic');
    divprofbio.setAttribute('class', 'prof-bio');
    profdesc.appendChild(divprofpic);
    profdesc.appendChild(divprofbio);
    let img = document.createElement('img');
    let fullname = document.createElement('div');
    let completebio = document.createElement('div');
    fullname.setAttribute('class', 'prof-full-name');
    completebio.setAttribute('class', 'prof-complete-bio');
    divprofpic.appendChild(img);
    divprofbio.appendChild(fullname);
    divprofbio.appendChild(completebio);
    let nameh1 = document.createElement('h1');
    let patente = document.createElement('p');
    let biop = document.createElement('p');
    fullname.appendChild(nameh1);
    fullname.appendChild(patente);
    completebio.appendChild(biop);
};