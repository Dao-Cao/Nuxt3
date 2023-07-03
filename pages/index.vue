<template>
     2秒後、ログイン画面へ遷移
</template>

<script setup>
const router = useRouter();


setTimeout(() => {
    router.push({ path: "/login" });
}, 1000);
</script>

<style lang="scss" scoped></style>