import { useState } from "react";
import PulseHero from "./PulseHero";
import PulseBackground from "./PulseBackground";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import Createtaskform from "./Createtaskform";
import Logo from "./Logo";

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&family=Cormorant+Garamond:wght@500;600;700&family=Jost:wght@300;400;500;600&display=swap');

.pw{
  --berry:#b8386d; --pink:#f3b7d3; --pink-mid:#d98aab; --line:#ff4d9d;
  --ink:#fbeaf2; --mute:#c9a5b6;
  font-family:'Jost',system-ui,sans-serif; color:var(--ink); min-height:100vh; background:#12060f;
}
.script{font-family:'Pinyon Script',cursive;font-weight:400}
.serif{font-family:'Cormorant Garamond',Georgia,serif}

/* old floral pieces inside forms are hidden */
.florals{position:relative}
.bloom,.berry,.veil{display:none}

.glass{background:rgba(18,6,15,.85);backdrop-filter:blur(14px);border-bottom:1px solid rgba(243,183,211,.12)}
.btn{border-radius:999px;padding:.7rem 1.6rem;font-weight:500;letter-spacing:.03em;cursor:pointer;transition:box-shadow .2s,background .2s}
.btn:focus-visible,.navlink:focus-visible{outline:3px solid #ff8fc4;outline-offset:3px}
.btn-pink{background:var(--berry);border:1px solid var(--berry);color:#fff}
.btn-pink:hover{background:#cc4a82;box-shadow:0 0 22px rgba(255,77,157,.45)}
.btn-line{border:1px solid var(--pink-mid);color:var(--pink);background:transparent}
.btn-line:hover{box-shadow:0 0 22px rgba(255,77,157,.35)}
.navlink{padding:.5rem 1rem;border-radius:999px;color:var(--ink);cursor:pointer;font-weight:500}
.navlink:hover{background:rgba(243,183,211,.12)}
.chip{border-radius:999px;background:rgba(184,56,109,.35);border:1px solid var(--pink-mid);color:var(--ink);padding:.2rem .9rem;font-size:.85rem}
.panel{background:rgba(18,6,15,.78);backdrop-filter:blur(8px);border:1px solid rgba(243,183,211,.18);
  border-radius:28px;box-shadow:0 20px 44px rgba(0,0,0,.45)}
.muted{color:var(--mute)}

/* shared form styles (Login / Register / Task form) */
.fl-card{position:relative;width:100%;max-width:28rem;padding:2.5rem 2rem;border-radius:28px;
  background:rgba(18,6,15,.82);backdrop-filter:blur(10px);
  border:1px solid rgba(243,183,211,.2);box-shadow:0 20px 44px rgba(0,0,0,.5)}
.fl-wide{max-width:36rem}
.fl-eyebrow{font-size:.72rem;letter-spacing:.3em;color:var(--pink-mid);text-align:center;margin-bottom:.5rem}
.fl-field{width:100%;border-radius:999px;padding:.8rem 1.3rem;background:rgba(18,6,15,.9);color:#fbeaf2;
  border:1.5px solid rgba(217,138,171,.45);outline:none;font-family:'Jost',system-ui,sans-serif;font-size:.92rem;
  transition:border .15s,box-shadow .15s}
.fl-field::placeholder{color:#c9a5b6;opacity:.8}
.fl-field:focus{border-color:var(--line);box-shadow:0 0 0 3px rgba(255,77,157,.22)}
.fl-area{border-radius:24px;min-height:110px;resize:vertical}
.fl-select{appearance:none;cursor:pointer;
  background-image:linear-gradient(45deg,transparent 50%,#d98aab 50%),linear-gradient(135deg,#d98aab 50%,transparent 50%);
  background-position:calc(100% - 22px) 50%,calc(100% - 16px) 50%;background-size:6px 6px,6px 6px;background-repeat:no-repeat}
.fl-select option{background:#12060f;color:#fbeaf2}
.fl-field[type="date"]{color-scheme:dark}
.fl-label{font-size:.74rem;letter-spacing:.18em;text-transform:uppercase;color:var(--pink-mid);margin-left:.4rem;font-weight:500}
.fl-error{margin-left:.8rem;font-size:.82rem;color:#ff9bb8;min-height:1.1rem}
.fl-submit{width:100%;border:none;border-radius:999px;padding:.8rem 1.8rem;cursor:pointer;color:#fff;font-weight:600;letter-spacing:.03em;
  background:var(--berry);transition:box-shadow .2s,background .2s}
.fl-submit:hover{background:#cc4a82;box-shadow:0 0 22px rgba(255,77,157,.45)}
.fl-cancel{width:100%;border-radius:999px;padding:.8rem 1.8rem;cursor:pointer;color:var(--pink);font-weight:500;letter-spacing:.03em;
  background:transparent;border:1px solid var(--pink-mid);transition:box-shadow .2s}
.fl-cancel:hover{box-shadow:0 0 22px rgba(255,77,157,.35)}
.fl-link{font-weight:600;color:var(--pink);cursor:pointer;background:none;border:none}
.fl-link:hover{color:#fff}
`;

function LandingPage() {
  const [page, setPage] = useState("home");
  const [tasks, setTasks] = useState([]);

  const addTask = (data) => {
    setTasks((previousTasks) => [...previousTasks, data]);
    setPage("taskmanager");
  };

  return (
    <div className="pw">
      <style>{styles}</style>

      {/* Header */}
      <header className="glass sticky top-0 z-20 flex flex-wrap items-center justify-between gap-4 px-6 py-4 md:px-10">
        <h1 className="serif flex items-center gap-3 text-2xl font-bold tracking-[0.2em]">
          <Logo />
          <span>
            PULSEWORKS<span className="text-[#d98aab]">-AI</span>
          </span>
        </h1>

        <nav className="flex flex-wrap items-center gap-2">
          <button className="navlink" onClick={() => setPage("home")}>Home</button>
          <button className="navlink" onClick={() => setPage("features")}>Features</button>
          <button className="btn btn-line" onClick={() => setPage("register")}>Register</button>
          <button className="btn btn-pink" onClick={() => setPage("login")}>Login</button>
        </nav>
      </header>

      {/* Home */}
      {page === "home" && (
        <PulseHero
          onStart={() => setPage("register")}
          onFeatures={() => setPage("features")}
        />
      )}

      {/* Features */}
      {page === "features" && (
        <PulseBackground dim>
          <div className="px-6 py-16 md:px-10">
            <h1 className="serif text-center text-5xl font-semibold">
              Our <span className="script text-6xl text-[#f3b7d3]">Features</span>
            </h1>

            <p className="muted mt-4 text-center">
              Everything you need to manage your team's work.
            </p>

            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
              <div className="panel p-8">
                <h2 className="serif text-2xl font-semibold text-[#f3b7d3]">Task Management</h2>
                <p className="muted mt-3">Create, assign and track tasks easily.</p>
                <img className="mt-4 w-full rounded-2xl" src="/taskmanage.png" alt="Task management" />
                <button className="btn btn-pink mt-5" onClick={() => setPage("taskmanager")}>
                  Open Task Manager
                </button>
              </div>

              <div className="panel p-8">
                <h2 className="serif text-2xl font-semibold text-[#f3b7d3]">Team Collaboration</h2>
                <p className="muted mt-3">Organize team activities and responsibilities.</p>
                <img className="mt-4 w-full rounded-2xl" src="/teamcollab.png" alt="Team collaboration" />
              </div>

              <div className="panel p-8">
                <h2 className="serif text-2xl font-semibold text-[#f3b7d3]">Progress Tracking</h2>
                <p className="muted mt-3">Monitor task status and improve productivity.</p>
                <img className="mt-4 w-full rounded-2xl" src="/teamprocess.png" alt="Progress tracking" />
              </div>
            </div>
          </div>
        </PulseBackground>
      )}

      {/* Task Manager */}
      {page === "taskmanager" && (
        <PulseBackground dim>
          <div className="px-6 py-12 md:px-12">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h1 className="serif text-5xl font-semibold">Task Manager</h1>
                <p className="muted mt-2">Manage and organize your tasks.</p>
              </div>

              <button className="btn btn-pink" onClick={() => setPage("task")}>
                + Create New Task
              </button>
            </div>

            <div className="panel mt-10 p-6 md:p-8">
              <h2 className="serif mb-5 text-3xl font-semibold text-[#f3b7d3]">
                My Tasks ({tasks.length})
              </h2>

              {tasks.length === 0 ? (
                <p className="muted py-10 text-center">
                  No tasks available. Click Create New Task to add one.
                </p>
              ) : (
                <div className="flex flex-col gap-4">
                  {tasks.map((task, index) => (
                    <div
                      key={index}
                      className="rounded-3xl border border-[rgba(243,183,211,.2)] bg-[#12060f] p-5"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h3 className="serif text-2xl font-semibold">{task.taskTitle}</h3>
                        <span className="chip">{task.taskStatus}</span>
                      </div>

                      <p className="muted mt-2">{task.description}</p>

                      <div className="muted mt-4 flex flex-wrap gap-5 text-sm">
                        <p>Employee: {task.assignedEmployee}</p>
                        <p>Priority: {task.priority}</p>
                        <p>Due Date: {task.dueDate}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </PulseBackground>
      )}

      {/* Register */}
      {page === "register" && (
        <PulseBackground>
          <RegisterForm onLogin={() => setPage("login")} />
        </PulseBackground>
      )}

      {/* Login */}
      {page === "login" && (
        <PulseBackground>
          <LoginForm onRegister={() => setPage("register")} />
        </PulseBackground>
      )}

      {/* Create Task */}
      {page === "task" && (
        <PulseBackground>
          <Createtaskform
            onCreate={addTask}
            onCancel={() => setPage("taskmanager")}
          />
        </PulseBackground>
      )}
    </div>
  );
}

export default LandingPage;