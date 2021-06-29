import axios from 'axios'


export function googleLogin(accessToken) {
axios
    .post(`http://127.0.0.1:8000/auth/convert-token`, {
    token: accessToken,
    backend: "google-oauth2",
    grant_type: "convert_token",
    client_id: "1077743590467-8k4pec4emqdmmo2j8aoi78ndcnkcpfcr.apps.googleusercontent.com",
    client_secret: "UZfurPNWWjpx3K-CqE7gl0iP",
    })
    .then((res) => {
        console.log(res)
    if (res.data.access_token){
        localStorage.setItem('access_token','user logged in')
    }
    window.location.reload()
    });
}

export const base = 'http://127.0.0.1:8000'