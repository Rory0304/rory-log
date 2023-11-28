import React, { ReactNode } from "react"
import { Noto_Color_Emoji } from "next/font/google"

type Props = {
  className?: string
  children?: ReactNode
}

export const Emoji = ({ className, children }: Props) => {
  return <span className={className}>{children}</span>
}
