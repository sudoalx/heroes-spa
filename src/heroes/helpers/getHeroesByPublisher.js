import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
    const validPub = ["Marvel Comics", "DC Comics"]
    if (!validPub.includes(publisher)) {
        throw new Error(`${publisher} is not valid.`)
    }

    return heroes.filter(heroe => heroe.publisher === publisher)

}