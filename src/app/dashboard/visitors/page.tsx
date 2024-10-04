'use client'

import {useState} from 'react'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Bell, Settings, Users, CheckCircle, XCircle} from "lucide-react"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {Badge} from "@/components/ui/badge"
import {Progress} from "@/components/ui/progress"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"

export default function Visitors() {
    const [searchTerm, setSearchTerm] = useState('peter');
    const [filterStatus, setFilterStatus] = useState('all');

    const visitorLog = [
        {
            id: 1,
            name: "Alice Johnson",
            checkIn: "2024-03-10T09:15:00",
            checkOut: "2024-03-10T17:30:00",
            status: "checked-out"
        },
        {id: 2, name: "Bob Smith", checkIn: "2024-03-10T10:00:00", checkOut: null, status: "active"},
        {id: 3, name: "Charlie Brown", checkIn: "2024-03-10T11:30:00", checkOut: null, status: "active"},
        {
            id: 4,
            name: "Diana Prince",
            checkIn: "2024-03-10T13:45:00",
            checkOut: "2024-03-10T15:30:00",
            status: "checked-out"
        },
        {id: 5, name: "Ethan Hunt", checkIn: "2024-03-10T14:00:00", checkOut: null, status: "active"},
    ]

    const filteredVisitors = visitorLog.filter(visitor =>
        visitor.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filterStatus === 'all' || visitor.status === filterStatus)
    );

    return (
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900 p-6">
            <h1 className="mb-6 text-3xl font-semibold text-gray-900 dark:text-white">Visitors Dashboard</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Visitors Today</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground"/>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">127</div>
                        <p className="text-xs text-muted-foreground">+15.9% from yesterday</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Visitors</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground"/>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">42</div>
                        <p className="text-xs text-muted-foreground">Currently on premises</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Access Requests</CardTitle>
                        <Settings className="h-4 w-4 text-muted-foreground"/>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">8</div>
                        <p className="text-xs text-muted-foreground">3 urgent requests</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Security Alerts</CardTitle>
                        <Bell className="h-4 w-4 text-muted-foreground"/>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">3</div>
                        <p className="text-xs text-muted-foreground">1 high priority alert</p>
                    </CardContent>
                </Card>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Visitor Traffic</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[200px] w-full bg-gray-200 dark:bg-gray-700 rounded-md"></div>
                    </CardContent>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Recent Visitors</CardTitle>
                        <CardDescription>Last 5 check-ins</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {visitorLog.slice(0, 5).map((visitor) => (
                                <div key={visitor.id} className="flex items-center">
                                    <Avatar className="h-9 w-9">
                                        <AvatarImage src={`/placeholder.svg?height=36&width=36`} alt={visitor.name}/>
                                        <AvatarFallback>{visitor.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div className="ml-4 space-y-1">
                                        <p className="text-sm font-medium leading-none">{visitor.name}</p>
                                        <p className="text-sm text-muted-foreground">
                                            Checked in: {new Date(visitor.checkIn).toLocaleTimeString()}
                                        </p>
                                    </div>
                                    <Badge variant={visitor.status === 'active' ? 'default' : 'secondary'}
                                           className="ml-auto">
                                        {visitor.status === 'active' ? 'Active' : 'Checked Out'}
                                    </Badge>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card className="mt-6">
                <CardHeader>
                    <CardTitle>Visitor Log</CardTitle>
                    <CardDescription>Manage and track visitor activity</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center space-x-2">
                            <Input
                                placeholder="Search visitors..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-64"
                            />
                            <Select value={filterStatus} onValueChange={setFilterStatus}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Filter by status"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All</SelectItem>
                                    <SelectItem value="active">Active</SelectItem>
                                    <SelectItem value="checked-out">Checked Out</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <Button>Check-in New Visitor</Button>
                    </div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Check-in Time</TableHead>
                                <TableHead>Check-out Time</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredVisitors.map((visitor) => (
                                <TableRow key={visitor.id}>
                                    <TableCell className="font-medium">{visitor.name}</TableCell>
                                    <TableCell>{new Date(visitor.checkIn).toLocaleString()}</TableCell>
                                    <TableCell>{visitor.checkOut ? new Date(visitor.checkOut).toLocaleString() : '-'}</TableCell>
                                    <TableCell>
                                        <Badge variant={visitor.status === 'active' ? 'default' : 'secondary'}>
                                            {visitor.status === 'active' ? 'Active' : 'Checked Out'}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        {visitor.status === 'active' ? (
                                            <Button variant="outline" size="sm">
                                                <XCircle className="mr-2 h-4 w-4"/>
                                                Check-out
                                            </Button>
                                        ) : (
                                            <Button variant="outline" size="sm" disabled>
                                                <CheckCircle className="mr-2 h-4 w-4"/>
                                                Checked Out
                                            </Button>
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle>Access Control Status</CardTitle>
                        <CardDescription>System health and performance</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="space-y-1">
                                    <p className="text-sm font-medium leading-none">Main Entrance</p>
                                    <p className="text-sm text-muted-foreground">Operational</p>
                                </div>
                                <Badge>Online</Badge>
                            </div>
                            <Progress value={100} className="h-2"/>
                            <div className="flex items-center justify-between">
                                <div className="space-y-1">
                                    <p className="text-sm font-medium leading-none">Employee Access Points</p>
                                    <p className="text-sm text-muted-foreground">3/4 Operational</p>
                                </div>
                                <Badge variant="outline">Partial</Badge>
                            </div>
                            <Progress value={75} className="h-2"/>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Visitor Demographics</CardTitle>
                        <CardDescription>Breakdown of today&#39;s visitors</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[200px] w-full bg-gray-200 dark:bg-gray-700 rounded-md"></div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Upcoming Appointments</CardTitle>
                        <CardDescription>Next 3 scheduled visits</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center">
                                    <Avatar className="h-9 w-9">
                                        <AvatarImage src={`/placeholder.svg?height=36&width=36`}
                                                     alt={`Appointment ${i}`}/>
                                        <AvatarFallback>A{i}</AvatarFallback>
                                    </Avatar>
                                    <div className="ml-4 space-y-1">
                                        <p className="text-sm font-medium leading-none">Appointment {i}</p>
                                        <p className="text-sm text-muted-foreground">
                                            {new Date(Date.now() + i * 3600000).toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card className="mt-6">
                <CardHeader>
                    <CardTitle>Detailed Reports</CardTitle>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue="daily" className="w-full">
                        <TabsList>
                            <TabsTrigger value="daily">Daily</TabsTrigger>
                            <TabsTrigger value="weekly">Weekly</TabsTrigger>
                            <TabsTrigger value="monthly">Monthly</TabsTrigger>
                        </TabsList>
                        <TabsContent value="daily" className="space-y-4">
                            <h3 className="text-lg font-semibold">Daily Report</h3>
                            <p>Detailed statistics for today&#39;s visitor activity and access control events.</p>
                            <div className="h-[300px] w-full bg-gray-200 dark:bg-gray-700 rounded-md"></div>
                        </TabsContent>
                        <TabsContent value="weekly" className="space-y-4">
                            <h3 className="text-lg font-semibold">Weekly Report</h3>
                            <p>Overview of visitor trends and access patterns for the past week.</p>
                            <div className="h-[300px] w-full bg-gray-200 dark:bg-gray-700 rounded-md"></div>
                        </TabsContent>
                        <TabsContent value="monthly" className="space-y-4">
                            <h3 className="text-lg font-semibold">Monthly Report</h3>
                            <p>Comprehensive analysis of visitor management and access control for the month.</p>
                            <div className="h-[300px] w-full bg-gray-200 dark:bg-gray-700 rounded-md"></div>
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
        </main>
    )
}
