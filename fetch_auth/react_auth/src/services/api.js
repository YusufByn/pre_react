//
const API_URL = import.meta.env.VITE_API_URL;

// logique d inscription
export async function register(email, password, birth_date, birth_place) {
    // on envoie les données à l'API
    const response = await fetch(`${API_URL}/api/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        // on envoie les données à l'API sur format JSON
        body: JSON.stringify({ email, password, birth_date, birth_place }),
    });
    const data = await response.json();
  
    //gestion des erreurs
    if (!response.ok) {
        throw new Error(data.Error || 'Inscription a échoué');
    }
    return data;
}


//logique de connexion
export async function login(email, password) {
    const response = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });
    // on récupère les données de la réponse en format JSON
    const data = await response.json();
    //gestion des erreurs
    if (!response.ok) {
        throw new Error(data.Error || 'Connexion a échoué');
    }
    return data;
}


export async function getProfil(token) {
// on récupère les données de l'utilisateur en format JSON
    const response = await fetch(`${API_URL}/api/auth/profil`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // passer le token dans le format qui est attendu dans le api
            "Authorization": `Bearer ${token}`,
        },
    });

    const data = await response.json();
    //gestion des erreurs
    if (!response.ok) {
        throw new Error(data.Error || 'Récupération du profil a échoué');
    }

    return data;
}

export async function getFactsAi(){
    const reponse = await fetch(`${API_URL}/api/ai/test`,{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json'
        },
    });

    const data = await reponse.json();

    if(!reponse.ok){
        throw new Error(data.error || 'récup du fait échoué');

    }

    return data;
}

export async function talkWithAi(prompt){
    const response = await fetch(`${API_URL}/api/ai/prompt`, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({prompt}),
    })

    const data = await response.json();
    //gestion des erreurs
    if (!response.ok) {
        throw new Error(data.Error || 'Récupération du profil a échoué');
    }

    return data;
}