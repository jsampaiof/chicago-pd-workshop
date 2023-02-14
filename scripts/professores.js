const profs = document.querySelectorAll('.professores div');
const profdesc = document.querySelector('.professores-desc');
// const container3 = document.querySelector('.container-3');

const prof = {
    Voight: {
        name: 'Hank Voight',
        patente: 'Sargento',
        bio: 'Nasceu e cresceu em Chicago e se juntou à força policial local ainda jovem. Durante sua carreira, Hank trabalhou em vários casos importantes e tornou-se conhecido por sua abordagem implacável e não convencional na solução de casos criminais. Após anos de serviço na força policial, Hank foi promovido a chefe da Unidade de Inteligência do Departamento de Polícia de Chicago, onde lidera uma equipe dedicada a resolver os casos mais complexos da cidade. Com anos de experiência na força policial, Hank tem uma compreensão profunda da criminalidade em Chicago, o que o ajuda a solucionar casos complexos. Hank é visto como um líder forte e respeitado por sua equipe, motivando-os a trabalhar juntos para resolver casos.',
        photo: {
            url: '../Imagens/professores/png/voight.webp',
            alt: 'Hank voight'
        },
    },
    Atwater: {
        name: 'Kevin Atwater',
        patente: 'Detetive',
        bio: 'Kevin é um policial da Unidade de Inteligência do Departamento de Polícia de Chicago, trabalhando sob a liderança de Hank Voight. Ele é conhecido por sua paixão pelo trabalho e sua dedicação à proteção da comunidade. Kevin é talentoso na investigação de crimes, e é respeitado por suas habilidades como detetive. Ele tem uma personalidade descontraída e jovial, o que lhe permite estabelecer relacionamentos positivos com informantes e suspeitos. Além disso, ele é conhecido por sua coragem e lealdade à equipe, sempre disposto a arriscar sua vida para proteger outros.',
        photo: {
            url: '../Imagens/professores/png/atwater.webp',
            alt: 'Kevin Atwater'
        },
    },
    Ruzek: {
        name: 'Adam Ruzek',
        patente: 'Detetive',
        bio: 'Adam é um policial da Unidade de Inteligência do Departamento de Polícia de Chicago, trabalhando sob a liderança de Hank Voight. Adam é conhecido por sua inteligência e habilidade para solucionar problemas, tendo uma mente analítica que lhe permite seguir pistas e encontrar soluções para os casos mais complexos. Além disso, ele tem habilidades físicas e treinamento em artes marciais, o que o torna uma força a ser considerada durante as ações policiais mais intensas.',
        photo: {
            url: '../Imagens/professores/png/ruzek.webp',
            alt: 'Adam ruzek'
        },
    },
    Burgess: {
        name: 'Kim Burgess',
        patente: 'Detetive',
        bio: 'Kim é conhecida por sua dedicação e determinação, sempre disposta a fazer o trabalho extra para resolver os casos. Ela tem habilidades investigativas e é capaz de seguir pistas e coletar informações importantes para ajudar a resolver casos. Além disso, ela é conhecida por ser uma ótima parceira de trabalho, sempre disposta a colaborar com seus colegas para alcançar os melhores resultados. Kim é determinada, corajosa e confiante, sempre disposta a enfrentar desafios e riscos para proteger a comunidade. Ela também é conhecida por sua empatia e habilidade de se relacionar bem com outros, o que lhe permite estabelecer relacionamentos positivos com informantes e suspeitos.',
        photo: {
            url: '../Imagens/professores/png/burgess.webp',
            alt: 'Kim Burgess'
        },
    },
    Rojas: {
        name: 'Vanessa Rojas',
        patente: 'Detetive',
        bio: 'Vanessa é conhecida por sua dedicação e habilidade de se relacionar bem com outros, o que lhe permite estabelecer relacionamentos positivos com informantes e suspeitos. Além disso, ela é conhecida por sua habilidade de seguir pistas e coletar informações importantes para ajudar a resolver casos. Dedicada e talentosa, valorizada por suas habilidades investigativas e habilidades interpessoais. Ela é respeitada como uma peça importante da equipe de Hank Voight, sempre pronta a enfrentar desafios e trabalhar com sua equipe para proteger a comunidade.',
        photo: {
            url: '../Imagens/professores/png/rojas.webp',
            alt: 'Vanessa Rojas'
        },
    },
    Halstead: {
        name: 'Jay Halstead',
        patente: 'Detetive',
        bio: 'Jay é conhecido por sua habilidade investigativa e sua dedicação ao trabalho, sempre disposto a fazer o trabalho extra para resolver os casos. Além disso, ele é determinado e corajoso, sempre disposto a enfrentar desafios e riscos para proteger a comunidade. Jay também é conhecido por suas habilidades de liderança e habilidade de trabalhar bem com outros, o que lhe permite liderar sua equipe com sucesso e trabalhar bem com colegas e informantes. Ele é empático e capaz de se relacionar bem com outros, o que lhe permite estabelecer relacionamentos positivos com informantes e suspeitos.',
        photo: {
            url: '../Imagens/professores/png/halstead.webp',
            alt: 'Jay Halstead'
        },
    },
    Upton: {
        name: 'Hailey Upton',
        patente: 'Detetive',
        bio: 'Hailey é uma detetive habilidosa, tenaz e corajosa, com habilidades investigativas sólidas e uma personalidade forte e independente. Ela é conhecida por sua habilidade de resolver casos difíceis, trabalhando duro e sempre buscando respostas. Além disso, ela é descrita como sendo uma pessoa dedicada e leal, sempre disposta a ajudar sua equipe e colegas. Hailey também é inteligente, astuta e capaz de pensar fora da caixa, o que lhe permite resolver casos de maneira criativa. Ela é respeitada por sua determinação, habilidade de liderança e capacidade de trabalhar bem em equipe.',
        photo: {
            url: '../Imagens/professores/png/upton.webp',
            alt: 'Hailey Upton'
        },
    }
};

