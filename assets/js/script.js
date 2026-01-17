const formEl = document.querySelector('.form');


const handleFormSubmit = (event)=> {
    event.preventDefault();

    const formatInputVal = document.querySelector('#format-input').value;
    const searchInputVal = document.querySelector('#search-input').value;

    if(!searchInputVal){
        alert('You need a search input value!');
        return;
    }

    const queryString = `./search-results.html?q=${searchInputVal}&format=${formatInputVal}`;

    location.assign(queryString);
}

formEl.addEventListener('submit', handleFormSubmit )