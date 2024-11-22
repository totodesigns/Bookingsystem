<script setup>
import { ref} from "vue";
import { db } from "../firebase";
import { ref as dbRef, set } from "firebase/database";

const name = ref("");
const email = ref("");
const password = ref("");

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
}
</script>

<template>
  <div class="flow-content">
    <div class="flow-header">
      <p class="t1">Registrér ny træner</p>
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
      <button type="submit" class="default-primary-btn stretch">REGISTRÉR</button> <!-- @click="windowBtn" -->
    </form>
  </div>
</template>