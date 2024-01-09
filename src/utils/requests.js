export const get = async (api)=>{
    const res1 = await fetch(api);
    const res2 = await res1.json()
    return res2;
}