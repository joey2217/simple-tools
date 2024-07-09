'use client'

import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import React from 'react'

const Client: React.FC = () => {
  const { toast } = useToast()
  return (
    <div>
      <Button
        onClick={() => {
          toast({
            title: 'hello',
            description: 'world',
          })
        }}
      >
        toast
      </Button>
    </div>
  )
}

export default Client
