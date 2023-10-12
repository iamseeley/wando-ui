"use client"


import * as React from "react"
import { useMDXComponent } from 'next-contentlayer/hooks'
 
interface MdxProps {
    code: string
  }
  
  export function Mdx({ code }: MdxProps) {
    const MDXContent = useMDXComponent(code)

    return (
        <div className="prose">
            <MDXContent />
        </div>
      )
    }