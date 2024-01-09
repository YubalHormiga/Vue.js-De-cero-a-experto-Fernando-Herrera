import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const usePokemon = () => {

    const pokemon = ref()
    const isLoading = ref(false)
    const errorMessage = ref()
    const router = useRouter();
    const pokemonId = ref(1);




    const onSubmit = () => {
        console.log("Pokemon a buscar ", pokemonId.value);
        router.push({ name: "pokemon-id", params: { id: pokemonId.value } });
    };

    const searchPokemon = async () => {
        isLoading.value = true
        pokemon.value = null

        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId.value}`
            console.log(url)
            const { data } = await axios(url)
            pokemon.value = data
            errorMessage.value = null
            console.log(data)

        } catch (error) {
            errorMessage.value = 'No se puedo cargar ese pokemon'
        }
        isLoading.value = false
    }

    searchPokemon()

    return {
        pokemon,
        isLoading,
        errorMessage,
        searchPokemon,
        router,
        pokemonId,
        onSubmit

    }
}


export default usePokemon