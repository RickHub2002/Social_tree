const url = 'https://api.github.com/users/RickHub2002';

const getUrl = () => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        profileImg.src = data.avatar_url
    });
};

getUrl();