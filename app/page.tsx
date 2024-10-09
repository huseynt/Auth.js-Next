import { auth, signIn, signOut } from "@/auth"
import style from "./page.module.css"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js & Auth.js",
};

 
export default async function SignIn() {
    const session = await auth()
    console.log(session)
    const user = session?.user


  return user ? (
    <div className={style.login}>
        <h1 className={style.h}>Welcome {user.name}</h1>
        <form
        action={async () => {
            "use server"
            await signOut()
        }}
        >
        <button type="submit" className={style.btn}>Sign Out</button>
        </form>
    </div>
  ) : (
    <div className={style.login}>
        <h1 className={style.h}>You are authenticated. Click below to sign in</h1>
        <form
        action={async () => {
            "use server"
            await signIn("google", {redirectTo: '/secret'})
        }}
        >
        <button type="submit" className={style.btn}>Signin with Google</button>
        </form>
    </div>
  )
} 