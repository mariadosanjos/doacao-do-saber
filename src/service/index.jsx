async function loadBooks() {
    const response = await fetch('http://localhost:8080/books');
    console.log(response)
    return await response.json();
}

export default loadBooks