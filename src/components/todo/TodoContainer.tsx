import { useAppSelector } from "@/Redux/hooks";

import { useGetTodosQuery } from "@/api/todo";
import { selectCount } from "@/features/todoSlice";
import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  // const todos = useAppSelector(selectCount);
  const [position, setPosition] = useState("");
  const { data: todos } = useGetTodosQuery(position);

  return (
    <div>
      <div className="flex justify-between mb-5 ">
        <AddTodoModal />
        <TodoFilter position={position} setPosition={setPosition} />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl  p-[5px]">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {todos?.data.map((item) => (
            <TodoCard key={item._id} {...item} />
          ))}
        </div>
        {/* <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center rounded-md">
          <p>There is no task pending</p>{' '}
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
