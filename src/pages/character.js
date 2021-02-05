import getHash from '../utils/getHash';
import getData from '../utils/getData';

const character = async () => {
    const id = getHash();
    const Character = await getData(id);
    const view = `
        <div class="characters-inner">
            <article class="characters-card">
                <img src="${Character.image}" alt="${Character.name}">
                <h2>${Character.name}</h2>
            </article>
            <article class="characters-card">
                <h3>Episodes:<span>${Character.episode.length}</span></h3>
                <h3>Status:<span>${Character.status}</span></h3>
                <h3>Species:<span>${Character.species}</span></h3>
                <h3>Gender:<span>${Character.gender}</span></h3>
                <h3>Origin:<span>${Character.origin.name}</span></h3>
                <h3>Last location:<span>${Character.location.name}</span></h3>
            </article>
        </div>
    `;
    return view;
};

export default character;