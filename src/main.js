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
  // this line displays the error logs in the console, if false nothing will be displayed in the console
  // value default is false
  logErrors: true,
  release: __SENTRY_RELEASE__,
  environment: import.meta.env.MODE,
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

const user = {
  email: "gabrielcaianaguedes@gmail.com",
};
Sentry.setUser(user);
Sentry.configureScope((scope) => scope.setUser(null));
