<template>
  <div class="flex h-screen items-center justify-center bg-background">
    <div class="w-full max-w-[440px] rounded-lg bg-white pt-10 pb-10 p-7 text-def justify-center flex flex-col">
      <h1 class="text-center text-2xl font-extrabold mb-7">
        Login
      </h1>
      <input
        class="rounded-lg bg-hover p-3 mb-5"
        type="text"
        placeholder="Email"
      >
      <input
        class="rounded-lg bg-hover p-3 mb-3"
        type="text"
        placeholder="Password"
      >
      <div class="flex justify-between">
        <label class="text-sm">
          <input
            type="checkbox"
            checked="checked"
            class="mr-1"
          >
          Remember Me
        </label>
        <span class="text-right text-sm">Forgot your password?</span>
      </div>
      <div class="flex flex-col justify-center gap-3 mt-7">
        <router-link class="text-center mt-5 rounded-lg bg-green p-3 text-white hover:bg-light-green duration-200" :to="{name: 'home'}">Submit</router-link>
        <span class="text-center">or</span>
        <router-link class="text-center rounded-lg bg-menu p-3 text-white hover:bg-log duration-200" :to="{name: 'signup'}">Sign Up</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
