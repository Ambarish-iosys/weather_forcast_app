import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'b421e522dbbef718bef873c4a16d10fb';
export const fetchWeather = async(query)=>{
 const {data} = await axios.get(URL,{
     params:{
        q:query,
        units:'metric',
        APPID:API_KEY
     }
 });
 return data;
}

