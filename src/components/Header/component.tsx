'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

const HeaderComponent = () => {
  const router = useRouter()

  return (
    <header>
      <h1>Wippets</h1>

      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/my-pets">My Pets</Link>
          </li>
          <li>
            <Link href="/my-profile">My Profile</Link>
          </li>
          <li>
            <Link href="/my-reports">My Reports</Link>
          </li>
          <li>
            <Link href="/owners">Owners</Link>
          </li>
          <li>
            <Link href="/pets">Pets</Link>
          </li>
          <li>
            <Link href="/reports">Reports</Link>
          </li>
        </ul>
      </nav>

      <div>
        <button onClick={() => router.push('/login')}>Login</button>
        <button onClick={() => router.push('/register')}>Register</button>
      </div>
    </header>
  )
}

export { HeaderComponent }
