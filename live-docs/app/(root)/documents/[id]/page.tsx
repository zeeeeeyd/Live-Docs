import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import React from 'react'

const Documents = () => {
  return (
    <div>
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
  )
}

export default Documents