import { AppProps } from "$fresh/server.ts";
import GlobalTags from "$store/components/GlobalTags.tsx";
import Theme from "$store/sections/Theme/Theme.tsx";
import ThemeWinter from "$store/sections/Theme/ThemeWinter.tsx";
import ThemeSummer from "$store/sections/Theme/ThemeSummer.tsx";
import ThemeFall from "$store/sections/Theme/ThemeFall.tsx";
import ThemeNight from "$store/sections/Theme/ThemeNight.tsx";
import ThemeAutumn from "$store/sections/Theme/ThemeAutumn.tsx";

import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(req, ctx) {
    const url = new URL(window.location.href);
    const queryParam = url.searchParams.get("q");

    if (queryParam === "winter") {
      const theme = "winter";
    } else if (queryParam === "summer") {
      const theme = "summer";
    } else if (queryParam === "fall") {
      const theme = "fall";
    } else if (queryParam === "autumn") {
      const theme = "autumn"
    } else if (queryParam === "night") {
      const theme = "night";
    } else {
      const theme = "default"; // Default theme
    }

    // You can also pass the theme information to your Preact app in the response data.
    return ctx.render({ theme });
  },
};

const sw = () =>
  addEventListener("load", () =>
    navigator && navigator.serviceWorker &&
    navigator.serviceWorker.register("/sw.js"));

function App(props: AppProps) {
  const { theme } = props;

  return (
    <>
      {/* Include default fonts and css vars */}

      <div>
        {theme}
      </div>

      {theme === "winter" && <ThemeWinter />}
      {theme === "summer" && <ThemeSummer />}
      {theme === "fall" && <ThemeFall />}
      {theme === "autumn" && <ThemeAutumn />}
      {theme === "night" && <ThemeNight />}
      {theme === "default" && <Theme />}

      <ThemeWinter />

      {/* Include Icons and manifest */}
      <GlobalTags />

      {/* Rest of Preact tree */}
      <props.Component />

      {/* Include service worker */}
      <script
        type="module"
        dangerouslySetInnerHTML={{ __html: `(${sw})();` }}
      />
    </>
  );
}

export default App;
