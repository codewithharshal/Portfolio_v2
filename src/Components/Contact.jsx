import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = (props) => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          form.current.reset();
          setIsSubmitted(true);
          setMessage("✅ Message sent successfully!");
          setTimeout(() => {
            setIsSubmitted(false);
            setMessage("");
          }, 3000);
        },
        (error) => {
          setMessage("❌ Failed to send message. Try again.");
          console.error(error);
        }
      );
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="relative max-w-md max-h-[610px] md:min-h-[600px] bg-[#121112] border border-[#28282B] rounded-2xl p-5 md:pt-6">
          <p className="text-zinc-400 geist font-semibold mb-4">
            {props.Section}
          </p>
          <div>
            <input
              className="bg-[#141314] border border-[#242229] w-full p-2 rounded-xl text-[#FFF8FF] px-4"
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
            <input
              className="bg-[#141314] border border-[#242229] w-full p-2 rounded-xl text-[#FFF8FF] px-4 mt-4"
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
            />
            <input
              className="bg-[#141314] border border-[#242229] w-full p-2 rounded-xl text-[#FFF8FF] px-4 mt-4"
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />
            <textarea
              className="bg-[#141314] border border-[#242229] w-full p-2 rounded-xl text-[#FFF8FF] px-4 mt-8 overflow-y-scroll"
              name="message"
              rows="10"
              cols="50"
              placeholder="Message"
              required
            ></textarea>
            <button
              className={`w-full p-2 rounded-xl px-4 mt-4 transition-colors duration-300 ${
                isSubmitted
                  ? "bg-green-600 text-white border-green-700"
                  : "bg-[#141314] text-[#FFF8FF] border border-[#242229]"
              }`}
              type="submit"
            >
              {isSubmitted ? "Sent!" : "Send"}
            </button>

            {message && (
              <p className="text-sm mt-2 text-center text-zinc-400">
                {message}
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
