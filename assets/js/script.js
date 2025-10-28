const formEl = document.querySelector('.form');
const selection = document.querySelector('.form-select')
const endpoint = selection.value;
console.log (endpoint)
const url = `https://www.loc.gov/${endpoint}/?fo=json.`

const handleFormSubmit = (event)=> {
    event.preventDefault();


    
}

formEl.addEventListener('submit', handleFormSubmit )