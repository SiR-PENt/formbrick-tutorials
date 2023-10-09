import formbricks from "@formbricks/js";
import { useEffect } from "react";
import { useRouter } from "next/router";

if (typeof window !== "undefined") {
  formbricks.init({
    environmentId: "cll0s7ehs002rta0hno0t98bi",
    apiHost: "https://app.formbricks.com", 
    debug: true, // remove when in production
  });
}

export default function App({ Component, pageProps }) {
  const router = useRouter();
  
  useEffect(() => {
    // Connect next.js router to Formbricks
    const handleRouteChange = formbricks?.registerRouteChange;
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return <Component {...pageProps} />
}
