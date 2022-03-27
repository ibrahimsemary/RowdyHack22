
results = [[]];
let request = new XMLHttpRequest();

request.open("GET", "https://jsonplaceholder.typicode.com/users");
request.send();
request.onload = () => {
    console.log(request);
    // if(request.status === 200){
    //     console.log(JSON.parse(request.response));
    // }
    // else{
    //     console.log('error $(request.status) $(request.statusText)');
    // }
    myJSON = JSON.parse(request.response);
    values = myJSON["search_results"];
    for(let i = 0; i < myJSON.length; i++){
        results.push([values[i]["title"],values[i]["prices"],values[i]["condition"],values[i]["image"],values[i]["link"]])
    }
    console.log(results);
}