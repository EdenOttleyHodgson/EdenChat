<script lang='ts'>
    import MessageArea from '@/components/MessageArea.vue'
    import MessageInputBox from '@/components/MessageInputBox.vue'
    import CurrentUsersBox from '@/components/CurrentUsersBox.vue'
    var username = localStorage.getItem("name")
    export default{
        data() {
    
        },
        components: {
            MessageArea,
            MessageInputBox,
            CurrentUsersBox
        },
        methods:{
            onMessageSent(msg: string){
                if(username) {
                    (this.$refs.messageAreaRef as InstanceType<typeof MessageArea>)
                        .addMessage(username, msg)
                }
            }
        }
    }
</script>

<template>
    <!--Outer Background box-->
    <div class = "flex-container">
        <!--left most chat window box-->
        <div class="flex-child" :style="{width: '70%', marginRight: '5px'}">
            <MessageArea ref="messageAreaRef"/>
            <MessageInputBox @message-sent="(msg) => onMessageSent(msg)" />
        </div>
        <!--right most current users box-->
        <div class="flex-child" :style="{width: '29%', marginLeft:'5px'}">
            <CurrentUsersBox/>
        </div>
    </div>
</template>

<style>
    .flex-container {
        display: flex;
        height: 95%;
        min-height: 95vh;
    } 
</style>


