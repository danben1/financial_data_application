//fetch MSFT stock data
async function getData (){
    const response = await fetch (`https://api.aletheiaapi.com/StockData?symbol=${tickerInput.value}&summary=true&statistics=true`, {
        headers: { accept: "application/json" , key: "1903B8CC247449C89B54205C3940C453"}});
    //convert json to JS object --> store in data
    const data = await response.json();
    //print to check
    console.log(data);
}

//create DOM of required objects 
let tickerInput = document.querySelector('#ticker');
let tickerSearch = document.querySelector('#enter');

tickerSearch.addEventListener("click",getData)



