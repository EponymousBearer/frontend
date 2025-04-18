import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      // "https://backend-vert-pi-68.vercel.app/buyback-widget.js";
      "http://localhost:5001/buyback-widget.js";
    script.async = true;
    script.onload = () => {
      if (window.Buyback) {
        new window.Buyback({
          apiUrl: "http://localhost:5001",
          // "https://backend-vert-pi-68.vercel.app",
          apiKey: "mySecretKey123",
          user_id: "67b6c518ce468cd40298a61e",
        });
      } else {
        console.error("Buyback widget failed to load.");
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div className="buyback-widget"></div>;
};

export default App;
