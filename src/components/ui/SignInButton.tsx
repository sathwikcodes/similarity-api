/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { signIn } from 'next-auth/react'
import { FC, useState, useEffect } from 'react'
import  Button  from './Button'
import { toast } from './toast'

/**
 * NextJS does not allow to pass function from server -> client components,
 * hence this unreusable component.
 */

interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  let redirectUrl = "http://location:3000";



  const signInWithGoogle = async () => {
    try {
      setIsLoading(true)
      await signIn('google',{ callbackUrl: 'https://www.google.com' });
    } catch (error) {
      toast({
        title: 'Error signing in',
        message: 'Please try again later.',
        type: 'error',
      })
    }
  }

  return (
    <Button onClick={signInWithGoogle} isLoading={isLoading}>
      Sign in
    </Button>
  )
}

export default SignInButton