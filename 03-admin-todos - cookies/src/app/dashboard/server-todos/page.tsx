// clean cache in next 
export const dynamic = 'force-dynamic' // no storage cache If the components has changed this for to reload 
export const revalidate = 0 // reload alway 

import prisma from "@/lib/prisma";
import { TodosGrid } from "@/todos";
import { NewTodo } from "@/todos/components/NewTodo";

export default async function ServerTodoPage() {

  const todos = await prisma.todo.findMany({ orderBy: {description: 'asc'}})

  console.log("construido")
  return (
    <div>
        <h1 className="text-2xl mb-3">Server Todo</h1>
        <div className="w-full px-3 mx-7 mb-3">
          <NewTodo />
        </div>
        <TodosGrid todos={todos}/>
    </div>
  );
}