
function ebayParse(search){
    results = [[]];
    let request = new XMLHttpRequest();
    let ebayBase = ""
    let amazonBase = ''

    url = ebayBase + search;
    request.open("GET",url);
    request.send();
    request.onload = () => {
        console.log(request);
        myJSON = JSON.parse(request.response);
        values = myJSON["search_results"];
        for(let i = 0; i < myJSON.length; i++){
            results.push([values[i]["title"],values[i]["prices"],values[i]["condition"],values[i]["image"],values[i]["link"]])
        }
        
    }

    url = amazonBase + search;
    request.open("GET",url);
    request.send();
    request.onload = () => {
        console.log(request);
        myJSON = JSON.parse(request.response);
        values = myJSON["search_results"];
        for(let i = 0; i < myJSON.length; i++){
            results.push([values[i]["title"],values[i]["prices"],"New",values[i]["image"],values[i]["link"]])
        }
        
    }
    return results;
}