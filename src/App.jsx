import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import Routes from "./Routes";

function App() {
  return (
    <div id="root">
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <Routes />
    </GoogleOAuthProvider>
    </div>
  );
}

export default App;
