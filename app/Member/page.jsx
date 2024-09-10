import { getServerSession } from 'next-auth'
import React from 'react'
import { options } from '../api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation';

const Member = async () => {
  const session = await getServerSession(options);

  if(!session){
    redirect('/api/auth/signin?callbackUrl=/Member')
  }
  console.log(session,"session")
  return (
    <div>Member
      <p>{session?.user?.email}</p>
      {session?.user?.role}
    </div>
  )
}

export default Member