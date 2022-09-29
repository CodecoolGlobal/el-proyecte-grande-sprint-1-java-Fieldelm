export async function getApi(url){
    let data = await fetch(url);
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

