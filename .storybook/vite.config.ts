import { defineConfig } from 'vite';

// Storybook Vite config tweaks to improve HMR in remote/devcontainer environments
// Enables polling-based file watching which is more reliable when FS events are not propagated.
export default defineConfig({
  server: {
    watch: {
      // Use polling to improve reliability in Codespaces / remote containers
      usePolling: true,
      // Polling interval in ms
      interval: 100
    },
    // HMR client port can be configured via env if port forwarding needs it
    hmr: {
      // leave defaults, Storybook will set the proper host/port
    }
  }
});
