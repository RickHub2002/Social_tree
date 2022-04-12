const url = 'https://api.github.com/users/RickHub2002';
//Se quiser alterar para a sua foto de usuário do github é só colocar no lugar do "RickHub2002" o seu nome de usuário.


const getUrl = () => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        profileImg.src = data.avatar_url
    });
};

getUrl();
