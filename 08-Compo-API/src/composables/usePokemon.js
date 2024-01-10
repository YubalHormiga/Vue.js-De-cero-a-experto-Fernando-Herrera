import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const usePokemon = () => {

    const pokemon = ref();
    const isLoading = ref(false);
    const errorMessage = ref();
    const router = useRouter();
    const defaultPokemonId = 1; // Valor por defecto
    const pokemonId = ref(defaultPokemonId);

    const onSubmit = () => {
        console.log("Pokemon a buscar ", pokemonId.value);
        router.push({ name: "pokemon-id", params: { id: pokemonId.value } });
    };

    const searchPokemon = async (id) => {
        isLoading.value = true;
        pokemon.value = null;
        
        // Si no se proporciona un valor específico para id, utiliza el valor predeterminado
        const searchId = id !== undefined ? id : defaultPokemonId;

        // console.log('pokemonId en searchPokemon.vue:', searchId);
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${searchId}`;
            // console.log(url);
            const { data } = await axios(url);
            pokemon.value = data;
            errorMessage.value = null;

        } catch (error) {
            errorMessage.value = 'No se pudo cargar ese Pokémon';
        }
        isLoading.value = false;
    }

    searchPokemon(); // Busca con el valor predeterminado

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

export default usePokemon;
