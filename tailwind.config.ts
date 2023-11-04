import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: ["retro"], logs: false },
  content: ["./**/*.tsx"],
  theme: { container: { center: true } },
};
