<template>
  <div>
    <h1 class="text-4xl">About</h1>
    <button @click="user.email.send()">Send email</button><br />
    <button @click="makeToast">Make toast</button>
  </div>
</template>

<script setup>
import * as Sentry from "@sentry/vue";

const user = {};
const post = {
  id: 1,
  title: "Hello world",
  body: "lorem ipsun, bla, bla, bla...",
};

Sentry.setContext("post", {
  id: post.id,
  postTitle: post.title,
});

Sentry.setTag("randomTag", "hello-tag");

const makeToast = () => {
  sliceBread();
};
</script>
