<template>
  <div>
    <h1 class="text-4xl">About</h1>
    <button @click="user.email.send()">Send email</button><br />
    <button @click="makeToast">Make toast</button>
  </div>
</template>

<script setup>
const user = {};
const makeToast = () => {
  sliceBread();
};
</script>
