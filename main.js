//create DOM of required objects 
let tickerInput = document.querySelector('#ticker');
let tickerSearch = document.querySelector('#enter');
let company = document.querySelector('#company');
let year = document.querySelector('#year');
let q = document.querySelector('#q');
let earnings_search = document.querySelector('#earnings_search');
let earnings_call_list = document.querySelector('#earnings_call_list');
let find_highlights = document.querySelector('#find-highlights');
let earningsHighlights = document.querySelector('#earnings_highlights');
let summaryP = document.querySelector('#summary');
let statisticsP = document.querySelector('#statistics');
console.log(summaryP);
console.log(statistics);

//FUNCTIONS



//fetch stock data
async function getData (){
    //send GET request
    const response = await fetch (`https://api.aletheiaapi.com/StockData?symbol=${tickerInput.value}&summary=true&statistics=true`, {
        headers: { accept: "application/json" , key: "1903B8CC247449C89B54205C3940C453"}});
    //convert json to JS object --> store in data
    const data = await response.json();
    //Output contents of data to screen under Summary and Statistics Headings
      //SUMMARY
        //declare empty string variable to store Summary Object
        let sumOutput = "";
        //iterate through summary object and add key:value pair to sumOutput Variable
        for (let key in data.Summary){
            sumOutput += `${key}: ${data.Summary[key]}<br>`;    //br added to return new line
        }
        //change content under summary heading to sumOutput (innerHTML as <br> wont read if change textcontent)
        summaryP.innerHTML = sumOutput;                         
      //STATISTICS
        //same as summary
        let statOutput = "";
        for (let key in data.Statistics){
            statOutput += `${key}: ${data.Statistics[key]}<br>`;
        }
        statisticsP.innerHTML = statOutput;
    
}

//fetch earnings call data
async function getEarnings (){
    //send GET request
    const response = await fetch (`https://api.aletheiaapi.com/SearchEarningsCalls?company=${company.value}&year=${year.value}`,
    {headers: {accept: "application/json", key: "1903B8CC247449C89B54205C3940C453"}});
    //store response in data
    const data = await response.json();
    console.log(data[0].Period);
    //iterate through data array to determine how many quarters are present and display as list
    for (i=0 ; i<=data.length ; i++){
        let quarter = data[i].Period;
        let li = document.createElement('li');
        li.textContent = `Quarter ${quarter +1}`; //+1 to convert period reference to quarter reference
        earnings_call_list.appendChild(li);
    }
    console.log(data);
}

//fetch earnings call highlights
async function getHighlights (){
    //send GET request
    const response = await fetch (`https://api.aletheiaapi.com/EarningsCallHighlights?company=${company.value}&year=${year.value}&quarter=${q.value}&top=12`,
    {headers: {accept: "application/json", key: "1903B8CC247449C89B54205C3940C453"}});
    //store response in data
    const data = await response.json();
    //iterate through data array and return remarks as new list
    for (i=0 ; i<=data.length ; i++){
        let remark = data[i].Remark;
        let newli = document.createElement('li');
        newli.textContent = remark; 
        if (earningsHighlights){
            earningsHighlights.appendChild(newli);
        } else {
            return "error";
        }
    }
    console.log(data);
}

//add event listeners
tickerSearch.addEventListener("click",getData);
earnings_search.addEventListener("click",getEarnings);
find_highlights.addEventListener("click",getHighlights)

//Create async function called getAPI
    //create fetch request from API 
        //pass company, year and quarter variables as options into URL using ${}✅
        //store promise in variable called return ✅
        //Json return and store array in variable called data ✅
    //access each object in data array and return to list so can see result
        //iterate over each object in array (for loop)
            //access period property in each object
            //convert to Q e.g. period 0 = q1
            //create new DOM Li element store in variable called quarter
            //reassign textcontent property of Li element to be value of quarter 
        //create ol html element with id #earningscalls ✅
            //create DOM of HTML element store in variable ✅
//create input fields to store user selection for company, year and quarter
    //create input field for company
        //create HTML input element with ID company ✅
        //create DOM of input store in variable called company ✅
        //access value property of company 
    //create input field for year
        //create HTML input element with ID year ✅
        //create DOM ✅
    //create dropdown list for q 

        //include option for none (default)
    //create submit button to record user inputs
