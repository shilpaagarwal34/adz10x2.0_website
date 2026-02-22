import { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import "./SupportChatbot.css";

const quickQuestions = [
  "How do I register?",
  "I cannot navigate the website",
  "How do I login?",
  "How to contact support?",
];

const pageNameMap = {
  "/": "Home",
  "/contact": "Contact",
  "/privacy-policy": "Privacy Policy",
  "/terms-conditions": "Terms & Conditions",
  "/cookie-policy": "Cookie Policy",
  "/refund-policy": "Refund Policy",
  "/shipping-policy": "Shipping Policy",
  "/acceptable-use-policy": "Acceptable Use Policy",
  "/disclaimer": "Disclaimer",
};

function getBotReply(message, pathname) {
  const q = (message || "").toLowerCase().trim();

  if (!q) {
    return "Please type your question. I can help with navigation, registration and basic platform flow.";
  }

  if (
    q.includes("register") ||
    q.includes("sign up") ||
    q.includes("signup") ||
    q.includes("create account")
  ) {
    return "To register, click `Get Started` or `Register` in the top navigation. You will be redirected to the portal registration flow where you can choose Society or Company.";
  }

  if (q.includes("login") || q.includes("log in")) {
    return "Use the `Login` button in the website navbar. It opens the portal login page directly.";
  }

  if (
    q.includes("navigate") ||
    q.includes("navigation") ||
    q.includes("where") ||
    q.includes("page not found")
  ) {
    return "Navigation tips: use the top menu for key pages and the footer for policy pages. If a page fails, refresh once and use the navbar links. Current page: " + (pageNameMap[pathname] || "Unknown page") + ".";
  }

  if (
    q.includes("flow") ||
    q.includes("how it works") ||
    q.includes("process")
  ) {
    return "Basic flow: 1) Open website and review offerings, 2) Click Get Started/Register, 3) Complete portal onboarding (Society/Company), 4) Login and manage campaigns/media from the portal.";
  }

  if (
    q.includes("contact") ||
    q.includes("support") ||
    q.includes("help") ||
    q.includes("phone") ||
    q.includes("email")
  ) {
    return "Support channels: support@adz10x.com, +91 9271155815, +91 9271155816, +91 9271155817. You can also use the Contact page form.";
  }

  if (
    q.includes("privacy") ||
    q.includes("terms") ||
    q.includes("refund") ||
    q.includes("shipping") ||
    q.includes("cookie") ||
    q.includes("disclaimer")
  ) {
    return "Policy pages are available in the website routes and footer: Privacy Policy, Terms & Conditions, Cookie Policy, Refund Policy, Shipping Policy, Acceptable Use Policy, and Disclaimer.";
  }

  return "I can currently answer basic queries about onboarding flow, navigation, login/register, and support contacts. Try asking: `How do I register?`";
}

const SupportChatbot = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi! I am Adz10x Assistant. Ask me about website flow, navigation, login/register, or support contact details.",
    },
  ]);

  const currentPage = useMemo(
    () => pageNameMap[location.pathname] || "This page",
    [location.pathname]
  );

  const sendMessage = (rawMessage) => {
    const message = (rawMessage ?? input).trim();
    if (!message) return;

    const reply = getBotReply(message, location.pathname);
    setMessages((prev) => [
      ...prev,
      { from: "user", text: message },
      { from: "bot", text: reply },
    ]);
    setInput("");
  };

  return (
    <div className="support-chatbot">
      {open ? (
        <div className="support-chatbot-panel">
          <div className="support-chatbot-header">
            <div>
              <div className="support-chatbot-title">Adz10x Help Assistant</div>
              <div className="support-chatbot-subtitle">{currentPage}</div>
            </div>
            <button
              type="button"
              className="support-chatbot-close"
              onClick={() => setOpen(false)}
            >
              x
            </button>
          </div>

          <div className="support-chatbot-quick">
            {quickQuestions.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => sendMessage(q)}
                className="support-chatbot-quick-btn"
              >
                {q}
              </button>
            ))}
          </div>

          <div className="support-chatbot-body">
            {messages.map((m, idx) => (
              <div
                key={`${m.from}-${idx}`}
                className={`support-chatbot-msg ${
                  m.from === "user" ? "support-chatbot-msg-user" : "support-chatbot-msg-bot"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          <div className="support-chatbot-input-row">
            <input
              type="text"
              placeholder="Ask your question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
              className="support-chatbot-input"
            />
            <button
              type="button"
              className="support-chatbot-send"
              onClick={() => sendMessage()}
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          className="support-chatbot-fab"
          onClick={() => setOpen(true)}
        >
          Chat Help
        </button>
      )}
    </div>
  );
};

export default SupportChatbot;
