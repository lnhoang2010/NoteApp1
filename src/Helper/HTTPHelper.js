export const post = async (url) => {
    const data = await fetch(url);
    responde = data.json();
    return responde;
}
