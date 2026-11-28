import robot from "./ai-robot.png";

const PULSE_PATH =
  "M0 100 H140 L160 100 L172 60 L184 100 L200 100 " +
  "L214 112 L228 70 L240 100 H330 L346 100 L358 18 L376 178 L392 100 H470 " +
  "L486 100 L498 62 L510 100 L526 100 L540 112 L554 78 L566 100 H700 " +
  "L716 100 L728 40 L744 150 L758 100 H860 L876 100 L888 66 L900 100 " +
  "L914 100 L926 108 L938 76 L950 100 H1200";

const css = `
.pb{position:relative;min-height:calc(100vh - 72px);overflow:hidden;background:#12060f}

.pb__glow{position:fixed;left:0;right:0;top:72px;bottom:0;z-index:0;pointer-events:none;
  background:radial-gradient(45% 55% at 16% 45%,rgba(200,40,190,.3),transparent 70%)}

.pb__img{position:fixed;z-index:2;left:-11vw;top:72px;height:calc(100vh - 72px);width:auto;max-width:none;pointer-events:none;
  -webkit-mask-image:linear-gradient(90deg,#000 65%,transparent 100%);
          mask-image:linear-gradient(90deg,#000 65%,transparent 100%)}
.pb--dim .pb__img{opacity:.3}

.pb__shade{position:fixed;left:0;right:0;top:72px;bottom:0;z-index:3;pointer-events:none;
  background:
    linear-gradient(180deg,#12060f 0%,rgba(18,6,15,0) 18%),
    linear-gradient(0deg,rgba(18,6,15,.65) 0%,rgba(18,6,15,0) 25%)}

.pb__pulse{position:fixed;z-index:1;left:26%;right:0;top:calc(72px + 32vh);height:170px;overflow:hidden;pointer-events:none}
.pb__track,.pb__fly{fill:none;stroke-linecap:round;stroke-linejoin:round}
.pb__track{stroke:rgba(255,77,157,.22);stroke-width:2}
.pb__fly{stroke-dashoffset:1;animation-duration:4.2s;animation-timing-function:linear;animation-iteration-count:infinite}
.pb__fly--glow{stroke:#ff4d9d;stroke-width:12;opacity:.9;stroke-dasharray:.3 3;animation-name:pb-long}
.pb__fly--long{stroke:#ff4d9d;stroke-width:3;opacity:.45;stroke-dasharray:.3 3;animation-name:pb-long}
.pb__fly--mid{stroke:#ff8fc4;stroke-width:3.5;opacity:.85;stroke-dasharray:.12 3;animation-name:pb-mid}
.pb__fly--head{stroke:#fff;stroke-width:4.5;stroke-dasharray:.03 3;animation-name:pb-head;
  filter:drop-shadow(0 0 6px #ff4d9d) drop-shadow(0 0 14px #ff4d9d)}
@keyframes pb-long{0%{stroke-dashoffset:.3}85%,100%{stroke-dashoffset:-1}}
@keyframes pb-mid{0%{stroke-dashoffset:.12}85%,100%{stroke-dashoffset:-1.18}}
@keyframes pb-head{0%{stroke-dashoffset:.03}85%,100%{stroke-dashoffset:-1.27}}

.pb__body{position:relative;z-index:4;min-height:calc(100vh - 72px)}

.pb .florals{background:transparent;display:flex;align-items:center;justify-content:flex-end;padding-right:8vw}
@media (max-width:900px){
  .pb .florals{justify-content:center;padding-right:1rem}
  .pb__img{opacity:.3;left:0}
}
@media (prefers-reduced-motion:reduce){
  .pb__fly{animation:none}
  .pb__fly--glow,.pb__fly--long,.pb__fly--mid{display:none}
}
`;

export default function PulseBackground({ children, dim = false }) {
  return (
    <div className={`pb ${dim ? "pb--dim" : ""}`}>
      <style>{css}</style>

      <div className="pb__glow" aria-hidden="true" />

      <svg className="pb__pulse" viewBox="100 0 1100 190" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <filter id="pbBlur" x="-5%" y="-60%" width="110%" height="220%">
            <feGaussianBlur stdDeviation="7" />
          </filter>
        </defs>
        <path d={PULSE_PATH} className="pb__track" />
        <path d={PULSE_PATH} pathLength="1" className="pb__fly pb__fly--glow" filter="url(#pbBlur)" />
        <path d={PULSE_PATH} pathLength="1" className="pb__fly pb__fly--long" />
        <path d={PULSE_PATH} pathLength="1" className="pb__fly pb__fly--mid" />
        <path d={PULSE_PATH} pathLength="1" className="pb__fly pb__fly--head" />
      </svg>

      <img src={robot} alt="" className="pb__img" />
      <div className="pb__shade" aria-hidden="true" />

      <div className="pb__body">{children}</div>
    </div>
  );
}