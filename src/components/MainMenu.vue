<script lang = 'ts'> 
    import router from '@/router'
    export default{
        methods: {
            openChat() {
                router.push('/chat')
            }
        }
    }
</script>

<template> 
    <h1>Main Menu</h1>
    <div>
        <button @click="openChat">Begin Chatting</button>
    </div>
    <div>
        <button>Settings</button>
    </div>
</template>
