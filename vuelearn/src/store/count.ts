import { defineStore } from 'pinia';
import { ref,computed } from 'vue';

const useCountStore = defineStore('count', () => {
    // 从 localStorage 获取值，并转换为数字
    const sum = ref(Number(localStorage.getItem("sum")) || 6);

    // 定义一个 getter 属性
    const bigSum = computed(() => sum.value * 10);

    // 定义一个 action
    function add(value: number) {
        sum.value += value; // 使用 sum.value 来访问和修改响应式状态
    }

    // 返回状态、getter 和 action
    return { sum, bigSum, add};
});

export default useCountStore;