import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(6, "Password must contain at least 6 characters"),
});

function LoginForm({ onRegister }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log("Login Details:", data);
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
          Welcome <span className="script text-5xl text-[#f3b6cf]">Back</span>
        </h2>

        <p className="muted mt-3 text-center text-sm">
          Login to your PulseWorks-AI account.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 flex flex-col gap-4">
          <div className="grid gap-2">
            <label className="fl-label">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="fl-field"
              {...register("email")}
            />
            <p className="fl-error">{errors.email?.message}</p>
          </div>

          <div className="grid gap-2">
            <label className="fl-label">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="fl-field"
              {...register("password")}
            />
            <p className="fl-error">{errors.password?.message}</p>
          </div>

          <div className="-mt-2 text-right">
            <button
              type="button"
              onClick={() =>
                alert("Please contact the administrator to reset your password.")
              }
              className="text-sm text-[#d98aab] hover:text-[#f3b6cf]"
            >
              Forgot Password?
            </button>
          </div>

          <button type="submit" className="fl-submit mt-2">
            Login
          </button>
        </form>

        <p className="muted mt-6 text-center text-sm">
          Don't have an account?{" "}
          <button type="button" onClick={onRegister} className="fl-link">
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;