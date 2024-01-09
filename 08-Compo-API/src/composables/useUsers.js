import { ref } from "vue";
import axios from "axios";

const useUsers = () => {


    const users = ref([]);
    const isLoading = ref(true);
    const currentPage = ref(1);
    const errorMsg = ref();

    const getUsers = async (page = 1) => {
        if (page <= 0) page = 1;
        isLoading.value = true;

        const url = `https://reqres.in/api/users?page=${page}`;
        try {
            const { data } = await axios(url);

            if (data.data.length > 0) {
                users.value = data.data;
                currentPage.value = page;
            } else if (currentPage.value > 0) {
                errorMsg.value = "No hay más registros";
            }
        } catch (error) {
            errorMsg.value = "Error al obtener los usuarios";
        }

        isLoading.value = false;
    };
    getUsers();

    const nextPage = () => getUsers(currentPage.value + 1);
    const prevPage = () => getUsers(currentPage.value - 1);




    return {
        users,
        isLoading,
        currentPage,
        errorMsg,
        nextPage,
        prevPage

    }
}

export default useUsers