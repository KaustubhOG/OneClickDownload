'use client'
import SearchBar from '@/components/SearchBar'
import Button from '@/components/Button'
import { useState } from 'react'

const page = () => {
  const [searchinput, setsearchinput] = useState('')
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold">OneclickDownload</h1>
        <div className="flex gap-2">
          <SearchBar value={searchinput} setvalue={setsearchinput} />
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            <Button searchvalue={searchinput} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
