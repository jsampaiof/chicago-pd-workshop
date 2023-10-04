export class biografhyContent{
    #name;
    #patente;
    #bio;
    #photourl;
    #photoalt;
    constructor(name, patente, bio, photourl, photoalt){
        this.#name = name;
        this.#patente = patente;
        this.#bio = bio;
        this.#photourl = photourl;
        this.#photoalt = photoalt;
    };

    setPhoto(){
        let img = document.querySelector('.prof-pic img');
        img.src = this.#photourl;
        img.alt = this.#photoalt;
    }

    setBioNameAndPatente(){
        let fullName = document.querySelector('.prof-full-name h1');
        let patente = document.querySelector('.prof-full-name p');
        let bio = document.querySelector('.prof-complete-bio p');
        fullName.innerHTML = this.#name;
        patente.innerHTML = this.#patente;
        bio.innerHTML = this.#bio;
    }
}