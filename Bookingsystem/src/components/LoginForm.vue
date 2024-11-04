<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router"; // Import for route navigation
import { auth } from "../firebase"; // Import Firebase auth module
import { signInWithEmailAndPassword } from "firebase/auth"; // Import signIn method

// Define reactive variables
const email = ref("");
const password = ref("");
const error = ref(null);

// Access the router for navigation
const router = useRouter();

// Define the login function
async function login() {
  error.value = null; // Reset any previous error messages
  try {
    // Sign in using Firebase Authentication
    await signInWithEmailAndPassword(
      auth, 
      email.value, 
      password.value,
    );
// Redirect to the loggedin on success, path made in index.js
    router.push("/trainer/LoggedIn"); 
  } catch (err) {
    error.value = "Something went wrong! :(";
  }
}
</script>

<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
      <p v-if="error">{{ error }}</p>
    </form>
  </div>
</template>
