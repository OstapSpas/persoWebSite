import React, { useState } from "react";
import emailjs from "@emailjs/browser"; // використовуємо сучасний SDK

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      alert("Email невалідний.");
      return;
    }

    try {
      // 1. Надсилання листа через EmailJS
      await emailjs.send(
        "service_4w0elox",
        "template_d0n696h",
        formData,
        "8BIAmwnnuQSMIZKeW"
      );

      // 2. Якщо у тебе є backend — тут можна відправити POST-запит
      // await fetch("http://localhost:5000/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData)
      // });

      alert("Запит успішно відправлено!");
      setFormData({ name: "", email: "", phone: "" }); // очищаємо форму

    } catch (err) {
      console.error("Помилка:", err);
      alert("Сталася помилка, спробуйте пізніше.");
    }
  };

  return (
    <form className="footer-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Your name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Your email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="phone">Your phone number</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      <button type="submit" className="link">Send</button>
    </form>
  );
};

export default ContactForm;
