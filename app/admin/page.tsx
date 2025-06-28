"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, Calendar, User, Loader2, RefreshCw } from "lucide-react"
import { sampleContacts } from "@/lib/data"

interface ContactMessage {
  id: string
  name: string
  email: string
  subject: string
  message: string
  createdAt: string
  status: "read" | "unread"
}

export default function AdminPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Load sample data first, then try to fetch real data
    setMessages(sampleContacts)
    setLoading(false)
    fetchMessages()
  }, [])

  const fetchMessages = async () => {
    try {
      const response = await fetch("/api/contact")
      if (response.ok) {
        const data = await response.json()
        // Combine sample data with real data for preview
        setMessages([...data, ...sampleContacts])
      }
    } catch (error) {
      console.error("Error fetching messages:", error)
      // Keep sample data if API fails
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const handleRefresh = () => {
    setLoading(true)
    setTimeout(() => {
      fetchMessages()
      setLoading(false)
    }, 1000)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Admin Dashboard</h1>
              <p className="text-gray-600 dark:text-gray-300">Manage contact messages and portfolio content</p>
            </div>
            <Button onClick={handleRefresh} variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
          </div>

          <div className="grid gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Contact Messages ({messages.length})
                  <Badge variant="secondary" className="ml-2">
                    Preview Mode
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {messages.length === 0 ? (
                  <p className="text-gray-500 dark:text-gray-400 text-center py-8">No contact messages yet.</p>
                ) : (
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <Card key={message.id} className="border-l-4 border-l-blue-500">
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <User className="h-4 w-4 text-gray-500" />
                              <span className="font-medium">{message.name}</span>
                              <Badge variant={message.status === "unread" ? "default" : "secondary"}>
                                {message.status}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <Calendar className="h-4 w-4" />
                              {formatDate(message.createdAt)}
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Mail className="h-4 w-4" />
                            {message.email}
                          </div>
                        </CardHeader>
                        <CardContent>
                          <h4 className="font-medium mb-2">{message.subject}</h4>
                          <p className="text-gray-600 dark:text-gray-300 mb-4">{message.message}</p>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              Reply
                            </Button>
                            <Button size="sm" variant="outline">
                              Mark as Read
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
