const formEl = document.querySelector('.form');
const resultsEl = document.querySelector('#results');
const resultsHeader = document.querySelector('.results-header');

const getParams = () => {
    const searchParamsArr = document.location.search.split('&')

    const query = searchParamsArr[0].split('=').pop();
    const format = searchParamsArr[1].split('=').pop();
}

getParams();