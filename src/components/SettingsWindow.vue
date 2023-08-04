<script lang ='ts'>
    export default{}
</script>

<template>
    <div>
        <div class="parent settings-flex-parent">
            <p class="child settings-flex-child" style="width: 150px"> Username </p>
            <input style="width: 200px" class="child flex-child"/>
            <button> Confirm </button>
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
