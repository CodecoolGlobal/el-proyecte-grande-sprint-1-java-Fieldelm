export async function getApi(url){
    let data = await fetch(url);
    return await data.json();
}