<template>
    <div>
        logout
        2秒後、ログイン画面へ遷移
    </div>
</template>

<script setup>
const router = useRouter();


setTimeout(() => {
    router.push({ path: "/login" });
}, 2000);
</script>

<style lang="scss" scoped></style>