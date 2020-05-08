import axios from 'axios';
// import React from 'react';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {

    let changeableUrl = url

    if(country) {
        changeableUrl = `${url}/countries/${country}`
    }

    try {
        const { data:{ confirmed, recovered, deaths, lastUpdate} } = await axios.get(changeableUrl);   // Destructuring
        
        // const modifiedData = {
        //     confirmed,
        //     recovered,
        //     deaths,
        //     lastUpdate,
        // }

        // return modifiedData

        return {confirmed, recovered, deaths, lastUpdate}
    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyData = async ()=>{

    try{
        const {data} = await axios.get(`${url}/daily`);
        // console.log(data);

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));

       
        
        return modifiedData;
    }catch(error){
        console.log(error);
        
    }
}

export const fetchCountries = async () =>{

    try {
        const { data: {countries} } = await axios.get(`${url}/countries`)

        console.log(countries);
        
        return countries.map((country)=> country.name );
        
    } catch (error) {
        console.log(error);
        
    }
}

// Destructuring assignment is a cool feature that came along with ES6. 
// Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables. 
// That is, we can extract data from arrays and objects and assign them to variables.