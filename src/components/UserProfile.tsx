import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Award, Star, Tool } from 'lucide-react'

const mockUser = {
  name: "Jane Doe",
  level: 7,
  xp: 720,
  nextLevelXp: 1000,
  solvedProblems: 23,
  achievements: [
    { id: 1, name: "Quick Fixer", description: "Solved 10 problems in under 30 minutes each" },
    { id: 2, name: "Eco Warrior", description: "Used eco-friendly solutions in 20 fixes" },
    { id: 3, name: "Tool Master", description: "Used 50 different tools across all solutions" },
  ]
}

export default function UserProfile({ showAchievements = false }) {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>{mockUser.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <Badge variant="secondary" className="text-lg py-1">
              Level {mockUser.level}
            </Badge>
            <Progress value={(mockUser.xp / mockUser.nextLevelXp) * 100} className="flex-grow" />
            <span className="text-sm text-muted-foreground">
              {mockUser.xp} / {mockUser.nextLevelXp} XP
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center">
              <Tool className="w-5 h-5 mr-2" />
              {mockUser.solvedProblems} Problems Solved
            </span>
            <span className="flex items-center">
              <Star className="w-5 h-5 mr-2" />
              {mockUser.achievements.length} Achievements
            </span>
          </div>
        </CardContent>
      </Card>

      {showAchievements && (
        <Card>
          <CardHeader>
            <CardTitle>Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockUser.achievements.map(achievement => (
                <div key={achievement.id} className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">{achievement.name}</h3>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}