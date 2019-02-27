function save(data) {
    const string = JSON.stringify(data);

    localStorage.setItem('amounts', string);
}

function load() {
    const string = localStorage.getItem('amounts');
    const data = JSON.parse(string);

    return data;
}


export {save, load};
