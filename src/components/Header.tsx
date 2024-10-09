import React from 'react'
import { MoonIcon, SunIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useTheme } from './ThemeContext'

export default function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="bg-primary text-primary-foreground py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">DIY Genius</h1>
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          {theme === 'light' ? <MoonIcon className="h-6 w-6" /> : <SunIcon className="h-6 w-6" />}
        </Button>
      </div>
    </header>
  )
}