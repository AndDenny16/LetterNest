'use client'
import { Upload, Send, FileText, SquareArrowUpRight } from 'lucide-react'
import React from 'react'
import Link from 'next/link'

const DownMenu = () => {
  return (
    <div className=' w-[280px] min-h-screen border-r-2 border-r-green-900 py-2 shadow-[6px_0px_10px_rgba(0,0,0,0.2)] flex flex-col items-start bg-slate-50 font-serif'>
        <Link className="btn btn-ghost text-m  text-green-800 text-xl my-2 w-full  justify-start" href='/Home'><FileText size={20}/> My Recs</Link>
        <Link className="btn btn-ghost text-m  text-green-800 text-xl my-2 w-full justify-start" href='/writtenrecs'><FileText size={20}/> My Written Recs</Link>
        <Link className="btn btn-ghost text-m text-green-800 text-xl my-2 w-full justify-start" href='/Upload'><Upload size = {20} />Upload</Link>
        <Link className="btn btn-ghost text-m  text-green-800 text-xl my-2 w-full justify-start" href='/Send'> <Send size={20} /> Send</Link>
        <Link className="btn btn-ghost text-m  text-green-800 text-xl my-2 w-full justify-start" href='/Request'><SquareArrowUpRight size={20}/> Request</Link>
       
    </div>
  )
}

export default DownMenu