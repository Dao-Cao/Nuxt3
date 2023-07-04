<template>
    2秒後、ログイン画面へ遷移
</template>

<script setup lang="ts">
import type { UserModel } from '~~/server/model/user';

const data = ref<UserModel[]>([])

const fetchData = async () => {
    try {
        console.log(123)
        const result = await $fetch('/api/user')
        data.value =result.data as UserModel[]
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
onMounted(()=>{
    fetchData()
})

const router = useRouter();
setTimeout(() => {
    router.push({ path: "/login" });
}, 1000);
</script>

<style lang="scss" scoped></style>