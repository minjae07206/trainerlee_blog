'use client'
 
import { useFormState, useFormStatus } from 'react-dom'
 
export default function Page() {
 
  return (
    <form>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <LoginButton />
    </form>
  )
}
 
function LoginButton() {
  const { pending } = useFormStatus()
 
  const handleClick = (event: any) => {
    if (pending) {
      event.preventDefault()
    }
  }
 
  return (
    <button aria-disabled={pending} type="submit" onClick={handleClick}>
      Login
    </button>
  )
}