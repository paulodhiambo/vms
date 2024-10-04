'use client'

import React, {useState} from 'react'
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table'
import {Input} from '@/components/ui/input'
import {Button} from '@/components/ui/button'
import {Badge} from '@/components/ui/badge'
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from '@/components/ui/dialog'

interface Facility {
    id: number;
    name: string;
    location: string;
    entryPoints: number;
    manager: string;
    capacity: number;
    occupancyRate: string;
    operatingHours: string;
    contactInfo: string;
    amenities: string[];
    organizationsHosted: string[];
    securityLevel: string;
    emergencyExits: number;
    lastInspectionDate: string;
    nextMaintenanceSchedule: string;
    parkingAvailability: string;
    accessibilityFeatures: string;
    fireSafetyCompliance: string;
    environmentalCertifications: string;
    energyConsumption: string;
    waterSupply: string;
    internetConnectivity: string;
    hvacStatus: string;
}

// Mock facilities data
const facilities: Facility[] = [
    {
        id: 1,
        name: "Alpha Tower",
        location: "123 Main St, Cityville",
        entryPoints: 5,
        manager: "John Doe",
        capacity: 500,
        occupancyRate: "80%",
        operatingHours: "9 AM - 6 PM",
        contactInfo: "john.doe@alphatower.com, +1 234 567 890",
        amenities: ["Cafeteria", "Gym", "Conference Rooms"],
        organizationsHosted: ["Tech Corp", "Finance LLC"],
        securityLevel: "High",
        emergencyExits: 3,
        lastInspectionDate: "2024-01-15",
        nextMaintenanceSchedule: "2024-03-10",
        parkingAvailability: "150 spots",
        accessibilityFeatures: "Wheelchair access, Elevators",
        fireSafetyCompliance: "Yes",
        environmentalCertifications: "LEED Gold",
        energyConsumption: "300 kWh",
        waterSupply: "City water",
        internetConnectivity: "Fiber",
        hvacStatus: "Operational"
    },
    {
        id: 2,
        name: "Beta Building",
        location: "456 Park Ave, Townsburg",
        entryPoints: 3,
        manager: "Jane Smith",
        capacity: 700,
        occupancyRate: "90%",
        operatingHours: "8 AM - 8 PM",
        contactInfo: "jane.smith@betabuilding.com, +1 345 678 901",
        amenities: ["Parking Lot", "Rooftop Lounge", "Auditorium"],
        organizationsHosted: ["Media Group", "Law Firm Inc."],
        securityLevel: "Medium",
        emergencyExits: 4,
        lastInspectionDate: "2024-02-10",
        nextMaintenanceSchedule: "2024-04-20",
        parkingAvailability: "200 spots",
        accessibilityFeatures: "Braille signs, Ramps",
        fireSafetyCompliance: "Yes",
        environmentalCertifications: "ISO 14001",
        energyConsumption: "350 kWh",
        waterSupply: "Well water",
        internetConnectivity: "Fiber and Satellite",
        hvacStatus: "Under maintenance"
    },
    {
        id: 3,
        name: "Gamma Plaza",
        location: "789 Central Blvd, Metropolis",
        entryPoints: 7,
        manager: "Mike Brown",
        capacity: 1200,
        occupancyRate: "75%",
        operatingHours: "24/7",
        contactInfo: "mike.brown@gammaplaza.com, +1 456 789 012",
        amenities: ["Restaurants", "Health Clinic", "Childcare Center"],
        organizationsHosted: ["Global Tech", "HealthCare LLC", "Design Studios"],
        securityLevel: "Very High",
        emergencyExits: 6,
        lastInspectionDate: "2024-03-01",
        nextMaintenanceSchedule: "2024-05-05",
        parkingAvailability: "500 spots",
        accessibilityFeatures: "Hearing assistance systems, Accessible toilets",
        fireSafetyCompliance: "Yes",
        environmentalCertifications: "LEED Platinum",
        energyConsumption: "900 kWh",
        waterSupply: "City water",
        internetConnectivity: "Fiber and Cable",
        hvacStatus: "Operational"
    },
    {
        id: 4,
        name: "Delta Complex",
        location: "321 Industrial Rd, Factorytown",
        entryPoints: 4,
        manager: "Sara Lee",
        capacity: 1500,
        occupancyRate: "60%",
        operatingHours: "6 AM - 10 PM",
        contactInfo: "sara.lee@deltacomplex.com, +1 567 890 123",
        amenities: ["Warehouse", "Loading Dock", "Truck Parking"],
        organizationsHosted: ["Logistics Co.", "Manufacturing Ltd."],
        securityLevel: "High",
        emergencyExits: 8,
        lastInspectionDate: "2024-01-05",
        nextMaintenanceSchedule: "2024-02-25",
        parkingAvailability: "100 truck spaces",
        accessibilityFeatures: "Large elevators, Accessible loading docks",
        fireSafetyCompliance: "Yes",
        environmentalCertifications: "Energy Star Certified",
        energyConsumption: "1500 kWh",
        waterSupply: "On-site well",
        internetConnectivity: "DSL",
        hvacStatus: "Partially operational"
    },
    {
        id: 5,
        name: "Epsilon Center",
        location: "101 Ocean Dr, Beachside",
        entryPoints: 6,
        manager: "Carlos Hernandez",
        capacity: 800,
        occupancyRate: "85%",
        operatingHours: "7 AM - 9 PM",
        contactInfo: "carlos.hernandez@epsiloncenter.com, +1 678 901 234",
        amenities: ["Swimming Pool", "Fitness Center", "Retail Shops"],
        organizationsHosted: ["Retailers Co.", "Fitness World", "Spa & Wellness"],
        securityLevel: "Medium",
        emergencyExits: 5,
        lastInspectionDate: "2024-03-20",
        nextMaintenanceSchedule: "2024-06-15",
        parkingAvailability: "250 spots",
        accessibilityFeatures: "Elevator access, Tactile guide paths",
        fireSafetyCompliance: "Yes",
        environmentalCertifications: "Green Building Certified",
        energyConsumption: "600 kWh",
        waterSupply: "Desalinated water",
        internetConnectivity: "Fiber",
        hvacStatus: "Operational"
    }
]


