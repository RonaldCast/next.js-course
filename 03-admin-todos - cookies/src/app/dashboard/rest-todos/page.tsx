export const dynamic = 'force-dynamic' // no storage cache If the components has changed this for to reload 
export const revalidate = 0 // force to render always the page. 

import prisma from "@/lib/prisma";
import { TodosGrid } from "@/todos";
import { NewTodo } from "@/todos/components/NewTodo";


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