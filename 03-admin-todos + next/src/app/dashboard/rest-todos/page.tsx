import prisma from "@/lib/prisma";
import { TodosGrid } from "@/todos";
import { NewTodo } from "@/todos/components/NewTodo";

import * as api from "@/todos/helpers/todos"

export default async function RestTodoPage() {

  const todos = await prisma.todo.findMany({ orderBy: {description: 'asc'}})

  return (
    <div>
      <div className="w-full px-3 mx-7 mb-3">
        <NewTodo />
      </div>
      <TodosGrid todos={todos}/>
    </div>
  );
}