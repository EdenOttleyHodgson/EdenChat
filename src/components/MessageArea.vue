<script lang='ts'>
    let currentId = 0 
    interface message {
        id: number,
        sender: string,
        content: string
    }
    export default {
        data() {
            let messageList: message[] = [{
                        id:currentId++, 
                        sender:"system", 
                        content:"Welcome to EdenChat!"
                    }
                ]
            return {        
                messageList
            }
        },
        methods: {
            addMessage(sender: string, content: string) {
                console.log("add message called: " + sender + " " + content)
                this.messageList.push({
                    id: currentId++, 
                    sender: sender, 
                    content: content
                })
                this.messageList.forEach((msg) => {
                    console.log(msg.id +"," +msg.sender +"," + msg.content)
                })
            }
        },
        expose: ['addMessage']
    }
</script>

<template>
    <div class="box" :style="{height: '92.5%', marginBottom: '5px'}">
        <ul>
            <li v-for="message in messageList" :key="message.id">
                {{message.sender + ":" + message.content}}
            </li>
        </ul>
    </div>
</template>
