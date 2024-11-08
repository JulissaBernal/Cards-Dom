const IMAGE_URL = "https://placehold.co/200"
const CARD_CONTAINER = document.getElementById("container");

const users = [
    {
        id: 1,
        user_name: 'User1',
        description: 'lorem ipsum',
        age: '46',
        fav_music: {
            bands: [
                'Band 1', 'Band 2', 'Band 3', 'Band 4'
            ]
        }
    },
    {
        id: 2,
        user_name: 'User LastName',
        description: 'Lorem lorem lorem',
        age: '23',
        fav_music: {
            bands: [
               'Band 1', 'Band 2', 'Band 3', 'Band 4'
            ]
        }
    }
]
const crearImg=()=>{
    const image = document.createElement("img");
    image.src = IMAGE_URL;
    image.alt = "User";
    return image
};
const crearInfo=(user)=>{
    const descripContenedor=document.createElement('div');
    const userName = document.createElement("h3");
    const description = document.createElement("p");
    const age = document.createElement("p");
    userName.textContent = user.user_name;
    description.textContent = user.description;
    age.textContent = users.age; 
    descripContenedor.append(userName,description,age)
    return descripContenedor
}

const crearListMusic=(bands)=>{
    const bandsList = document.createElement("ul");
    bands.forEach(band => {
        const item = document.createElement("li");
        item.textContent = band;
        bandsList.appendChild(item)
    });
    return bandsList;
}

const crearCardUser=(user)=>{
    const cardContainer=document.createElement('div')
    cardContainer.classList.add('rojo');
    const img=crearImg();
    const info=crearInfo(user);
    const list=crearListMusic(user.fav_music.bands);
    cardContainer.append(img,info,list)
    return cardContainer
};

const renderCards=(users)=>{
    users.forEach(user =>{
        const cardUser=crearCardUser(user)
        CARD_CONTAINER.appendChild(cardUser);
    })
}

renderCards(users);


