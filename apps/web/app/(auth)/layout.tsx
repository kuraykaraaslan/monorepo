'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSnowman } from '@fortawesome/free-solid-svg-icons'

//create a context to store the user's authentication status
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Logo from '@gevrek/ui/common/Logo';


export default function AuthLayout({ children }: { children: React.ReactNode }) {

  //Create a context to store the user's authentication status

  const pathname = usePathname();

  const titles = [
    {
      path: '/auth/login',
      title: 'Welcome back!'
    },
    {
      path: '/auth/register',
      title: 'Create an account'
    },
    {
      path: '/auth/sso',
      title: 'Single Sign On'
    },
    {
      path: '/auth/forgot-password',
      title: 'Forgot Password'
    },
    {
      path: '/auth/reset-password',
      title: 'Reset Password'
    },
    {
      path: '/auth/verify',
      title: 'Verify Account'
    },
    {
      path: '/auth/tenant',
      title: 'Select Tenant'
    },
    {
      path: '/auth/2fa',
      title: 'Two Factor Authentication'
    },
    {
      path: '/auth/invite',
      title: 'Invitation'
    }
  ]

  const secondaryLinks = [
    {
      path: '/auth/login',
      text: 'Already have an account?',
      url: '/auth/register',
      label: 'Register'
    },
    {
      path: '/auth/register',
      text: 'Not a member?',
      url: '/auth/login',
      label: 'Login'
    },
    {
      path: '/auth/sso',
      text: 'Use password instead?',
      url: '/auth/login',
      label: 'Login'
    },
  ]


  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-red min-h-screen">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex items-center justify-center">
            <Logo />
          </div>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
            {titles.map((titleObj) => {
              if (pathname === titleObj.path) {
                return titleObj.title
              }
              return null;
            })}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full max-w-sm bg-base-200 p-4 rounded-md shadow-md">
          {children}
        </div>

        <p className="mt-4 text-center text-sm text-gray-500">
          {secondaryLinks.map((link, index) => {
            if (pathname === link.path) {
              return (
                  <span key={index}>{link.text}{' '}
                    <Link href={link.url} className="font-semibold leading-6 text-primary">{link.label}</Link>
                  </span>
                )
            }
            return null;
          })}
        </p>
        <p className="mt-4 text-center text-sm text-gray-500">
          {pathname == '/auth/login' && <Link href="/auth/forgot-password" className="font-semibold leading-6 text-primary">Forgot Password</Link>}
          {pathname == '/auth/forgot-password' && <Link href="/auth/login" className="font-semibold leading-6 text-primary">Remembered Password?</Link>}
        </p>
      </div>
    </>
  )
}
