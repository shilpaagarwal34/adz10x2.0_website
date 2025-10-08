import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// 1. create context
const VisualSettingsContext = createContext();

//export this context using useContext
export const useVisualSettings = () => useContext(VisualSettingsContext);
const base_url = "https://api.adz10x.com";

export const VisualSettingsProvider = ({ children }) => {
  const [visualSettings, setVisualSettings] = useState({
    fullLogo: null,
    miniLogo: null,
    emailLogo: null,
  });

  const setFavicon = (url) => {
    let favicon = document.getElementById("dynamic-favicon");

    // If favicon tag doesn't exist, create it
    if (!favicon) {
      favicon = document.createElement("link");
      favicon.id = "dynamic-favicon";
      favicon.rel = "icon";
      document.head.appendChild(favicon);
    }

    favicon.href = url;
  };

  const fetchVisualSettings = async () => {
    try {
      const res = await axios.get(
        "https://api.adz10x.com/api/admin/visual-settings"
      );
      const data = res.data?.data;

      if (data) {
        const fullLogo = data.full_logo_image_path
          ? `${base_url}/${data.full_logo_image_path}`
          : null;

        const miniLogo = data.mini_logo_image_path
          ? `${base_url}/${data.mini_logo_image_path}`
          : null;
        console.log(miniLogo)
        const emailLogo = data.logo_email_image_path
          ? `${base_url}/${data.logo_email_image_path}`
          : null;

        setVisualSettings({ fullLogo, miniLogo, emailLogo });
        setFavicon(miniLogo);
      }
    } catch (error) {
      console.error("Failed to fetch visual settings:", error);
      setFavicon("./src/assets/logo.svg");
    }
  };

  useEffect(() => {
    fetchVisualSettings();
  }, []);

  return (
    <VisualSettingsContext.Provider value={visualSettings}>
      {children}
    </VisualSettingsContext.Provider>
  );
};
