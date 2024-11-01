<script setup>
    import LoginForm from '@/components/LoginForm.vue';
    import Tilbage from '@/components/Tilbage.vue';
    import LoggedIn from '@/components/LoggedIn.vue';

</script>

<template>
    <Tilbage />

    <LoginForm />
    <LoggedIn />
    
    <button @click="">Log ind</button>
</template>