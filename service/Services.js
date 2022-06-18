import { API_KEYS, endpoint, country } from "../config/Config";


export async function Services(category = 'general') {
    let articles  = await fetch(`${endpoint}?country=${country}&category=${category}`,{
        headers : {
            'X-API-KEY' : API_KEYS           
        }
    });
    let results = await articles.json();
     return results.articles;
  
}
