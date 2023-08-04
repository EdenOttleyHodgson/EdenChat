<script lang ='ts'>
    function validateName(): string {
        var name = localStorage.getItem("name")
        if (name === null) {
            return 'Anonymous'
        }
        return name
    }
    export default{
        methods: {
            updateName() {
                console.log("Updating name to " + this.currentUsername)
                localStorage.setItem("name", this.currentUsername)
            }
        
        },
        data() {
            return{
                currentUsername: validateName()
            }
        }
    }
</script>

<template>
    <div>
        <div class="parent settings-flex-parent">
            <p class="child settings-flex-child" style="width: 150px"> Username </p>
            <input v-model="currentUsername" style="width: 200px" class="child flex-child"/>
            <button @click="updateName()"> Confirm </button>
        </div>
    </div>
    <div>
        <div class="parent settings-flex-parent">
            <p class="child settings-flex-child" style="width: 150px"> IP </p>
            <input style="width: 200px" class="child settings-flex-child"/>
            <button> Confirm </button>
        </div>
    </div>
</template>

<style> 
    .settings-flex-parent{
        display: inline-flex;
    }
    .settings-flex-child{
        flex: 1;
    }
</style>
