import "./PulseHero.css";
import robot from "./ai-robot.png";

const PULSE_PATH =
  "M0 100 H140 L160 100 L172 60 L184 100 L200 100 " +
  "L214 112 L228 70 L240 100 H330 L346 100 L358 18 L376 178 L392 100 H470 " +
  "L486 100 L498 62 L510 100 L526 100 L540 112 L554 78 L566 100 H700 " +
  "L716 100 L728 40 L744 150 L758 100 H860 L876 100 L888 66 L900 100 " +
  "L914 100 L926 108 L938 76 L950 100 H1200";

export default function PulseHero({ onStart, onFeatures }) {
  return (
    <div className="ph">
      <img src={robot} alt="AI face with glowing circuitry" className="ph__img" />
      <div className="ph__shade" aria-hidden="true" />

      <svg
        className="ph__pulse"
        viewBox="100 0 1100 190"
        preserveAspectRatio="none"
        role="img"
        aria-label="Animated heartbeat line"
      >
        <defs>
          <filter id="phBlur" x="-5%" y="-60%" width="110%" height="220%">
            <feGaussianBlur stdDeviation="7" />
          </filter>
        </defs>

        <path d={PULSE_PATH} className="ph__track" />
        <path d={PULSE_PATH} pathLength="1" className="ph__fly ph__fly--glow" filter="url(#phBlur)" />
        <path d={PULSE_PATH} pathLength="1" className="ph__fly ph__fly--long" />
        <path d={PULSE_PATH} pathLength="1" className="ph__fly ph__fly--mid" />
        <path d={PULSE_PATH} pathLength="1" className="ph__fly ph__fly--head" />
      </svg>

      <main className="ph__hero">
        <div className="ph__content">
          <p className="ph__eyebrow">Welcome to PulseWorks-AI</p>
          <h1 className="ph__title">
            Manage Your Work
            <span className="ph__script">Smarter With AI.</span>
          </h1>
          <p className="ph__sub">
            PulseWorks-AI helps teams manage tasks, organize work, and improve
            productivity through a simple platform.
          </p>
          <div className="ph__actions">
            <button className="ph__btn ph__btn--solid" onClick={onStart}>
              Get Started
            </button>
            <button className="ph__btn ph__btn--outline" onClick={onFeatures}>
              Explore Features
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}