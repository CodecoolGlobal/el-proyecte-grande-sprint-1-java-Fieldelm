
export async function getApi(url){
    const token = localStorage.getItem("Token")
    let data = await fetch(url, {
        method: 'GET', // GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors,cors, same-origin
        cache: 'no-cache', // default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include,same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            'Authorization': {token}
        },
        redirect: 'follow', // manual, follow, error
        referrerPolicy: 'no-referrer', // no-referrer,no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });
    return await data.json();
}

export async function postApi(url, payLoad){
    const token = localStorage.getItem("Token")
    const rawResponse = await fetch(url, {
        method: 'POST', // GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors,cors, same-origin
        cache: 'no-cache', // default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include,same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            'Authorization': {token}
        },
        redirect: 'follow', // manual, follow, error
        referrerPolicy: 'no-referrer', // no-referrer,no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(payLoad) // body data type must match "Content-Type" header
    });
    return rawResponse;
}

