import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import * as Sentry from "@sentry/vue";
import { BrowserTracing } from "@sentry/tracing";

import "@/assets/main.pcss";

const app = createApp(App);

Sentry.init({
  app,
  dsn: "https://f3a97c9b0123433ca5d70f88d2e497d5@o1127381.ingest.sentry.io/6233546",
  integrations: [
    new BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracingOrigins: ["localhost", "my-site-url.com", /^\//],
    }),
  ],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

app.use(router);
app.mount("#app");
