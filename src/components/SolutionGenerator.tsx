import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Clock, Tool } from 'lucide-react'

// Mock function to simulate API call for solutions
const fetchSolutions = async (problem) => {
  // In a real app, this would be an API call
  await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API delay
  return [
    {
      id: 1,
      title: "Quick Fix",
      steps: ["Step 1: Identify the source of the leak", "Step 2: Tighten the faucet handle", "Step 3: Replace the washer if needed"],
      complexity: "Easy",
      timeRequired: "15 minutes",
      effectiveness: 0.7
    },
    {
      id: 2,
      title: "Complete Repair",
      steps: ["Step 1: Turn off water supply", "Step 2: Disassemble the faucet", "Step 3: Replace O-rings and washers", "Step 4: Reassemble and test"],
      complexity: "Medium",
      timeRequired: "1 hour",
      effectiveness: 0.95
    }
  ]
}

export default function SolutionGenerator({ problem }) {
  const [solutions, setSolutions] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetchSolutions(problem).then(data => {
      setSolutions(data)
      setLoading(false)
    })
  }, [problem])

  if (loading) {
    return <div className="text-center">Generating solutions...</div>
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Suggested Solutions</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {solutions.map((solution, index) => (
            <AccordionItem key={solution.id} value={`item-${index}`}>
              <AccordionTrigger>
                <div className="flex items-center justify-between w-full">
                  <span>{solution.title}</span>
                  <div className="flex items-center space-x-2">
                    <Badge variant={solution.complexity === "Easy" ? "secondary" : "destructive"}>
                      {solution.complexity}
                    </Badge>
                    <Badge variant="outline" className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {solution.timeRequired}
                    </Badge>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ol className="list-decimal list-inside space-y-2">
                  {solution.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
                <div className="mt-4">
                  <Button className="w-full">
                    <Tool className="w-4 h-4 mr-2" />
                    Start This Solution
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}