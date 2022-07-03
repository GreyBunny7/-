const form = document.getElementById('form');

function retrieveFormValue(event) {
    event.preventDefault();

    const imgs = form.querySelector('[name="imgs"]'),
    name = form.querySelector('[name="name"]'),
    emoshion = form.querySelector('[name="emoshion"]'),
    text = form.querySelector('[name="text"]');

    const val = {
        imgs: imgs.value,
        name: name.value,
        emoshion: emoshion.value,
        text: text.value
    };
    console.log('lol',val);
}

form.addEventListener('submit', retrieveFormValue);