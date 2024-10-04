'use client'

import {useState} from 'react'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Button} from "@/components/ui/button"
import {Switch} from "@/components/ui/switch"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {Upload} from 'lucide-react'

export default function SettingsPage() {
    const [adminProfile, setAdminProfile] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+1 (555) 123-4567',
        avatar: '/placeholder.svg?height=100&width=100',
    })

    const [businessInfo, setBusinessInfo] = useState({
        name: 'Acme Corporation',
        address: '123 Business St, Suite 100',
        city: 'Metropolis',
        state: 'NY',
        zipCode: '12345',
        country: 'United States',
        phone: '+1 (555) 987-6543',
        website: 'www.acmecorp.com',
    })

    const [businessPreferences, setBusinessPreferences] = useState({
        primaryColor: '#007bff',
        secondaryColor: '#6c757d',
        logo: '/placeholder.svg?height=100&width=100',
        darkMode: false,
        language: 'en',
        timeZone: 'America/New_York',
        dateFormat: 'MM/DD/YYYY',
        timeFormat: '12h',
        notificationsEnabled: true,
        autoCheckout: true,
        checkoutTime: '18:00',
    })

    const handleAdminProfileUpdate = (e) => {
        e.preventDefault()
        console.log('Updating admin profile:', adminProfile)
        // Implement API call to update admin profile
    }

    const handleBusinessInfoUpdate = (e) => {
        e.preventDefault()
        console.log('Updating business info:', businessInfo)
        // Implement API call to update business info
    }

    const handleBusinessPreferencesUpdate = (e) => {
        e.preventDefault()
        console.log('Updating business preferences:', businessPreferences)
        // Implement API call to update business preferences
    }

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, type: 'avatar' | 'logo') => {
        const file = event.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                if (type === 'avatar') {
                    setAdminProfile(prevState => ({
                        ...prevState,
                        avatar: reader.result as string
                    }))
                } else if (type === 'logo') {
                    setBusinessPreferences(prevState => ({
                        ...prevState,
                        logo: reader.result as string
                    }))
                }
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Settings</h1>

            <Tabs defaultValue="admin-profile" className="w-full">
                <TabsList className="mb-4">
                    <TabsTrigger value="admin-profile">Admin Profile</TabsTrigger>
                    <TabsTrigger value="business-info">Business Info</TabsTrigger>
                    <TabsTrigger value="business-preferences">Business Preferences</TabsTrigger>
                </TabsList>

                <TabsContent value="admin-profile">
                    <Card>
                        <CardHeader>
                            <CardTitle>Admin User Profile</CardTitle>
                            <CardDescription>Manage your personal information</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleAdminProfileUpdate} className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <Avatar className="w-20 h-20">
                                        <AvatarImage src={adminProfile.avatar} alt="Admin Avatar"/>
                                        <AvatarFallback>AD</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <Label htmlFor="avatar-upload" className="cursor-pointer">
                                            <div
                                                className="flex items-center space-x-2 bg-primary text-primary-foreground px-3 py-2 rounded-md">
                                                <Upload size={16}/>
                                                <span>Upload new avatar</span>
                                            </div>
                                        </Label>
                                        <Input
                                            id="avatar-upload"
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={(e) => handleFileUpload(e, 'avatar')}
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="admin-name">Name</Label>
                                        <Input
                                            id="admin-name"
                                            value={adminProfile.name}
                                            onChange={(e) => setAdminProfile({...adminProfile, name: e.target.value})}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="admin-email">Email</Label>
                                        <Input
                                            id="admin-email"
                                            type="email"
                                            value={adminProfile.email}
                                            onChange={(e) => setAdminProfile({...adminProfile, email: e.target.value})}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="admin-phone">Phone</Label>
                                        <Input
                                            id="admin-phone"
                                            type="tel"
                                            value={adminProfile.phone}
                                            onChange={(e) => setAdminProfile({...adminProfile, phone: e.target.value})}
                                        />
                                    </div>
                                </div>
                                <Button type="submit">Save Changes</Button>
                            </form>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="business-info">
                    <Card>
                        <CardHeader>
                            <CardTitle>Business Information</CardTitle>
                            <CardDescription>Manage your company details</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleBusinessInfoUpdate} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="business-name">Business Name</Label>
                                        <Input
                                            id="business-name"
                                            value={businessInfo.name}
                                            onChange={(e) => setBusinessInfo({...businessInfo, name: e.target.value})}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="business-address">Address</Label>
                                        <Input
                                            id="business-address"
                                            value={businessInfo.address}
                                            onChange={(e) => setBusinessInfo({
                                                ...businessInfo,
                                                address: e.target.value
                                            })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="business-city">City</Label>
                                        <Input
                                            id="business-city"
                                            value={businessInfo.city}
                                            onChange={(e) => setBusinessInfo({...businessInfo, city: e.target.value})}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="business-state">State</Label>
                                        <Input
                                            id="business-state"
                                            value={businessInfo.state}
                                            onChange={(e) => setBusinessInfo({...businessInfo, state: e.target.value})}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="business-zip">ZIP Code</Label>
                                        <Input
                                            id="business-zip"
                                            value={businessInfo.zipCode}
                                            onChange={(e) => setBusinessInfo({
                                                ...businessInfo,
                                                zipCode: e.target.value
                                            })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="business-country">Country</Label>
                                        <Input
                                            id="business-country"
                                            value={businessInfo.country}
                                            onChange={(e) => setBusinessInfo({
                                                ...businessInfo,
                                                country: e.target.value
                                            })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="business-phone">Phone</Label>
                                        <Input
                                            id="business-phone"
                                            type="tel"
                                            value={businessInfo.phone}
                                            onChange={(e) => setBusinessInfo({...businessInfo, phone: e.target.value})}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="business-website">Website</Label>
                                        <Input
                                            id="business-website"
                                            type="url"
                                            value={businessInfo.website}
                                            onChange={(e) => setBusinessInfo({
                                                ...businessInfo,
                                                website: e.target.value
                                            })}
                                        />
                                    </div>
                                </div>
                                <Button type="submit">Save Changes</Button>
                            </form>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="business-preferences">
                    <Card>
                        <CardHeader>
                            <CardTitle>Business Preferences</CardTitle>
                            <CardDescription>Customize your application settings</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleBusinessPreferencesUpdate} className="space-y-6">
                                {/* Company Logo Upload */}
                                <div className="space-y-2">
                                    <Label htmlFor="logo-upload">Company Logo</Label>
                                    <div className="flex items-center space-x-4">
                                        <Avatar className="w-20 h-20">
                                            <AvatarImage src={businessPreferences.logo} alt="Admin Avatar"/>
                                            <AvatarFallback>AD</AvatarFallback>
                                        </Avatar>
                                        {/*<img src={businessPreferences.logo} alt="Company Logo"*/}
                                        {/*     className="w-20 h-20 object-contain"/>*/}
                                        <div>
                                            <Label htmlFor="logo-upload" className="cursor-pointer">
                                                <div className="flex items-center space-x-2 bg-primary text-primary-foreground px-3 py-2 rounded-md">
                                                    <Upload size={16}/>
                                                    <span>Upload new logo</span>
                                                </div>
                                            </Label>
                                            <Input
                                                id="logo-upload"
                                                type="file"
                                                accept="image/*"
                                                className="hidden"
                                                onChange={(e) => handleFileUpload(e, 'logo')}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Input Fields in Two Columns */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {/* Language Selector */}
                                    <div className="space-y-2">
                                        <Label htmlFor="language">Language</Label>
                                        <Select
                                            value={businessPreferences.language}
                                            onValueChange={(value) => setBusinessPreferences({
                                                ...businessPreferences,
                                                language: value
                                            })}
                                        >
                                            <SelectTrigger id="language">
                                                <SelectValue placeholder="Select language"/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="en">English</SelectItem>
                                                <SelectItem value="es">Español</SelectItem>
                                                <SelectItem value="fr">Français</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    {/* Time Zone Selector */}
                                    <div className="space-y-2">
                                        <Label htmlFor="timezone">Time Zone</Label>
                                        <Select
                                            value={businessPreferences.timeZone}
                                            onValueChange={(value) => setBusinessPreferences({
                                                ...businessPreferences,
                                                timeZone: value
                                            })}
                                        >
                                            <SelectTrigger id="timezone">
                                                <SelectValue placeholder="Select time zone"/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="America/New_York">Eastern Time (ET)</SelectItem>
                                                <SelectItem value="America/Chicago">Central Time (CT)</SelectItem>
                                                <SelectItem value="America/Denver">Mountain Time (MT)</SelectItem>
                                                <SelectItem value="America/Los_Angeles">Pacific Time (PT)</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    {/* Date Format Selector */}
                                    <div className="space-y-2">
                                        <Label htmlFor="date-format">Date Format</Label>
                                        <Select
                                            value={businessPreferences.dateFormat}
                                            onValueChange={(value) => setBusinessPreferences({
                                                ...businessPreferences,
                                                dateFormat: value
                                            })}
                                        >
                                            <SelectTrigger id="date-format">
                                                <SelectValue placeholder="Select date format"/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                                                <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                                                <SelectItem value="YYYY-MM-DD">YYYY-MM-DD</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    {/* Time Format Selector */}
                                    <div className="space-y-2">
                                        <Label htmlFor="time-format">Time Format</Label>
                                        <Select
                                            value={businessPreferences.timeFormat}
                                            onValueChange={(value) => setBusinessPreferences({
                                                ...businessPreferences,
                                                timeFormat: value
                                            })}
                                        >
                                            <SelectTrigger id="time-format">
                                                <SelectValue placeholder="Select time format"/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="12h">12-hour</SelectItem>
                                                <SelectItem value="24h">24-hour</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                {/* Switches */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="flex items-center space-x-2">
                                        <Switch
                                            id="dark-mode"
                                            checked={businessPreferences.darkMode}
                                            onCheckedChange={(checked) => setBusinessPreferences({
                                                ...businessPreferences,
                                                darkMode: checked
                                            })}
                                        />
                                        <Label htmlFor="dark-mode">Enable Dark Mode</Label>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <Switch
                                            id="notifications"
                                            checked={businessPreferences.notificationsEnabled}
                                            onCheckedChange={(checked) => setBusinessPreferences({
                                                ...businessPreferences,
                                                notificationsEnabled: checked
                                            })}
                                        />
                                        <Label htmlFor="notifications">Enable Notifications</Label>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <Switch
                                            id="auto-checkout"
                                            checked={businessPreferences.autoCheckout}
                                            onCheckedChange={(checked) => setBusinessPreferences({
                                                ...businessPreferences,
                                                autoCheckout: checked
                                            })}
                                        />
                                        <Label htmlFor="auto-checkout">Enable Auto Checkout</Label>
                                    </div>
                                </div>

                                {/* Conditional Auto Checkout Time Input */}
                                {businessPreferences.autoCheckout && (
                                    <div className="space-y-2">
                                        <Label htmlFor="checkout-time">Auto Checkout Time</Label>
                                        <Input
                                            id="checkout-time"
                                            type="time"
                                            value={businessPreferences.checkoutTime}
                                            onChange={(e) => setBusinessPreferences({
                                                ...businessPreferences,
                                                checkoutTime: e.target.value
                                            })}
                                        />
                                    </div>
                                )}

                                {/* Save Button */}
                                <Button type="submit">Save Preferences</Button>
                            </form>
                        </CardContent>
                    </Card>
                </TabsContent>

            </Tabs>
        </div>
    )
}
