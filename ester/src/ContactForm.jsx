import React from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";
import { FiSend } from "react-icons/fi";
import { useState } from "react";
import "./styles/main.scss";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Vyplňte prosím jméno";
    if (!formData.email) {
      errors.email = "Vyplňte prosím email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      //testovani spravneho formatu emailove adresy
      errors.email = "Neplatná e-mailová adresa";
    }
    if (!formData.message)
      errors.message = "Vyplňte prosím zprávu pro příjemce";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSending(true);

      emailjs
        .send(
          //emailjs send function
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          formData,
          import.meta.env.VITE_PUBLIC_KEY,
        )
        .then((response) => {
          toast.success("Zpráva odeslána.");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.log("FAILED...", error);
          toast.error("Odeslání selhalo. Prosím zkuste znovu později.");

          console.log("SERVICE_ID:", import.meta.env.VITE_SERVICE_ID);
          console.log("TEMPLATE_ID:", import.meta.env.VITE_TEMPLATE_ID);
          console.log("PUBLIC_KEY:", import.meta.env.VITE_PUBLIC_KEY);
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <div className="lg:w-3/4" id="contact">
      <Toaster />
      <h2 className="text-center text-4xl font-semibold text-stone-700">
        Pojďme se spojit!
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col lg:flex-row gap-2">
          <div className="name w-full">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              placeholder="jméno"
              onChange={handleChange}
              className="name-input text-stone-700 w-full apperance-none rounded-lg
                border border-stone-700/30 bg-transparent focus:border-stone-700"
            />
            {errors.name && (
              <p className="text-sm text-rose-500">{errors.name}</p>
            )}
          </div>
          <div className="email w-full">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="e-mail"
              onChange={handleChange}
              className="email-input text-stone-700 w-full apperance-none rounded-lg
                border border-stone-700/30 bg-transparent focus:border-stone-700"
            />
            {errors.email && (
              <p className="text-sm text-rose-500">{errors.email}</p>
            )}
          </div>
        </div>
        <div className="textarea">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            placeholder="zpráva"
            onChange={handleChange}
            className="textarea-box text-stone-700 w-full apperance-none rounded-lg
                border border-stone-700/30 bg-transparent px-3 py-2 tex-sm focus:border-stone-700"
            rows="6"
          />
          {errors.message && (
            <p className="text-sm text-rose-500">{errors.message}</p>
          )}
        </div>
        <button
          type="submit"
          className={`btn w-full rounded border border-stone-700/30 bg-gradient-to-b from-gray-600 to-gray-800 text-white font-semibold  hover:bg-stone-300
            ${isSending ? "cursor-not-allowed opacity-50" : ""}`}
          disabled={isSending}
        >
          <div className="flex items-center justify-center gap-2">
            {isSending ? "Posílám..." : "Poslat"}
            <FiSend />
          </div>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
