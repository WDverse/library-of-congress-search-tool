const formEl = document.querySelector('.form');


const handleFormSubmit = (event)=> {
    event.preventDefault();
    
    const formatInputVal = document.querySelector('#format-input').value;
    const searchInputVal = document.querySelector('#search-input').value;

    
}

formEl.addEventListener('submit', handleFormSubmit )