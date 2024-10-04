'use client'

import {useState} from 'react'
import {format} from 'date-fns'
import {Calendar as CalendarIcon, ChevronLeft, ChevronRight, MoreHorizontal} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Calendar} from "@/components/ui/calendar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Badge} from "@/components/ui/badge"

// Mock data for appointments
const appointments = [
    {
        id: 1,
        visitorName: "John Doe",
        date: "2024-10-04",
        time: "10:00 AM",
        host: "Alice Smith",
        purpose: "Interview",
        status: "Scheduled"
    },
    {
        id: 2,
        visitorName: "Jane Smith",
        date: "2024-10-04",
        time: "11:30 AM",
        host: "Bob Johnson",
        purpose: "Meeting",
        status: "Checked In"
    },
    {
        id: 3,
        visitorName: "Mike Brown",
        date: "2024-10-04",
        time: "02:00 PM",
        host: "Charlie Davis",
        purpose: "Delivery",
        status: "Completed"
    },
    {
        id: 4,
        visitorName: "Sarah Wilson",
        date: "2024-10-04",
        time: "09:30 AM",
        host: "David Lee",
        purpose: "Consultation",
        status: "Cancelled"
    },
    {
        id: 5,
        visitorName: "Tom Harris",
        date: "2024-10-04",
        time: "03:00 PM",
        host: "Eve Taylor",
        purpose: "Maintenance",
        status: "Rescheduled"
    },
    // Add more mock appointments as needed
]

export default function Appointments() {
    const [currentPage, setCurrentPage] = useState(1)
    const [appointmentsPerPage] = useState(5)
    const [selectedDate] = useState<Date | undefined>(new Date())
    const [searchTerm, setSearchTerm] = useState("")

    // Filter appointments based on selected date and search term
    const filteredAppointments = appointments.filter(appointment => {
        const appointmentDate = new Date(appointment.date)
        const isDateMatch = selectedDate ?
            appointmentDate.toDateString() === selectedDate.toDateString() :
            true
        const isSearchMatch = appointment.visitorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            appointment.host.toLowerCase().includes(searchTerm.toLowerCase()) ||
            appointment.purpose.toLowerCase().includes(searchTerm.toLowerCase())
        return isDateMatch && isSearchMatch
    })

    // Get current appointments for pagination
    const indexOfLastAppointment = currentPage * appointmentsPerPage
    const indexOfFirstAppointment = indexOfLastAppointment - appointmentsPerPage
    const currentAppointments = filteredAppointments.slice(indexOfFirstAppointment, indexOfLastAppointment)

    // Change page
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

    const statusColors = {
        Scheduled: "bg-blue-500",
        "Checked In": "bg-green-500",
        Completed: "bg-gray-500",
        Cancelled: "bg-red-500",
        Rescheduled: "bg-yellow-500",
    }

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Appointments</h1>

            <div
                className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
                <div className="flex-1 w-full md:w-auto md:mr-4">
                    <Label htmlFor="search" className="sr-only">Search Appointments</Label>
                    <Input
                        id="search"
                        placeholder="Search appointments..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full"
                    />
                </div>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full md:w-auto">
                            <CalendarIcon className="mr-2 h-4 w-4"/>
                            {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                        <Calendar
                            mode="single"
                            selected={selectedDate}
                            initialFocus
                        />
                    </PopoverContent>
                </Popover>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Visitor Name</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Time</TableHead>
                            <TableHead>Host</TableHead>
                            <TableHead>Purpose</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Actions</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {currentAppointments.length > 0 ? currentAppointments.map((appointment) => (
                            <TableRow key={appointment.id}>
                                <TableCell>{appointment.visitorName}</TableCell>
                                <TableCell>{appointment.date}</TableCell>
                                <TableCell>{appointment.time}</TableCell>
                                <TableCell>{appointment.host}</TableCell>
                                <TableCell>{appointment.purpose}</TableCell>
                                <TableCell>
                                    <Badge
                                        className={`${statusColors[appointment.status as keyof typeof statusColors]} text-white`}>
                                        {appointment.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button variant="outline" size="sm">View Details</Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>Appointment Details</DialogTitle>
                                                <DialogDescription>
                                                    Full information about the appointment.
                                                </DialogDescription>
                                            </DialogHeader>
                                            <div className="grid gap-4 py-4">
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <Label htmlFor="name" className="text-right">
                                                        Visitor Name
                                                    </Label>
                                                    <Input id="name" value={appointment.visitorName}
                                                           className="col-span-3" readOnly/>
                                                </div>
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <Label htmlFor="date" className="text-right">
                                                        Date
                                                    </Label>
                                                    <Input id="date" value={appointment.date} className="col-span-3"
                                                           readOnly/>
                                                </div>
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <Label htmlFor="time" className="text-right">
                                                        Time
                                                    </Label>
                                                    <Input id="time" value={appointment.time} className="col-span-3"
                                                           readOnly/>
                                                </div>
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <Label htmlFor="host" className="text-right">
                                                        Host
                                                    </Label>
                                                    <Input id="host" value={appointment.host} className="col-span-3"
                                                           readOnly/>
                                                </div>
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <Label htmlFor="purpose" className="text-right">
                                                        Purpose
                                                    </Label>
                                                    <Input id="purpose" value={appointment.purpose}
                                                           className="col-span-3" readOnly/>
                                                </div>
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <Label htmlFor="status" className="text-right">
                                                        Status
                                                    </Label>
                                                    <Input id="status" value={appointment.status} className="col-span-3"
                                                           readOnly/>
                                                </div>
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                </TableCell>
                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" className="h-8 w-8 p-0 ml-2">
                                                <span className="sr-only">Open menu</span>
                                                <MoreHorizontal className="h-4 w-4"/>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                            <DropdownMenuItem>Edit Appointment</DropdownMenuItem>
                                            <DropdownMenuItem>Send Reminder</DropdownMenuItem>
                                            <DropdownMenuSeparator/>
                                            <DropdownMenuItem className="text-red-600">Cancel
                                                Appointment</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        )) : (
                            <TableRow>
                                <TableCell colSpan={7} className="text-center">
                                    No appointments found for the selected filters.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            {/* Pagination */}
            <div className="mt-6 flex items-center justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{indexOfFirstAppointment + 1}</span> to{" "}
                        <span className="font-medium">
                            {Math.min(indexOfLastAppointment, filteredAppointments.length)}
                        </span>{" "}
                        of <span className="font-medium">{filteredAppointments.length}</span> results
                    </p>
                </div>
                <div className="flex items-center space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        <ChevronLeft className="h-4 w-4"/>
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => paginate(currentPage + 1)}
                        disabled={indexOfLastAppointment >= filteredAppointments.length}
                    >
                        Next
                        <ChevronRight className="h-4 w-4"/>
                    </Button>
                </div>
            </div>
        </div>
    )
}
