<script setup>

import {RouterLink} from 'vue-router'
import {reactive, ref} from "vue";
import router from "@/router";

const message = ref('')
const worng = ref('text-center text-3xl p-2 font-bold text-red-600 hidden');


const logInPerson = reactive(
    {
      name: '',
      email: '',
      password: '',
      confirm_password: ''
    })


function login() {
  if (logInPerson.email === '' || logInPerson.password === '') {
    return message.value = 'Please enter Email & Password in text box below';
  } else {
    let person = JSON.parse(localStorage.getItem('person'))
    console.log(person.email)
    if (logInPerson.email === person.email && logInPerson.password === person.password) {
      router.push({name: 'welcome'})
    } else {
      worng.value = 'text-center text-3xl p-2 font-bold text-red-600'
    }

  }
}


</script>

<template>
  <section class="h-screen mt-10">
    <h1 class="text-center text-5xl p-3 font-bold">Login</h1>
    <h1 :class="worng"> !! Email and password not match</h1>
    <h1 class="text-center text-3xl p-2 font-bold text-red-600">{{ message }}</h1>
    <div class="container h-full px-6 py-24">
      <div
          class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
        <!-- Left column container with background-->
        <div class="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
          <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              class="w-full"
              alt="Phone image"/>
        </div>

        <!-- Right column container with form -->
        <div class="md:w-8/12 lg:ml-6 lg:w-5/12">
          <form>
            <!-- Email input -->
            <div class="relative mb-6" data-te-input-wrapper-init>
              <input v-model="logInPerson.email"
                     type="text"
                     class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                     id="exampleFormControlInput3"
                     placeholder="Email address"/>
              <label
                  for="exampleFormControlInput3"
                  class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >Email address
              </label>
            </div>

            <!-- Password input -->
            <div class="relative mb-6" data-te-input-wrapper-init>
              <input v-model="logInPerson.password"
                     type="password"
                     class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                     id="exampleFormControlInput33"
                     placeholder="Password"/>
              <label
                  for="exampleFormControlInput33"
                  class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >Password
              </label>
            </div>

            <button @click.prevent="login()"
                    type="submit"
                    class="inline-block w-full rounded bg-blue-700 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="light">
              Sign in
            </button>

            <!-- Divider -->
            <div
                class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
              <p
                  class="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                OR
              </p>
            </div>

            <!--Register button-->
            <div class="flex items-center justify-between pb-6">
              <p class="mb-0 mr-2 text-red-600">Don't have an account?</p>
              <RouterLink to='/register'
                          type="button"
                          class="inline-block text-red-600 rounded border-2 border-danger bg-white px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:bg-red-800 hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                          data-te-ripple-init
                          data-te-ripple-color="light">
                Register
              </RouterLink>
            </div>

          </form>
        </div>
      </div>
    </div>
  </section>

</template>

<style scoped>

</style>