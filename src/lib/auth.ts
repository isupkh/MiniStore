'use server'

import { cookies } from 'next/headers'

const ADMIN_EMAIL = 'admin@demo.com'
const ADMIN_PASSWORD = 'admin123'


export async function loginAdmin(email: string, password: string) {
  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const cookieStore = await cookies() 
    cookieStore.set('admin-auth', 'true', {
      httpOnly: true,
      maxAge: 60 * 60 * 24, 
      path: '/',
    })
    return { success: true }
  }
  return { success: false, message: 'Invalid credentials' }
}


export async function logoutAdmin() {
  const cookieStore = await cookies() 
  cookieStore.delete('admin-auth')
}


export async function isAdminLoggedIn(): Promise<boolean> {
  const cookieStore = await cookies()
  return cookieStore.get('admin-auth')?.value === 'true'
}