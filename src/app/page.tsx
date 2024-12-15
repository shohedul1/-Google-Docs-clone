import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <Button>hello</Button>
      Click<Link href={"/documents/456"}>here</Link>
    </div>
  )
}

export default Home
