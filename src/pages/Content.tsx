import React, { useState } from "react";

const Content: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      {submitted && (
        <div className="mb-4 p-4 bg-green-100 text-green-800 rounded">
          {" "}
          Thank you for contacting us! We'll get back to you soon.
        </div>
      )}
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={`w-full border rounded px-3 py-2 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={`w-full border rounded px-3 py-2 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-1 font-semibold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className={`w-full border rounded px-3 py-2 ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>
        <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded transition cursor-pointer">Send Message</button>
      </form>
    </div>
  );
};

export default Content;
