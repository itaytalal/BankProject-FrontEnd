import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Root() {
    return (
        <main className="flex flex-col  font-sans">
          <header className="bg-gray-800 text-white py-4 text-center ">
            <div className="max-w-screen-lg mx-auto px-4">
              <h2 className="m-0">Talal Bank</h2>
            </div>
          </header>
          <div className="flex-grow">
            <Outlet />
          </div>
        </main>
      )
}
