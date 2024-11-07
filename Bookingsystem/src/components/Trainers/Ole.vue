<script setup>
    import { defineProps } from 'vue';

    // Define the props that ChooseTrainer will receive
    const props = defineProps({
        fullName: String,
    });
</script>

<template>
    <h1>Allans Kalender</h1>
    <div class="screenWrapper" v-if="wrapper">
        <h1> Vælg ønsket tid </h1>
        <div class="trainerCardWrapper">
            <div class="trainerCard">

                <!-- LAV ELEMENTER OM TIL API CALLS N SHIZ -->
                <h3>Allan</h3>
                <h3>22/10</h3>

                <!-- SEND TIL SE TIDER ELLER DATABASE -> SE TIDER -->
                <button>Vælg tid</button> 

            </div>
            <div class="trainerCard">
                <h3>Allan</h3>
                <h3>22/10</h3>

                <!-- SEND TIL SE TIDER ELLER DATABASE -> SE TIDER -->
                <button>Vælg tid</button>

            </div>
        </div>
    </div>
</template>

<style scoped>

    * {
        box-sizing: border-box;
    }

    .screenWrapper {
        margin: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .trainerCardWrapper {
        display: flex;
        gap: 12px;
    }

    .trainerCard {
        padding: 16px;
        border: 1px solid black;
        width: fit-content;
    }


</style>