profs.forEach(function(element) {
    element.addEventListener("click", function() {
        switch (this.id) {
            case 'hank':
                const fullname = prof.Voight.name;
                const patente = prof.Voight.patente;
                const bio = prof.Voight.bio;
                const photourl = prof.Voight.photo.url;
                const photoalt = prof.Voight.photo.alt;
                biografhyElements();
                const hank = new biografhyContent(fullname, patente, bio, photourl, photoalt);
                hank.setPhoto();
                hank.setBioNameAndPatente();
            break;
            case 'kevin':
                const fullname1 = prof.Atwater.name;
                const patente1 = prof.Atwater.patente;
                const bio1 = prof.Atwater.bio;
                const photourl1 = prof.Atwater.photo.url;
                const photoalt1 = prof.Atwater.photo.alt;                
                biografhyElements();
                const kevin = new biografhyContent(fullname1, patente1, bio1, photourl1, photoalt1);
                kevin.setPhoto();
                kevin.setBioNameAndPatente();
            break;
            case 'adam':
                const fullname2 = prof.Ruzek.name;
                const patente2 = prof.Ruzek.patente;
                const bio2 = prof.Ruzek.bio;
                const photourl2 = prof.Ruzek.photo.url;
                const photoalt2 = prof.Ruzek.photo.alt;                
                biografhyElements();
                const adam = new biografhyContent(fullname2, patente2, bio2, photourl2, photoalt2);
                adam.setPhoto();
                adam.setBioNameAndPatente();
            break;
            case 'kim':
                const fullname3 = prof.Burgess.name;
                const patente3 = prof.Burgess.patente;
                const bio3 = prof.Burgess.bio;
                const photourl3 = prof.Burgess.photo.url;
                const photoalt3 = prof.Burgess.photo.alt;
                biografhyElements();
                const kim = new biografhyContent(fullname3, patente3, bio3, photourl3, photoalt3);
                kim.setPhoto();
                kim.setBioNameAndPatente();
            break;
            case 'vanessa':
                const fullname4= prof.Rojas.name;
                const patente4 = prof.Rojas.patente;
                const bio4 = prof.Rojas.bio;
                const photourl4 = prof.Rojas.photo.url;
                const photoalt4 = prof.Rojas.photo.alt;
                biografhyElements();
                const vanessa = new biografhyContent(fullname4, patente4, bio4, photourl4, photoalt4);
                vanessa.setPhoto();
                vanessa.setBioNameAndPatente();
            break;
            case 'jay':
                const fullname5 = prof.Halstead.name;
                const patente5 = prof.Halstead.patente;
                const bio5 = prof.Halstead.bio;
                const photourl5 = prof.Halstead.photo.url;
                const photoalt5 = prof.Halstead.photo.alt;
                biografhyElements();
                const jay = new biografhyContent(fullname5, patente5, bio5, photourl5, photoalt5);
                jay.setPhoto();
                jay.setBioNameAndPatente();
            break;
            case 'hailey':
                const fullname6 = prof.Upton.name;
                const patente6 = prof.Upton.patente;
                const bio6 = prof.Upton.bio;
                const photourl6 = prof.Upton.photo.url;
                const photoalt6 = prof.Upton.photo.alt;
                biografhyElements();
                const hailey = new biografhyContent(fullname6, patente6, bio6, photourl6, photoalt6);
                hailey.setPhoto();
                hailey.setBioNameAndPatente();
            break;
            default:
                alert('nenhum professor encontrado');
            break;
        };
    });
});

function biografhyElements(){
    if (profdesc.childNodes.length > 0) {
        while (profdesc.firstChild) {
            profdesc.removeChild(profdesc.firstChild);
        }
    }
    if(profdesc.style.display = 'none'){
        profdesc.style.display = 'flex';
    }
    let divprofpic = document.createElement('div');
    let divprofbio = document.createElement('div');
    divprofpic.setAttribute('class', 'prof-pic');
    divprofbio.setAttribute('class', 'prof-bio');
    profdesc.appendChild(divprofpic)
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
}

class biografhyContent{
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