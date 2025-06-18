import React from "react";
import AcceptTask from "./AcceptTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="overflow-x-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mt-10  items-center justify-start gap-5   "
    >
       {data.tasks.map((elem, idx) => {
                if (elem.active) {
                    return <AcceptTask key={idx} data={elem} />
                }
                if (elem.newTask) {
                    return <NewTask key={idx} data={elem} />
                }
                if (elem.completed) {
                    return <CompleteTask key={idx} data={elem} />
                }
                if (elem.failed) {
                    return <FailedTask key={idx} data={elem} />
                }

            })}
    </div>
  );
};

export default TaskList;
