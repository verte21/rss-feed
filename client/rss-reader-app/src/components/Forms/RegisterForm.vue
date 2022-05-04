<template>
  <div class="container min-w-full">
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <h1 class="ml-3 text-5xl font-bold text-center">Register now!</h1>
          <p class="py-6 text-center"></p>
        </div>

        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <!-- Username -->
            <div class="form-control">
              <label class="label">
                <span class="label-text">Username</span>
              </label>
              <input
                v-model="login"
                type="text"
                placeholder="username"
                class="input input-bordered"
              />
            </div>

            <!-- email  -->
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                v-model="email"
                type="email"
                placeholder="email address"
                class="input input-bordered"
              />
            </div>

            <!-- password -->
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                v-model="password"
                type="password"
                placeholder="password"
                class="input input-bordered"
              />
            </div>
            <!-- password again  -->
            <div class="form-control">
              <label class="label">
                <span class="label-text">Repeat password</span>
              </label>
              <input
                v-model="passwordRe"
                type="password"
                placeholder="password"
                class="input input-bordered"
              />
            </div>

            <!-- submit button  -->
            <div class="form-control mt-6">
              <button @click="checkForm" class="btn btn-primary">
                Register
              </button>
            </div>
             
        <p v-if="errors.length ">
            <b>Please correct the following error(s):</b>
            <ul>
            <li v-for="(error, index) in errors" :key="index" >{{ error }}</li>
            </ul>
        </p>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, reactive, toRaw } from 'vue';
const errors = reactive([]);
const login = ref("");
const email = ref("");
const password = ref("");
const passwordRe = ref("");

function logValues() {
  console.log(login.value);
  console.log(email.value);
  console.log(password.value);
  console.log(passwordRe.value);
}

function checkForm() {
  errors.splice(0,errors.length)

  if (!login.value) errors.push('Login is required');
  if (!email.value) errors.push('Email is required');
  if (!password.value) errors.push('Password is required');
  if (password.value && !passwordRe.value) errors.push('Please confirm your password');
  if (password.value != passwordRe.value) errors.push("Passwords don't match");
  if (toRaw(errors).length > 0) return;
  
  axios.post(import.meta.env.VITE_RSS_API + 'user/register', {
      userName: login.value,
      email: email.value,
      password: password.value
  }).then((res) => {
    console.log(res);
  }).catch(e => console.log(e)
  )
            

}
</script>

<style></style>
