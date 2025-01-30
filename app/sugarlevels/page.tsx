import React from 'react'
import SugarlevelsForm from '../components/SugarlevelsForm'
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from '../api/auth/[...nextauth]/route'

export default async function sugar_levels() {

  const session = await getServerSession(authOptions);

    if(session){
        redirect('/dashboard')
    }

  return (
    <>
    <SugarlevelsForm />
    </>
  )
}
