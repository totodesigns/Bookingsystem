<script setup>
import { ref} from "vue";
import { db } from "../firebase";
import { ref as dbRef, set } from "firebase/database";
import NavBar from '@/components/NavBar.vue'
import { useRouter } from 'vue-router';

const name = ref("");
const email = ref("");
const password = ref("");
const message = ref("");

async function register() {
    const usersRef = dbRef(db, "trainerInfo/" + name.value.toLowerCase()); //says the data vill go to trainerinfo in the db

    // await waits for the set() function to finish before continuing, type shit
    await set(usersRef, { // set(), takes the email and pw and puts it under the path in usersRef
      name: name.value,
      email: email.value,
      password: password.value,
    },
  );
    // we do a lil reset of the fields yknow
    name.value = "";
    email.value = "";
    password.value = "";
    message.value = "Træner Registreret!";
}


// forbedring
const router = useRouter();
let goToChooseOption = () => {
    router.push("/ChooseOption");
    
};

</script>

<template>
  <NavBar></NavBar>


  <div class="flow-content">
    <button @click="goToChooseOption">< Tilbage til Oversigt</button>
    <div class="flow-header">
      <p class="t1">Opret ny træner</p>
      <hr>
    </div>
    <form @submit.prevent="register" class="formular">
      <div class="form">
        <label>Navn</label>
        <input v-model="name" type="text" placeholder="Name" required class="form-style"/>
      </div>
      <div class="form">
        <label>Email</label>
        <input v-model="email" type="email" placeholder="Email" required class="form-style"/>
      </div>
      <div class="form">
        <label>Password</label>
        <input v-model="password" type="password" placeholder="Password" required class="form-style"/>
      </div>
      <button type="submit" class="default-primary-btn stretch">OPRET TRÆNER</button> <!-- @click="windowBtn" -->
      <p style="color: green;">{{ message }}</p>
    </form>
  </div>
</template>

<style scoped>

.flow-content{
  max-width: 33vw;
  margin-left: 4vw;
}
</style>