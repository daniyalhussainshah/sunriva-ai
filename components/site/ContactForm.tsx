"use client";

import { useState, type FormEvent } from "react";
import { PhoneField } from "./PhoneField";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CONTACT_EMAIL = "hello@sunriva.ai";

function Field({
  label,
  placeholder,
  type = "text",
  full = false,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  type?: string;
  full?: boolean;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className={full ? "md:col-span-2" : ""}>
      <label className="text-xs font-medium text-muted-foreground">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm outline-none focus:border-primary/50"
      />
    </div>
  );
}

function EmailField({
  value,
  onChange,
  onBlur,
  error,
}: {
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  error: string;
}) {
  return (
    <div className="md:col-span-2">
      <label className="text-xs font-medium text-muted-foreground">Email</label>
      <input
        type="email"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder="example@gmail.com"
        aria-invalid={!!error}
        className={`mt-2 w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm outline-none transition-colors ${
          error ? "border-red-500/60 focus:border-red-500/60" : "border-border focus:border-primary/50"
        }`}
      />
      {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  );
}

export function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = (value: string) => {
    const valid = value === "" || EMAIL_REGEX.test(value);
    setEmailError(valid ? "" : "Enter a valid email address, e.g. example@gmail.com");
    return valid;
  };

  const allFilled =
    firstName.trim() !== "" &&
    lastName.trim() !== "" &&
    email.trim() !== "" &&
    phone.trim() !== "" &&
    message.trim() !== "";

  const emailValid = EMAIL_REGEX.test(email);
  const canSend = allFilled && emailValid;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!canSend) {
      validateEmail(email);
      return;
    }

    const subject = `Contact form message from ${firstName} ${lastName}`;
    const body = [
      message,
      "",
      `Name = ${firstName} ${lastName}`,
      `Email : ${email}`,
      `Phone number: +${phone}`,
    ].join("\n");

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      CONTACT_EMAIL
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-border bg-card p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="First Name" placeholder="First Name" value={firstName} onChange={setFirstName} />
        <Field label="Last Name" placeholder="Last Name" value={lastName} onChange={setLastName} />
        <EmailField
          value={email}
          onChange={setEmail}
          onBlur={() => validateEmail(email)}
          error={emailError}
        />
        <PhoneField value={phone} onChange={setPhone} />
      </div>
      <div className="mt-4">
        <label className="text-xs font-medium text-muted-foreground">Message</label>
        <textarea
          rows={5}
          placeholder="How can we help?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-2 w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/50"
        />
      </div>
      <button
        type="submit"
        disabled={!canSend}
        className={`mt-6 w-full rounded-full px-5 py-3 text-sm font-medium text-white transition-opacity ${
          canSend ? "cursor-pointer" : "cursor-not-allowed opacity-50"
        }`}
        style={{ background: "var(--gradient-primary)" }}
      >
        Send Message
      </button>
    </form>
  );
}
