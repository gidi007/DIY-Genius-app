import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, ShoppingBag, Share2 } from 'lucide-react'

const mockMaterials = [
  { id: 1, name: "Duct Tape", alternatives: ["Electrical Tape", "Masking Tape"], nearby: "Home Depot (2.3 miles)" },
  { id: 2, name: "WD-40", alternatives: ["Vegetable Oil", "Petroleum Jelly"], nearby: "AutoZone (1.5 miles)" },
  { id: 3, name: "Baking Soda", alternatives: ["Vinegar", "Lemon Juice"], nearby: "Walmart (0.8 miles)" },
]

export default function MaterialFinder() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredMaterials = mockMaterials.filter(material =>
    material.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    material.alternatives.some(alt => alt.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <Input
          placeholder="Search for materials or tools..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <Button>
          <Search className="w-4 h-4 mr-2" />
          Find
        </Button>
      </div>
      {filteredMaterials.map(material => (
        <Card key={material.id}>
          <CardHeader>
            <CardTitle>{material.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div>
                <span className="font-semibold">Alternatives: </span>
                {material.alternatives.map((alt, index) => (
                  <Badge key={index} variant="secondary" className="mr-2">{alt}</Badge>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{material.nearby}</span>
                <div className="space-x-2">
                  <Button size="sm" variant="outline">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Buy
                  </Button>
                  <Button size="sm" variant="outline">
                    <Share2 className="w-4 h-4 mr-2" />
                    Borrow
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}