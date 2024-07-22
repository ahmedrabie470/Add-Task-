import React from "react";
import Tasks from "./Tasks";

export default function SelectedProject({ project ,onDeleteTask,onAddTask, tasks,onDelete}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="mt-16 w-[35rem]">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex text-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button onClick={onDelete} className=" text-stone-600  hover:text-stone-950">
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks  onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks}/>
    </div>
  );
}
