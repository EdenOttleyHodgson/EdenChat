<script lang = 'ts'>
    export default{
        emits: ['messageSent'],
        data() {
            return {
                currentMessage: ''
            }
        },
        methods: {
            sendMessage(){
                this.$emit('messageSent', this.currentMessage)
            }
        }
    }
</script>

<template> 
    <div class="box" :style="{height: '5%', marginTop: '10px'}">
        <input v-model="currentMessage" placeholder="Enter Message Here"/>
        <button @click="sendMessage">Send Message</button>
    </div>
</template>
