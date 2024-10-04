'use client'

import {useState} from 'react'
import {ChevronLeft, ChevronRight, MoreHorizontal, Search} from "lucide-react"
import {Button} from "@/components/ui/button"
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
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Badge} from "@/components/ui/badge"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

// Mock data for organizations
const organizations = [
    {
        id: 1,
        name: "Acme Corp",
        industry: "Technology",
        employees: 500,
        status: "Active",
        contactPerson: "John Doe",
        email: "john@acme.com",
        phone: "+1 (555) 123-4567",
        address: "123 Tech St, San Francisco, CA 94105"
    },
    {
        id: 2,
        name: "Global Industries",
        industry: "Manufacturing",
        employees: 1000,
        status: "Active",
        contactPerson: "Jane Smith",
        email: "jane@globalind.com",
        phone: "+1 (555) 987-6543",
        address: "456 Industrial Ave, Detroit, MI 48201"
    },
    {
        id: 3,
        name: "EcoSolutions",
        industry: "Environmental",
        employees: 250,
        status: "Pending",
        contactPerson: "Mike Johnson",
        email: "mike@ecosolutions.com",
        phone: "+1 (555) 246-8135",
        address: "789 Green Rd, Portland, OR 97201"
    },
    {
        id: 4,
        name: "HealthPlus",
        industry: "Healthcare",
        employees: 750,
        status: "Active",
        contactPerson: "Sarah Brown",
        email: "sarah@healthplus.com",
        phone: "+1 (555) 369-2580",
        address: "321 Wellness Blvd, Boston, MA 02115"
    },
    {
        id: 5,
        name: "TechStart",
        industry: "Technology",
        employees: 50,
        status: "Inactive",
        contactPerson: "Alex Lee",
        email: "alex@techstart.com",
        phone: "+1 (555) 741-8520",
        address: "654 Innovation Ln, Austin, TX 78701"
    },
    {
        id: 6,
        name: "FoodCo",
        industry: "Food & Beverage",
        employees: 300,
        status: "Active",
        contactPerson: "Emily Chen",
        email: "emily@foodco.com",
        phone: "+1 (555) 852-9630",
        address: "987 Tasty St, Chicago, IL 60607"
    },
    {
        id: 7,
        name: "BuildWell",
        industry: "Construction",
        employees: 400,
        status: "Active",
        contactPerson: "David Wilson",
        email: "david@buildwell.com",
        phone: "+1 (555) 147-2589",
        address: "753 Construction Ave, Denver, CO 80202"
    },
    {
        id: 8,
        name: "EduLearn",
        industry: "Education",
        employees: 150,
        status: "Pending",
        contactPerson: "Lisa Taylor",
        email: "lisa@edulearn.com",
        phone: "+1 (555) 963-8520",
        address: "159 Scholar Way, Cambridge, MA 02138"
    },
    {
        id: 9,
        name: "FinanceNow",
        industry: "Finance",
        employees: 600,
        status: "Active",
        contactPerson: "Robert Chang",
        email: "robert@financenow.com",
        phone: "+1 (555) 741-9630",
        address: "357 Wall St, New York, NY 10005"
    },
    {
        id: 10,
        name: "GreenEnergy",
        industry: "Energy",
        employees: 200,
        status: "Active",
        contactPerson: "Olivia Green",
        email: "olivia@greenenergy.com",
        phone: "+1 (555) 852-1470",
        address: "951 Solar Rd, Phoenix, AZ 85004"
    },
]

