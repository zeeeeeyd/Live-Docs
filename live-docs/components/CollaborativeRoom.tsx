'use client'

import { ClientSideSuspense, RoomProvider } from '@liveblocks/react/suspense'
import React from 'react'
import Header from './Header'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { Editor } from './editor/Editor'

const CollaborativeRoom = () => {
  return (
    <RoomProvider id="my-room">
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          <div className='collaborative-room'>
            <Header>
                <div className='flex items-center justify-center w-fit gap-2'>
                    <p className='document-title'>Untitled</p>
                </div>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </Header>
            <Editor />
          </div>
        </ClientSideSuspense>
    </RoomProvider>
  )
}

export default CollaborativeRoom