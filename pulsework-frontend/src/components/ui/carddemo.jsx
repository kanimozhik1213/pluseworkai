import { useState } from "react";

const css = `
.fl-card{position:relative;overflow:hidden;width:100%;max-width:28rem;padding:2.5rem 2rem;border-radius:28px;
  background:linear-gradient(160deg,rgba(50,18,31,.96),rgba(20,8,15,.96));
  border:1px solid rgba(217,138,171,.25);box-shadow:0 20px 44px rgba(0,0,0,.45)}
.fl-card::before{content:"";position:absolute;width:240px;height:240px;right:-90px;top:-90px;border-radius:50%;
  background:repeating-radial-gradient(circle at 50% 50%,#f3a6c6 0 4px,#c55689 5px 9px,#7e1f4c 10px 14px);opacity:.55;pointer-events:none}
.fl-card::after{content:"";position:absolute;width:200px;height:200px;left:-80px;bottom:-80px;border-radius:50%;
  background:repeating-radial-gradient(circle at 50% 50%,#c0346e 0 4px,#8a1d4f 5px 9px,#4a0b2a 10px 14px);opacity:.45;pointer-events:none}
.fl-card>*{position:relative;z-index:1}
.fl-eyebrow{font-size:.72rem;letter-spacing:.3em;color:#d98aab;text-align:center;margin-bottom:.5rem}
.fl-field{width:100%;border-radius:999px;padding:.8rem 1.3rem;background:rgba(17,10,15,.9);color:#f7e6ee;
  border:1.5px solid rgba(217,138,171,.45);outline:none;font-family:'Jost',system-ui,sans-serif;font-size:.92rem;
  transition:border .15s,box-shadow .15s}
.fl-field::placeholder{color:#c9a5b6;opacity:.8}
.fl-field:focus{border-color:#d98aab;box-shadow:0 0 0 3px rgba(217,138,171,.25)}
.fl-area{border-radius:24px;min-height:110px;resize:vertical}
.fl-select{appearance:none;cursor:pointer;
  background-image:linear-gradient(45deg,transparent 50%,#d98aab 50%),linear-gradient(135deg,#d98aab 50%,transparent 50%);
  background-position:calc(100% - 22px) 50%,calc(100% - 16px) 50%;background-size:6px 6px,6px 6px;background-repeat:no-repeat}
.fl-select option{background:#110a0f;color:#f7e6ee}
.fl-field[type="date"]{color-scheme:dark}
.fl-label{font-size:.74rem;letter-spacing:.18em;text-transform:uppercase;color:#d98aab;margin-left:.4rem;font-weight:500}
.fl-error{margin-left:.8rem;font-size:.82rem;color:#ff9bb8;min-height:1.1rem}
.fl-submit{width:100%;border:none;border-radius:999px;padding:.8rem 1.8rem;cursor:pointer;color:#fff;font-weight:500;letter-spacing:.04em;
  background:linear-gradient(135deg,#c24a7d,#a8386a);box-shadow:0 8px 22px rgba(168,56,106,.45);transition:transform .15s,background .15s}
.fl-submit:hover{transform:translateY(-2px);background:linear-gradient(135deg,#d98aab,#c24a7d)}
.fl-cancel{width:100%;border-radius:999px;padding:.8rem 1.8rem;cursor:pointer;color:#d98aab;font-weight:500;letter-spacing:.04em;
  background:transparent;border:1.5px solid #d98aab;transition:background .15s}
.fl-cancel:hover{background:rgba(217,138,171,.14)}
.fl-link{font-weight:600;color:#f3b6cf;cursor:pointer;background:none;border:none}
.fl-link:hover{color:#fff}
`;

function CardDemo({ onLogin }) {
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
    <div className="fl-card">
      <style>{css}</style>

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
  );
}

export default CardDemo;