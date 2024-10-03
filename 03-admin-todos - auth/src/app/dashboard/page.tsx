import { WidgetItem } from "@/components";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";


export default async function DashboardPage(){

  // Get the session
  const session = await getServerSession(authOptions);

  if(!session){
    redirect('/api/auth/signin')
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <WidgetItem title="Usuario conectado s-side">
        <div>
          <div>{session.user?.name}</div>
          <div>{session.user?.email}</div>
        </div>
      </WidgetItem>
    </div>
  );
}
