async function loadBooks() {
    let url = './books.json';
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
}
loadBooks();