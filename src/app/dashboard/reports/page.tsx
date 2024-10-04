"use client";

import {useState} from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {PieChart, BarChart, LineChart} from "recharts";
import {FileSpreadsheet, Search, FileText} from 'lucide-react';
import {DatePickerWithRange} from "@/components/ui/data-picker";

// Extended mock data for demonstration purposes
const visitorData = [
    {
        id: 1,
        name: "John Doe",
        checkIn: "2024-03-01T09:00:00",
        checkOut: "2024-03-01T17:00:00",
        purpose: "Meeting",
        host: "Alice Smith"
    },
    {
        id: 2,
        name: "Jane Smith",
        checkIn: "2024-03-02T10:30:00",
        checkOut: "2024-03-02T16:45:00",
        purpose: "Interview",
        host: "Bob Johnson"
    },
    {
        id: 3,
        name: "Mike Brown",
        checkIn: "2024-03-03T08:15:00",
        checkOut: "2024-03-03T12:30:00",
        purpose: "Delivery",
        host: "Charlie Davis"
    },
    {
        id: 4,
        name: "Sarah Wilson",
        checkIn: "2024-03-04T13:00:00",
        checkOut: "2024-03-04T18:00:00",
        purpose: "Consultation",
        host: "David Lee"
    },
    {
        id: 5,
        name: "Tom Harris",
        checkIn: "2024-03-05T11:45:00",
        checkOut: "2024-03-05T15:30:00",
        purpose: "Maintenance",
        host: "Eve Taylor"
    },
    {
        id: 6,
        name: "Alice Green",
        checkIn: "2024-03-06T09:00:00",
        checkOut: "2024-03-06T17:00:00",
        purpose: "Meeting",
        host: "Frank Wright"
    },
    {
        id: 7,
        name: "Bob White",
        checkIn: "2024-03-07T10:30:00",
        checkOut: "2024-03-07T16:45:00",
        purpose: "Interview",
        host: "Grace Black"
    },
    {
        id: 8,
        name: "Charlie Blue",
        checkIn: "2024-03-08T08:15:00",
        checkOut: "2024-03-08T12:30:00",
        purpose: "Delivery",
        host: "Hannah Red"
    },
    {
        id: 9,
        name: "Diana Grey",
        checkIn: "2024-03-09T13:00:00",
        checkOut: "2024-03-09T18:00:00",
        purpose: "Consultation",
        host: "Ian Orange"
    },
    {
        id: 10,
        name: "Eve Yellow",
        checkIn: "2024-03-10T11:45:00",
        checkOut: "2024-03-10T15:30:00",
        purpose: "Maintenance",
        host: "Jack Purple"
    },
    // Add more visitors as needed...
];

export default function ReportsPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [reportType, setReportType] = useState('visitor-log');
    const [chartType, setChartType] = useState('bar');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Adjust the number of items per page

    const filteredData = visitorData.filter(visitor =>
        visitor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        visitor.purpose.toLowerCase().includes(searchTerm.toLowerCase()) ||
        visitor.host.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

    const exportToExcel = () => {
        console.log("Exporting to Excel...");
        // Implement Excel export logic here
    };

    const exportToPDF = () => {
        console.log("Exporting to PDF...");
        // Implement PDF export logic here
    };

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <div className="flex flex-col h-screen overflow-hidden">
            <div className="container mx-auto p-6 overflow-y-auto">
                <h1 className="text-3xl font-bold mb-6">Reports</h1>

                <Card className="mb-6">
                    <CardHeader>
                        <CardTitle>Report Filters</CardTitle>
                        <CardDescription>Customize your report view</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex flex-wrap gap-4">
                            <div className="flex-1">
                                <Label htmlFor="date-range">Date Range</Label>
                                <DatePickerWithRange/>
                            </div>
                            <div className="flex-1">
                                <Label htmlFor="report-type">Report Type</Label>
                                <Select value={reportType} onValueChange={setReportType}>
                                    <SelectTrigger id="report-type">
                                        <SelectValue placeholder="Select report type"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="visitor-log">Visitor Log</SelectItem>
                                        <SelectItem value="access-control">Access Control</SelectItem>
                                        <SelectItem value="security-incidents">Security Incidents</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex-1">
                                <Label htmlFor="search">Search</Label>
                                <div className="relative">
                                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground"/>
                                    <Input
                                        id="search"
                                        placeholder="Search in reports..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="pl-8"
                                    />
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <div>
                            <CardTitle>Report Results</CardTitle>
                            <CardDescription>Showing data for selected filters</CardDescription>
                        </div>
                        <div className="flex space-x-2">
                            <Button onClick={exportToExcel} variant="outline">
                                <FileSpreadsheet className="mr-2 h-4 w-4"/>
                                Export to Excel
                            </Button>
                            <Button onClick={exportToPDF} variant="outline">
                                <FileText className="mr-2 h-4 w-4"/>
                                Export to PDF
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <Tabs defaultValue="table" className="w-full">
                            <TabsList className="mb-4">
                                <TabsTrigger value="table">Table View</TabsTrigger>
                                <TabsTrigger value="chart">Chart View</TabsTrigger>
                            </TabsList>
                            <TabsContent value="table">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Visitor Name</TableHead>
                                            <TableHead>Check-In</TableHead>
                                            <TableHead>Check-Out</TableHead>
                                            <TableHead>Purpose</TableHead>
                                            <TableHead>Host</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {paginatedData.map((visitor) => (
                                            <TableRow key={visitor.id}>
                                                <TableCell>{visitor.name}</TableCell>
                                                <TableCell>{new Date(visitor.checkIn).toLocaleString()}</TableCell>
                                                <TableCell>{new Date(visitor.checkOut).toLocaleString()}</TableCell>
                                                <TableCell>{visitor.purpose}</TableCell>
                                                <TableCell>{visitor.host}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TabsContent>
                            <TabsContent value="chart">
                                <div className="space-y-4">
                                    <Select value={chartType} onValueChange={setChartType}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select chart type"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="bar">Bar Chart</SelectItem>
                                            <SelectItem value="pie">Pie Chart</SelectItem>
                                            <SelectItem value="line">Line Chart</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <div className="h-[400px]">
                                        {chartType === 'bar' && <BarChart data={filteredData}/>}
                                        {chartType === 'pie' && <PieChart data={filteredData}/>}
                                        {chartType === 'line' && <LineChart data={filteredData}/>}
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                    {/* Pagination Controls */}
                    <div className="flex justify-between items-center p-4">
                        <Button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </Button>
                        <div>
                            Page {currentPage} of {totalPages}
                        </div>
                        <Button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </Button>
                    </div>
                </Card>
            </div>
        </div>
    );
}
