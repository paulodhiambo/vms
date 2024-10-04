import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Bell, Settings, Users} from "lucide-react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge";
import {Progress} from "@/components/ui/progress";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

export default function Home() {
    return (
        <>
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900 p-6">
                <h1 className="mb-6 text-3xl font-semibold text-gray-900 dark:text-white">Dashboard Overview</h1>
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
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div key={i} className="flex items-center">
                                        <Avatar className="h-9 w-9">
                                            <AvatarImage src={`/placeholder.svg?height=36&width=36`}
                                                         alt={`Visitor ${i}`}/>
                                            <AvatarFallback>V{i}</AvatarFallback>
                                        </Avatar>
                                        <div className="ml-4 space-y-1">
                                            <p className="text-sm font-medium leading-none">Visitor {i}</p>
                                            <p className="text-sm text-muted-foreground">
                                                Checked in: {new Date().toLocaleTimeString()}
                                            </p>
                                        </div>
                                        <Badge variant="outline" className="ml-auto">
                                            Active
                                        </Badge>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

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
                                <p>Detailed statistics for today&#39;s visitor activity and access control
                                    events.</p>
                                <div className="h-[300px] w-full bg-gray-200 dark:bg-gray-700 rounded-md"></div>
                            </TabsContent>
                            <TabsContent value="weekly" className="space-y-4">
                                <h3 className="text-lg font-semibold">Weekly Report</h3>
                                <p>Overview of visitor trends and access patterns for the past week.</p>
                                <div className="h-[300px] w-full bg-gray-200 dark:bg-gray-700 rounded-md"></div>
                            </TabsContent>
                            <TabsContent value="monthly" className="space-y-4">
                                <h3 className="text-lg font-semibold">Monthly Report</h3>
                                <p>Comprehensive analysis of visitor management and access control for the
                                    month.</p>
                                <div className="h-[300px] w-full bg-gray-200 dark:bg-gray-700 rounded-md"></div>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </main>
        </>
    );
}
