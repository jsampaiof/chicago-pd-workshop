const profs = document.querySelectorAll('.professores div');

import {prof} from "./teachersData.js";
import { biografhyElements } from "./biografhyElements.js";
import { biografhyContent } from "./biografhyContent.js";

profs.forEach((element) => {
    element.addEventListener("click", function() {
        let name, patente, bio, url, alt;
        switch (this.id) {
            case 'hank':
                // const name = prof.Voight.name;
                // const patente = prof.Voight.patente;
                // const bio = prof.Voight.bio;
                // const url = prof.Voight.photo.url;
                // const alt = prof.Voight.photo.alt;
                ({name, patente, bio} = prof.Voight);
                ({url, alt} = prof.Voight.photo);
                biografhyElements();
                const hank = new biografhyContent(name, patente, bio, url, alt);
                hank.setPhoto();
                hank.setBioNameAndPatente();
            break;
            case 'kevin':
                ({name, patente, bio} = prof.Atwater);
                ({url, alt} = prof.Atwater.photo);
                biografhyElements();
                const kevin = new biografhyContent(name, patente, bio, url, alt);
                kevin.setPhoto();
                kevin.setBioNameAndPatente();
            break;
            case 'adam':
                ({name, patente, bio} = prof.Ruzek);
                ({url, alt} = prof.Ruzek.photo);                
                biografhyElements();
                const adam = new biografhyContent(name, patente, bio, url, alt);
                adam.setPhoto();
                adam.setBioNameAndPatente();
            break;
            case 'kim':
                ({name, patente, bio} = prof.Burgess);
                ({url, alt} = prof.Burgess.photo);
                biografhyElements();
                const kim = new biografhyContent(name, patente, bio, url, alt);
                kim.setPhoto();
                kim.setBioNameAndPatente();
            break;
            case 'vanessa':
                ({name, patente, bio} = prof.Rojas);
                ({url, alt} = prof.Rojas.photo);
                biografhyElements();
                const vanessa = new biografhyContent(name, patente, bio, url, alt);
                vanessa.setPhoto();
                vanessa.setBioNameAndPatente();
            break;
            case 'jay':
                ({name, patente, bio} = prof.Halstead);
                ({url, alt} = prof.Halstead.photo);
                biografhyElements();
                const jay = new biografhyContent(name, patente, bio, url, alt);
                jay.setPhoto();
                jay.setBioNameAndPatente();
            break;
            case 'hailey':
                ({name, patente, bio} = prof.Upton);
                ({url, alt} = prof.Upton.photo);
                biografhyElements();
                const hailey = new biografhyContent(name, patente, bio, url, alt);
                hailey.setPhoto();
                hailey.setBioNameAndPatente();
            break;
            default:
                alert('nenhum professor encontrado');
            break;
        };
    });
});