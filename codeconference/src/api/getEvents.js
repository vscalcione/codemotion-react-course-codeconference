const api = 'http://localhost:5002';
let token = localStorage.token;
if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

//Con export tutti i file che importano questo potranno utilizzare la funzione 
export const getAllEvents = () =>
    //per inserire variabili all'interno di una stringa bisogna utilizzare dei backtik (`) si fa con alt + \
    fetch(`${api}/events`, { headers })
        //Vedere le promise javascript 
        .then(res => res.json())
        .then(data => data.events)
        .catch(err => {
            console.log("Error on get API")
        })
