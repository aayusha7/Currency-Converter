import fetch from "node-fetch";

const response = fetch("https://www.wallhaven.cc")

response.then((result)=> {
    for(const key in result) {
        console.log(key);
    }
});