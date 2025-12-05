const API_KEY = import.meta.env.VITE_API_KEY;

// endpoint GET users
export async function getUsers(page){
    const reponse = await fetch(`https://reqres.in/api/users?page=${page}`, {
        method: 'GET',
        headers: {
            'x-api-key': API_KEY
        },
    })

    const data = await reponse.json();

    if(!reponse.ok){
        throw new Error(data.error || "y'a eu un soucis pour les users l'amis")
    }

    return data
}

// endpoint pour les users par id
export async function getUsersById(id){
    const reponse = await fetch(`https://reqres.in/api/users/${id}`,{
        method: 'GET',
        headers: {
            'x-api-key': API_KEY
        },
    })

    const data = await reponse.json();

    if(!reponse.ok){
        throw new Error(data.error || "soucis avec l'id ou autre")
    }

    return data
}