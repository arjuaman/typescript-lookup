//Events can be created with the Event constructor as follows:

const brn = new Event('born');
const ded = new CustomEvent('died', { detail: { lastWords: "Sayonara!" } });

document.addEventListener('DOMContentLoaded', function () {
    let elem = document.querySelector('div');
    addParagraph(elem, 'This is a paragraph.');
    addParagraph(elem, 'A new Star Wars movie is coming soon.');
    elem.addEventListener('click', function (ev) {
        removeParagraph(elem, elem.firstElementChild);
    })
});

function addParagraph(parent, txt) {
    let p = document.createElement('p');
    p.textContent = txt;
    //set up and dispatch events
    p.addEventListener('born', wasBorn);
    p.addEventListener('died', hasDied);
    p.dispatchEvent(brn);
    //add to screen
    parent.appendChild(p);
}

function removeParagraph(parent, child){
    // dispatch event
    child.dispatchEvent(ded);
    //remove element from screen
    parent.removeChild(child);
}

function wasBorn(ev){
    console.log(ev.type, ev.target);
}

function hasDied(ev){
    console.log(ev.type, ev.target, ev.detail.lastWords);
    //remove the listeners
    ev.target.removeEventListener('born', wasBorn);
    ev.target.removeEventListener('died', hasDied);
}
