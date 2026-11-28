import { useState } from "react";

function RegisterForm({ onLogin }) {
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    if (data.password !== data.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    console.log("Registration Details:", data);
  };

  return (
    <div className="florals flex min-h-[88vh] w-full items-center justify-center px-4 py-12">
      <span className="bloom pink" style={{ width: 340, height: 340, right: -70, top: -80 }} />
      <span className="bloom mag" style={{ width: 300, height: 300, left: -90, bottom: -60 }} />
      <span className="bloom rose" style={{ width: 240, height: 240, left: "40%", bottom: -110 }} />
      <span className="bloom mag" style={{ width: 180, height: 180, right: 40, bottom: 20 }} />
      <span className="berry" style={{ left: "8%", top: 40 }} />
      <div className="veil" />

      <div className="content fl-card">
        <p className="fl-eyebrow">PULSEWORKS-AI</p>

        <h2 className="serif text-center text-4xl font-semibold leading-tight">
          Create <span className="script text-5xl text-[#f3b6cf]">Account</span>
        </h2>

        <p className="muted mt-3 text-center text-sm">
          Register to get started with PulseWorks-AI.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
          <div className="grid gap-2">
            <label className="fl-label">Full Name</label>
            <input name="fullName" placeholder="Enter your full name" className="fl-field" required />
          </div>

          <div className="grid gap-2">
            <label className="fl-label">Email</label>
            <input name="email" type="email" placeholder="Enter your email" className="fl-field" required />
          </div>

          <div className="grid gap-2">
            <label className="fl-label">Password</label>
            <input name="password" type="password" placeholder="Enter your password" className="fl-field" required />
          </div>

          <div className="grid gap-2">
            <label className="fl-label">Confirm Password</label>
            <input name="confirmPassword" type="password" placeholder="Confirm your password" className="fl-field" required />
            <p className="fl-error">{error}</p>
          </div>

          <button type="submit" className="fl-submit mt-2">
            Create Account
          </button>
        </form>

        <p className="muted mt-6 text-center text-sm">
          Already have an account?{" "}
          <button type="button" onClick={onLogin} className="fl-link">
            Login
          </button>
        </p>
      </div>
    </div>
  );
}

export default RegisterForm;