import React from 'react'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h2>Next Apollo Sample App</h2>
      {children}
    </div>
  )
}