export default function Organizations() {
    const [currentPage, setCurrentPage] = useState(1)
    const [organizationsPerPage] = useState(5)
    const [searchTerm, setSearchTerm] = useState("")

    // Filter organizations based on search term
    const filteredOrganizations = organizations.filter(org =>
        org.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        org.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
        org.contactPerson.toLowerCase().includes(searchTerm.toLowerCase())
    )

    // Get current organizations for pagination
    const indexOfLastOrganization = currentPage * organizationsPerPage
    const indexOfFirstOrganization = indexOfLastOrganization - organizationsPerPage
    const currentOrganizations = filteredOrganizations.slice(indexOfFirstOrganization, indexOfLastOrganization)

    // Change page
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

    const statusColors = {
        Active: "bg-green-500",
        Pending: "bg-yellow-500",
        Inactive: "bg-red-500",
    }

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Organizations</h1>

            <div className="flex justify-between items-center mb-6">
                <div className="w-1/3">
                    <Label htmlFor="search" className="sr-only">Search Organizations</Label>
                    <div className="relative">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground"/>
                        <Input
                            id="search"
                            placeholder="Search organizations..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-8"
                        />
                    </div>
                </div>
                <Button>Add New Organization</Button>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Industry</TableHead>
                            <TableHead>Employees</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Contact Person</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {currentOrganizations.map((org) => (
                            <TableRow key={org.id}>
                                <TableCell className="font-medium">{org.name}</TableCell>
                                <TableCell>{org.industry}</TableCell>
                                <TableCell>{org.employees}</TableCell>
                                <TableCell>
                                    <Badge
                                        className={`${statusColors[org.status as keyof typeof statusColors]} text-white`}>
                                        {org.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>{org.contactPerson}</TableCell>
                                <TableCell>
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button variant="outline" size="sm">View Details</Button>
                                        </DialogTrigger>
                                        <DialogContent className="max-w-[425px]">
                                            <DialogHeader>
                                                <DialogTitle>{org.name}</DialogTitle>
                                                <DialogDescription>
                                                    Organization details
                                                </DialogDescription>
                                            </DialogHeader>
                                            <div className="grid gap-4 py-4">
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <Label htmlFor="industry" className="text-right">
                                                        Industry
                                                    </Label>
                                                    <Input id="industry" value={org.industry} className="col-span-3"
                                                           readOnly/>
                                                </div>
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <Label htmlFor="employees" className="text-right">
                                                        Employees
                                                    </Label>
                                                    <Input id="employees" value={org.employees} className="col-span-3"
                                                           readOnly/>
                                                </div>
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <Label htmlFor="status" className="text-right">
                                                        Status
                                                    </Label>
                                                    <Input id="status" value={org.status} className="col-span-3"
                                                           readOnly/>
                                                </div>
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <Label htmlFor="contact" className="text-right">
                                                        Contact
                                                    </Label>
                                                    <Input id="contact" value={org.contactPerson} className="col-span-3"
                                                           readOnly/>
                                                </div>
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <Label htmlFor="email" className="text-right">
                                                        Email
                                                    </Label>
                                                    <Input id="email" value={org.email} className="col-span-3"
                                                           readOnly/>
                                                </div>
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <Label htmlFor="phone" className="text-right">
                                                        Phone
                                                    </Label>
                                                    <Input id="phone" value={org.phone} className="col-span-3"
                                                           readOnly/>
                                                </div>
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <Label htmlFor="address" className="text-right">
                                                        Address
                                                    </Label>
                                                    <Input id="address" value={org.address} className="col-span-3"
                                                           readOnly/>
                                                </div>
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" className="h-8 w-8 p-0 ml-2">
                                                <span className="sr-only">Open menu</span>
                                                <MoreHorizontal className="h-4 w-4"/>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                            <DropdownMenuItem>Edit Organization</DropdownMenuItem>
                                            <DropdownMenuItem>Manage Users</DropdownMenuItem>
                                            <DropdownMenuItem>View Visitors</DropdownMenuItem>
                                            <DropdownMenuSeparator/>
                                            <DropdownMenuItem className="text-red-600">Delete
                                                Organization</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            {/* Pagination */}
            <div className="mt-6 flex items-center justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{indexOfFirstOrganization + 1}</span> to{" "}
                        <span className="font-medium">
              {Math.min(indexOfLastOrganization, filteredOrganizations.length)}
            </span>{" "}
                        of <span className="font-medium">{filteredOrganizations.length}</span> results
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
                        disabled={indexOfLastOrganization >= filteredOrganizations.length}
                    >
                        Next
                        <ChevronRight className="h-4 w-4"/>
                    </Button>
                </div>
            </div>
        </div>
    )
}
