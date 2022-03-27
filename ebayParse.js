
export function ebayParse(search){
    let results = [[]];
    let request = new XMLHttpRequest();
    let ebayBase = "https://api.countdownapi.com/request?api_key=4C52C35621D74514BE459FD2FAEE840E&type=search&ebay_domain=ebay.com&search_term=";
    // let amazonBase = ''

    let url = ebayBase + search;
    async function getapi(url){
        const repsonse = await fetch(url);
        var file = await response.JSON();
        console.log(file);
    }
    getapi(url);
    let myJSON = JSON.parse(file);
    let values = myJSON["search_results"];
    console.log(values);
    for (let i = 0; i < values.length && i < 16; i++) {
        // if(values[i].includes("condition")){
        //     results.push([values[i]["title"],values[i]["prices"],values[i]["condition"],values[i]["image"],values[i]["link"]]);
        // }
        // else{
        results.push([values[i]["title"], values[i]["price"]["value"], "New", values[i]["image"], values[i]["link"]]);
        // }
        //results.push(values[i]['title']);
    }
    console.log(results);
    return results;




    /*

    let url = ebayBase + search;
    request.open("GET",url);
    request.send();
    request.onload = () => {
        console.log(request);
        let myJSON = JSON.parse(request.response);
        let values = myJSON["search_results"];
        for(let i = 0; i < values.length && i < 16; i++){
            // if(values[i].includes("condition")){
            //     results.push([values[i]["title"],values[i]["prices"],values[i]["condition"],values[i]["image"],values[i]["link"]]);
            // }
            // else{
                 results.push([values[i]["title"],values[i]["price"]["value"],"New",values[i]["image"],values[i]["link"]]);
            // }
            //results.push(values[i]['title']);
        }
        console.log(results);
        return results;    
    }
    
    // url = amazonBase + search;
    // request.open("GET",url);
    // request.send();
    // request.onload = () => {
    //     console.log(request);
    //     myJSON = JSON.parse(request.response);
    //     values = myJSON["search_results"];
    //     for(let i = 0; i < myJSON.length && i < 16; i++){
    //         results.push([values[i]["title"],values[i]["prices"]["values"],"New",values[i]["image"],values[i]["link"]]);
    //     }
        
    // }
    */
}