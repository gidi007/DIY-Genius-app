"use client"

import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeProvider } from "./ThemeContext"
import { UserProvider } from "./UserContext"
import Header from './Header'
import UserInputForm from './UserInputForm'
import SolutionGenerator from './SolutionGenerator'
import CommunityHub from './CommunityHub'
import MaterialFinder from './MaterialFinder'
import UserProfile from './UserProfile'

export function AppComponent() {
  const [currentProblem, setCurrentProblem] = useState(null)

  return (
    <ThemeProvider>
      <UserProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          <main className="container mx-auto p-4">
            <Tabs defaultValue="solve" className="w-full">
              <TabsList className="grid w-full grid-cols-5 mb-8">
                <TabsTrigger value="solve">Solve a Problem</TabsTrigger>
                <TabsTrigger value="community">Community Hub</TabsTrigger>
                <TabsTrigger value="materials">Material Finder</TabsTrigger>
                <TabsTrigger value="profile">My Profile</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
              </TabsList>
              <TabsContent value="solve" className="space-y-4">
                <UserInputForm setCurrentProblem={setCurrentProblem} />
                {currentProblem && <SolutionGenerator problem={currentProblem} />}
              </TabsContent>
              <TabsContent value="community">
                <CommunityHub />
              </TabsContent>
              <TabsContent value="materials">
                <MaterialFinder />
              </TabsContent>
              <TabsContent value="profile">
                <UserProfile />
              </TabsContent>
              <TabsContent value="achievements">
                <UserProfile showAchievements={true} />
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </UserProvider>
    </ThemeProvider>
  )
}