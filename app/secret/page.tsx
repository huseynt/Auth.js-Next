import {auth} from '@/auth'
import { Metadata } from 'next';
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
    title: "Next.js & Auth.js",
  };

export default async function Secret() {
    const session = await auth()
    const user = session?.user

    if (!session) return redirect('/')

    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <p className='text-green-700 text-lg'>Welcome Secret Page</p>
            {user && <p>{user.name}</p>}
        </div>
    )
}