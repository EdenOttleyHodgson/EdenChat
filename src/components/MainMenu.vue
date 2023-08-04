<script lang = 'ts'> 
    import router from '@/router'
    export default{
        methods: {
            openChat() {
                router.push('/chat')
            },
            openSettings(){
                router.push('/settings')
            }
        },
    }
</script>

<template style="height: 100%"> 
    <h1 class="mainTitle">Main Menu</h1>
    <div class="buttonDiv">
        <button @click="openChat" class="menuButton" style="width: 100%">Begin Chatting</button>
    </div>
    <div class="buttonDiv">
        <button @click="openSettings" class="menuButton" style="width: 100%">Settings</button>
    </div>
</template>

<style> 
    .menuButton{
        width: 100%;
        height: 100%;
        font-size:40px
    }

    .buttonDiv{
        width: calc(100%-10px);
        margin: 10px;
        height: 300px;
    }
</style>
