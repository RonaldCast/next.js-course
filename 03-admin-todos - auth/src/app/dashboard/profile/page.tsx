'use client';

import { useSession } from "next-auth/react";

export default function ProfilePage() {

// get info session in to client side 

const { data: session }= useSession()

  return (
    <div>
        <h1>Page Profile</h1>
        <hr />
        <div className="flex flex-col">
            <span>{session?.user?.name ?? 'No name'}</span>
            <span>{session?.user?.email ?? 'No email'}</span>
            <span>{session?.user?.image ?? 'No user'}</span>
        </div>
    </div>
  )
}
