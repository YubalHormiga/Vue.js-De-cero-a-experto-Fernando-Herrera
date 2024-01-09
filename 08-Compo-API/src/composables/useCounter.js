import { ref } from "vue"

const useCounter = ( initialValue = 5) => {
    const counter = ref(initialValue);

    const increase = () => counter.value++;
    const decrease = () => counter.value--;

    return {
        counter,
        increase,
        decrease
    }
}

export default useCounter