import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function UserInputForm({ setCurrentProblem }) {
  const [tools, setTools] = useState('')
  const [problem, setProblem] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setCurrentProblem({ tools: tools.split(',').map(t => t.trim()), problem })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Describe Your Problem</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="tools" className="block text-sm font-medium mb-1">Available Tools & Materials</label>
            <Input
              id="tools"
              placeholder="e.g., hammer, duct tape, baking soda (comma-separated)"
              value={tools}
              onChange={(e) => setTools(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="problem" className="block text-sm font-medium mb-1">Describe Your Problem</label>
            <Textarea
              id="problem"
              placeholder="e.g., How do I fix a leaky faucet?"
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              rows={4}
            />
          </div>
          <Button type="submit">Find Solutions</Button>
        </form>
      </CardContent>
    </Card>
  )
}