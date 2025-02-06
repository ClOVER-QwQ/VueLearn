import {ref} from "vue";

export default function () {
    let temp = ref(10)
    let height = ref(0)

    function changeTemp() {
        temp.value = temp.value + 10
    }

    function changeHeight() {
        height.value++
    }

    return {temp,height,changeHeight,changeTemp}
}