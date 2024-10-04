"use client";

import {useState} from "react";
import {
    Bell,
    Calendar,
    ChevronDown,
    Layout,
    LogOut,
    Menu,
    Search,
    Settings,
    Users,
    FileText, Shield, // Add an icon for Reports
} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import Visitors from "@/app/dashboard/visitors/page";
import Home from "@/app/dashboard/home/page";
import AccessControl from "@/app/dashboard/access-control/page";
import Appointments from "@/app/dashboard/appointments/appointments";
import ReportsPage from "@/app/dashboard/reports/page";
import SettingsPage from "@/app/dashboard/settings/page";
import Link from "next/link";
import Organizations from "@/app/dashboard/organisations/page";
import Facilities from "@/app/dashboard/facilities/page";

export default function EnhancedDashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [selectedContent, setSelectedContent] = useState("dashboard");

    const renderContent = () => {
        switch (selectedContent) {
            case "home":
                return <Home/>;
            case "visitors":
                return <Visitors/>;
            case "accessControl":
                return <AccessControl/>;
            case "organisations":
                return <Organizations/>;
            case "facilities":
                return <Facilities/>;
            case "appointments":
                return <Appointments/>;
            case "reports": // New case for reports
                return <ReportsPage/>;
            case "settings": // New case for reports
                return <SettingsPage/>;
            default:
                return <Home/>;
        }
    };

    return (
        <div className="flex h-screen overflow-hidden bg-gray-100 dark:bg-gray-900">
            {/* Sidebar */}
            <aside
                className={`${
                    sidebarOpen ? "translate-x-0" : "-translate-x-full"
                } fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0`}
            >
                <div className="flex h-16 items-center justify-between px-4 border-b dark:border-gray-700">
                    <Link className="flex items-center justify-center" href="#">
                        <Shield className="h-6 w-6 text-primary"/>
                        <span className="ml-2 text-2xl font-bold text-gray-900 dark:text-white">VisiGuard</span>
                    </Link>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="lg:hidden"
                        onClick={() => setSidebarOpen(false)}
                    >
                        <Menu className="h-6 w-6"/>
                    </Button>
                </div>
                <nav className="mt-8 px-4">
                    <ul className="space-y-2">
                        <li>
                            <Button
                                variant="ghost"
                                className="w-full justify-start"
                                onClick={() => setSelectedContent("home")}
                            >
                                <Layout className="mr-3 h-5 w-5"/>
                                Dashboard
                            </Button>
                        </li>
                        <li>
                            <Button
                                variant="ghost"
                                className="w-full justify-start"
                                onClick={() => setSelectedContent("appointments")}
                            >
                                <Calendar className="mr-3 h-5 w-5"/>
                                Appointments
                            </Button>
                        </li>
                        <li>
                            <Button
                                variant="ghost"
                                className="w-full justify-start"
                                onClick={() => setSelectedContent("organisations")}
                            >
                                <Users className="mr-3 h-5 w-5"/>
                                Organisation
                            </Button>
                        </li>
                        <li>
                            <Button
                                variant="ghost"
                                className="w-full justify-start"
                                onClick={() => setSelectedContent("facilities")}
                            >
                                <Users className="mr-3 h-5 w-5"/>
                                Facilities
                            </Button>
                        </li>
                        <li>
                            <Button
                                variant="ghost"
                                className="w-full justify-start"
                                onClick={() => setSelectedContent("reports")}
                            >
                                <FileText className="mr-3 h-5 w-5"/> {/* Reports Icon */}
                                Reports
                            </Button>
                        </li>
                        <li>
                            <Button
                                variant="ghost"
                                className="w-full justify-start"
                                onClick={() => setSelectedContent("settings")}
                            >
                                <Settings className="mr-3 h-5 w-5"/>
                                Settings
                            </Button>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex flex-1 flex-col overflow-hidden">
                {/* Header */}
                <header
                    className="flex h-16 items-center justify-between border-b bg-white dark:bg-gray-800 dark:border-gray-700 px-6">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="lg:hidden"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <Menu className="h-6 w-6"/>
                    </Button>
                    <div className="flex items-center">
                        <Search className="mr-2 h-5 w-5 text-gray-500 dark:text-gray-400"/>
                        <Input type="search" placeholder="Search..." className="w-64"/>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon">
                            <Bell className="h-5 w-5"/>
                        </Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="flex items-center gap-2">
                                    <Avatar>
                                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User avatar"/>
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                    <span>John Doe</span>
                                    <ChevronDown className="h-4 w-4"/>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator/>
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Settings</DropdownMenuItem>
                                <DropdownMenuSeparator/>
                                <DropdownMenuItem>
                                    <LogOut className="mr-2 h-4 w-4"/>
                                    <span>Log out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </header>

                {/* Main Content Area */}
                <div className="flex-1 overflow-auto">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}
