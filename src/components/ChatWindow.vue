<script lang='ts'>
    export default{
    }
</script>

<template>
    <!--Outer Background box-->
    <div class = "flex-container">
        <!--left most chat window box-->
        <div class="flex-child" :style="{width: '70%', marginRight: '5px'}">
            <div class="box" :style="{height: '75%', marginBottom: '5px'}">
                upper
            </div>
            <div class="box" :style="{height: '22.5%', marginTop: '10px'}">
                lower
            </div>
        </div>
        <!--right most current users box-->
        <div class="flex-child" :style="{width: '29%', marginLeft:'5px'}">
            <div class="box" :style="{height: '99.35%'}">
                upper
            </div>
        </div>
    </div>
</template>

<style>
    .flex-container {
        display: flex;
        height: 95%;
        min-height: 95vh;
    }
    

    .box{
        color: black;
        background: gray;
        border: 3px solid lightgray;
    }
    .magenta{
        background: magenta;
    }
    .green{
        background:green;
    }
    .yellow{
        background:yellow;
    }
    .red{
        background:red;
    }
</style>


