"use client"
import { signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react'

export default function UserInfo() {

  const {data:session} = useSession();

  return (
    <div className='flex flex-row items-center justify-between bg-slate-700 p-4'>
      <p className='text-white'>Hello dashboard</p>
  
      <div className='flex flex-row gap-6 text-white items-center'>
      <p>{session?.user?.name}</p>
      <button onClick={() => signOut()} className='px-4 py-1 bg-red-600 rounded-lg text-center text-white'>
        logout
      </button>
      </div>
    </div>
  )
}
