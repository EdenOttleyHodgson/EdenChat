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
                if(this.currentMessage != '') {
                    this.$emit('messageSent', this.currentMessage)
                }
            }
        }
    }
</script>

<template> 
    <div class="box" :style="{height: '5%', marginTop: '10px'}">
        <input v-model="currentMessage" placeholder="Enter Message Here" class="messageInputArea"/>
        <button @click="sendMessage" class="sendMessageButton">Send Message</button>
    </div>
</template>
<style> 
    .messageInputArea {
        width: 93%;
        height: 90%;
        float: left;
        background: transparent;
    }
    .sendMessageButton{
        height: 100%;
        width: 6.1%
    }
</style>
