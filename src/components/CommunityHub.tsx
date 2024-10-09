import React, { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ThumbsUp, MessageSquare, Search } from 'lucide-react'

const mockCommunityPosts = [
  { id: 1, title: "How to unclog a drain without chemicals", likes: 45, comments: 12, tags: ["plumbing", "eco-friendly"] },
  { id: 2, title: "Quick fix for a squeaky door", likes: 30, comments: 8, tags: ["home maintenance", "quick fix"] },
  { id: 3, title: "DIY natural air freshener recipe", likes: 62, comments: 20, tags: ["cleaning", "natural solutions"] },
]

export default function CommunityHub() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPosts = mockCommunityPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <Input
          placeholder="Search community posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <Button>
          <Search className="w-4 h-4 mr-2" />
          Search
        </Button>
      </div>
      {filteredPosts.map(post => (
        <Card key={post.id}>
          <CardHeader>
            <CardTitle className="text-lg">{post.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="space-x-2">
                {post.tags.map(tag => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
              <div className="flex space-x-4 text-sm text-muted-foreground">
                <span className="flex items-center">
                  <ThumbsUp className="w-4 h-4 mr-1" />
                  {post.likes}
                </span>
                <span className="flex items-center">
                  <MessageSquare className="w-4 h-4 mr-1" />
                  {post.comments}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}