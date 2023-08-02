<script lang='ts'>
    export default {
       mounted() {
            this.$router.push("/menu")
       }
    }
</script>

<template>

    <RouterView/>
</template>

<style> 
    body {
        background: black;
        color: white;
    }
</style>
