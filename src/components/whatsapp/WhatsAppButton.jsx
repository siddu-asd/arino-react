import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "7337320100"; // replace with your number
  const message = "Hello! I found your website and want to chat.";

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
        cursor: "pointer",
      }}
      onClick={openWhatsApp}
    >
      <FaWhatsapp
        size={60}
        color="#25D366"
        style={{
          boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
          borderRadius: "50%",
          padding: "10px",
          backgroundColor: "#fff",
        }}
      />
    </div>
  );
};

export default WhatsAppButton;
