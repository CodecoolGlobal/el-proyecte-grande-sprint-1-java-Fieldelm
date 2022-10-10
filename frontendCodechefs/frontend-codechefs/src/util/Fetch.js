export async function getApi(url){
    let token = JSON.parse(localStorage.getItem("token"))
    let data = await fetch(url, {
        headers :{'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `${token}`}
    });
    return await data.json();
}

export async function postFetch(url, payLoad){
    const rawResponse = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payLoad)
    });
    return rawResponse;
}

