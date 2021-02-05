import HEADER from '../templates/HEADER';
import home from '../pages/home';
import character from '../pages/character';
import error404 from '../pages/error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';


const routes = {
    '/': home,
    '/:id': character,
    '/contact': 'Contact'
}

const router = async () => {
    const header = null || document.getElementById('header'),
        content = null || document.getElementById('content');

    header.innerHTML = await HEADER();
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : error404;
    content.innerHTML = await render();
}

export default router;