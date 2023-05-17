import pokemonApi from "@/api/pokemosApi"


const getPokemons = () => {

    const pokemonsArr = Array.from(Array(650))
    return pokemonsArr.map((_, index) => index + 1)
}

const getPokemonOptions = async() => {
    const mixPokemons = getPokemons().sort(() => Math.floor(Math.random() - 0.5))
    const pokemons =await getPokemonNames(mixPokemons.slice(0, 4))
    return pokemons
}

const getPokemonNames = async ([a, b, c, d] = []) => {
    //    const resp = await pokemonApi.get(`/1`)
    //    console.log(resp.data.name)

    const arrPromises = [
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`)
    ]
    const [p1, p2, p3, p4] = await Promise.all(arrPromises)
    // console.log(resps) sustituimos resps por p1,p2,p3,p4 dest
    // console.log(a,b,c,d)
    return [
        {name: p1.data.name, id:p1.data.id},
        {name: p2.data.name, id:p2.data.id},
        {name: p3.data.name, id:p3.data.id},
        {name: p4.data.name, id:p4.data.id}
    ]
}

export default getPokemonOptions