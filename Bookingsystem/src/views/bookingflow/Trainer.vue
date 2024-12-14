<script setup>
    import LoginForm from '@/components/LoginForm.vue';
    import NavBar from '@/components/NavBar.vue';
 

</script>

<template>
    <NavBar />
    <div class="content"></div>
    <div>
        <div class="flow-block">
            <LoginForm />
        </div>

    </div>

</template>

<style scoped>

.flow-block{
 max-width: 50vw;
 margin-left: 25vw;
}
</style>

