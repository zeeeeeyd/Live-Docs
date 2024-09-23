import CollaborativeRoom from '@/components/CollaborativeRoom'
import { getDocument } from "@/lib/actions/room.actions";
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

const Documents = async ({ params: {id} } : SearchParamProps) => {

  const clerkUser = await currentUser();
  if (!clerkUser) redirect('/sign-in')
  
  const room = await getDocument()

  return (
    <main className='w-full flex flex-col items-center'>
      <CollaborativeRoom />
    </main>
  )
}

export default Documents