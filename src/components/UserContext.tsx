"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

type User = {
  name: string
  level: number
  xp: number
  nextLevelXp: number
  solvedProblems: number
  achievements: Array<{
    id: number
    name: string
    description: string
  }>
}

type UserContextType = {
  user: User
  updateUser: (updates: Partial<User>) => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>({
    name: "Jane Doe",
    level: 1,
    xp: 0,
    nextLevelXp: 100,
    solvedProblems: 0,
    achievements: []
  })

  useEffect(() => {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  const updateUser = (updates: Partial<User>) => {
    setUser(prevUser => {
      const newUser = { ...prevUser, ...updates }
      
      // Check if user should level up
      if (newUser.xp >= newUser.nextLevelXp) {
        newUser.level += 1
        newUser.xp -= newUser.nextLevelXp
        newUser.nextLevelXp = Math.round(newUser.nextLevelXp * 1.5)
      }

      return newUser
    })
  }

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}