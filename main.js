const getData=()=>{
    fetch('https://restcountries.eu/rest/v2/all').then((data)=>data.json()).then((result)=>{
        console.log(result);
        let div=document.querySelector('#main-container');
        let output='';

        result.forEach((data)=>{

            //languages
            let languages=Object.keys(data.languages);
            let nam=languages.map((items)=>{
                return data.languages[items].name;
            });

            //currencies
            let currency=Object.keys(data.currencies);
            let currencies=currency.map((items)=>{
                return data.currencies[items].name;
            });

            //symbol
            let currenciesSymbol=currency.map((items)=>{
                return data.currencies[items].symbol;
            });

            //display on page
            output+=`
                <div class="cards-div">

                    <div class="cards-div-img">
                        <img src="${data.flag}" alt="flag">
                    </div>

                        <div class="cards-div-text">
                            <h3>${data.name}</h3>
                            <p><span>capital: </span>${data.capital}</p>
                            <p><span>codes: </span>+${data.callingCodes}</p>
                            <p><span>currencies: </span>${currencies}</p>
                            <p><span>currency symbol: </span>${currenciesSymbol}</p>
                            <p><span>languages: </span>${nam}.</p>
                        </div>
                </div>
            `;
        });

        div.innerHTML=output;


    });
};

getData();

console.log(5);

const person={  
    userid:[
    {
        user:'joy',
        age:50
    },
    {
        user:'james',
        age:90
    }
],

language:'sopanish'};
console.log(person.language);

let names=Object.keys(person.userid);
let nam=names.map((items)=>{

    return person.userid[items].user;
})
console.log(nam)