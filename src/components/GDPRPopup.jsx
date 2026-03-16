import React from "react";
import CookieConsent from "react-cookie-consent";

const GDPRPopup = ({
  buttonText = "Прийняти всі",
  declineButtonText = "Відхилити",
  overlay = false,
}) => {
  return (
    <CookieConsent
      location="bottom"
      buttonText={buttonText}
      declineButtonText={declineButtonText}
      enableDeclineButton
      cookieName="Platformer_Cookie_Example"
      style={{ background: "#2B373B", color: "#F5F5F5", fontSize: "14px" }}
      buttonStyle={{
        background: "#4E944F",
        color: "#fff",
        fontSize: "14px",
        borderRadius: "5px",
        padding: "10px 20px",
      }}
      declineButtonStyle={{
        background: "#E13333",
        color: "#fff",
        fontSize: "14px",
        borderRadius: "5px",
        padding: "10px 20px",
      }}
      expires={150}
      overlay={overlay}
    >
      🛡️ <b>Конфігурація конфіденційності:</b> Ми використовуємо файли cookie
      для забезпечення роботи сайту. Детальніше у нашій{" "}
      <a
        href="https://github.com/VitalikNeznayko/platformer/blob/main/PRIVACY.md"
        target="_blank"
        rel="noopener noreferrer"
      >
        Політиці конфіденційності
      </a>
      .
    </CookieConsent>
  );
};

export default GDPRPopup;
