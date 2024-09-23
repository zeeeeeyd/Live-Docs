"use client";

import Loader from "@/components/Loader";
import { getClerkUsers } from "@/lib/actions/user.actions";
import { LiveblocksProvider, ClientSideSuspense } from "@liveblocks/react/suspense";
import { ReactNode } from "react";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <LiveblocksProvider 
      authEndpoint='/api/liveblocks-auth'
      resolveUsers={async(userId)=>{
        const users = await getClerkUsers(userId);
        
        return users;
      }}  
      >
      <ClientSideSuspense fallback={<Loader />}>
        {children}
      </ClientSideSuspense>
  </LiveblocksProvider>
  )
}

export default Provider