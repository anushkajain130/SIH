import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Chatbox = () => {
  return (
    <div className="h-[50%] max-w-[50%] w-[80%] lg:max-w-[50%] lg:w-[50%] rounded-lg bg-[#134B70] p-4 flex flex-col justify-between m-3">
      <div className="flex w-full items-center space-x-2 mt-auto">
        <Input type="email" placeholder="Email" className="flex-1" />
        <Button type="submit">ENTER</Button>
      </div>
    </div>
  )
}

export default Chatbox