export default function Facilities() {
    const [searchTerm, setSearchTerm] = useState("")

    // Filter facilities based on search term
    const filteredFacilities = facilities.filter((facility) =>
        facility.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        facility.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        facility.manager.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Facilities Management</h1>

            {/* Search bar */}
            <div className="mb-6">
                <Input
                    id="search"
                    placeholder="Search facilities by name, location, or manager..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Facilities Table */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Facility Name</TableHead>
                            <TableHead>Location</TableHead>
                            <TableHead>Entry Points</TableHead>
                            <TableHead>Manager</TableHead>
                            <TableHead>Capacity</TableHead>
                            <TableHead>Occupancy Rate</TableHead>
                            <TableHead>Operating Hours</TableHead>
                            <TableHead>Amenities</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredFacilities.map((facility) => (
                            <TableRow key={facility.id}>
                                <TableCell>{facility.name}</TableCell>
                                <TableCell>{facility.location}</TableCell>
                                <TableCell>{facility.entryPoints}</TableCell>
                                <TableCell>{facility.manager}</TableCell>
                                <TableCell>{facility.capacity}</TableCell>
                                <TableCell>{facility.occupancyRate}</TableCell>
                                <TableCell>{facility.operatingHours}</TableCell>
                                <TableCell>
                                    {facility.amenities.map((amenity, index) => (
                                        <span key={index} className="inline-block mr-1 mb-1">
                                                <Badge>{amenity}</Badge>
                                        </span>
                                    ))}
                                </TableCell>
                                <TableCell>
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button variant="outline" size="sm">View Details</Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>Facility Details: {facility.name}</DialogTitle>
                                            </DialogHeader>
                                            <div className="grid gap-4 py-4">
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <span className="text-right font-bold">Location:</span>
                                                    <span className="col-span-3">{facility.location}</span>
                                                </div>
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <span className="text-right font-bold">Manager:</span>
                                                    <span className="col-span-3">{facility.manager}</span>
                                                </div>
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <span className="text-right font-bold">Entry Points:</span>
                                                    <span className="col-span-3">{facility.entryPoints}</span>
                                                </div>
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <span className="text-right font-bold">Security Level:</span>
                                                    <span className="col-span-3">{facility.securityLevel}</span>
                                                </div>
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <span
                                                        className="text-right font-bold">Fire Safety Compliance:</span>
                                                    <span className="col-span-3">{facility.fireSafetyCompliance}</span>
                                                </div>
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <span className="text-right font-bold">Parking Availability:</span>
                                                    <span className="col-span-3">{facility.parkingAvailability}</span>
                                                </div>
                                                {/* Add more facility details as needed */}
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
