import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// 1. Zod validation schema
const taskSchema = z.object({
  taskTitle: z.string()
    .trim()
    .min(3, "Task title must contain at least 3 characters"),

  description: z.string()
    .trim()
    .min(1, "Description is required"),

  assignedEmployee: z.string()
    .min(1, "Please select an employee"),

  priority: z.enum(["Low", "Medium", "High"], {
    error: "Please select a priority",
  }),

  dueDate: z.string()
    .min(1, "Due date is required")
    .refine(
      (date) => !Number.isNaN(Date.parse(date)),
      "Please select a valid date"
    ),

  taskStatus: z.enum(["Pending", "In Progress", "Completed"], {
    error: "Please select a task status",
  }),
});

function Createtaskform({ onCreate, onCancel }) {

  // 2. React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      taskTitle: "",
      description: "",
      assignedEmployee: "",
      priority: "",
      dueDate: "",
      taskStatus: "",
    },
  });

  // 3. Submit only when validation succeeds
  const onSubmit = (data) => {
    console.log("Task Created Successfully:", data);

    if (onCreate) {
      onCreate(data);
    }
  };

  return (
    <div className="florals flex min-h-[88vh] w-full items-center justify-center px-4 py-12">
      <span className="bloom pink" style={{ width: 340, height: 340, right: -70, top: -80 }} />
      <span className="bloom mag" style={{ width: 300, height: 300, left: -90, bottom: -60 }} />
      <span className="bloom rose" style={{ width: 240, height: 240, left: "40%", bottom: -110 }} />
      <span className="bloom mag" style={{ width: 180, height: 180, right: 40, bottom: 20 }} />
      <span className="berry" style={{ left: "8%", top: 40 }} />
      <div className="veil" />

      <div className="content fl-card fl-wide">
        <p className="fl-eyebrow">PULSEWORKS-AI</p>

        <h2 className="serif text-center text-4xl font-semibold leading-tight">
          Create <span className="script text-5xl text-[#f3b6cf]">New Task</span>
        </h2>

        <p className="muted mb-7 mt-3 text-center text-sm">
          Enter your task details
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

          {/* Task Title */}
          <div className="grid gap-2">
            <label className="fl-label">Task Title</label>
            <input
              type="text"
              placeholder="Enter task title"
              {...register("taskTitle")}
              className="fl-field"
            />
            <p className="fl-error">{errors.taskTitle?.message}</p>
          </div>

          {/* Description */}
          <div className="grid gap-2">
            <label className="fl-label">Description</label>
            <textarea
              placeholder="Enter description"
              rows="3"
              {...register("description")}
              className="fl-field fl-area"
            />
            <p className="fl-error">{errors.description?.message}</p>
          </div>

          {/* Assigned Employee */}
          <div className="grid gap-2">
            <label className="fl-label">Assigned Employee</label>
            <select {...register("assignedEmployee")} className="fl-field fl-select">
              <option value="">Select Employee</option>
              <option value="Employee 1">Employee 1</option>
              <option value="Employee 2">Employee 2</option>
              <option value="Employee 3">Employee 3</option>
            </select>
            <p className="fl-error">{errors.assignedEmployee?.message}</p>
          </div>

          {/* Priority */}
          <div className="grid gap-2">
            <label className="fl-label">Priority</label>
            <select {...register("priority")} className="fl-field fl-select">
              <option value="">Select Priority</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
            <p className="fl-error">{errors.priority?.message}</p>
          </div>

          {/* Due Date */}
          <div className="grid gap-2">
            <label className="fl-label">Due Date</label>
            <input type="date" {...register("dueDate")} className="fl-field" />
            <p className="fl-error">{errors.dueDate?.message}</p>
          </div>

          {/* Task Status */}
          <div className="grid gap-2">
            <label className="fl-label">Task Status</label>
            <select {...register("taskStatus")} className="fl-field fl-select">
              <option value="">Select Status</option>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
            <p className="fl-error">{errors.taskStatus?.message}</p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-3">
            <button type="button" onClick={onCancel} className="fl-cancel">
              Cancel
            </button>
            <button type="submit" className="fl-submit">
              Create Task
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Createtaskform;