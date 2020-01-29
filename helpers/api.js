export default function apiCaller(url){
    return fetch(url).then(res=>res.json());
}