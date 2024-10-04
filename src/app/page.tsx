"use client";

import {useState} from 'react'
import {motion} from 'framer-motion'
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {CheckCircle2, Shield, Users, Clock, Bell, BarChart, Menu, X} from "lucide-react"
import Link from 'next/link'


export default function EnhancedLandingPage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const fadeIn = {
        initial: {opacity: 0, y: 20},
        animate: {opacity: 1, y: 0},
        transition: {duration: 0.6}
    }

    return (
        <div
            className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <header className="px-4 lg:px-6 h-16 flex items-center">
                <Link className="flex items-center justify-center" href="#">
                    <Shield className="h-6 w-6 text-primary"/>
                    <span className="ml-2 text-2xl font-bold text-gray-900 dark:text-white">VisiGuard</span>
                </Link>
                <nav className="ml-auto hidden md:flex gap-6">
                    <Link className="text-sm font-medium hover:text-primary transition-colors" href="#features">
                        Features
                    </Link>
                    <Link className="text-sm font-medium hover:text-primary transition-colors" href="#pricing">
                        Pricing
                    </Link>
                    <Link className="text-sm font-medium hover:text-primary transition-colors" href="#testimonials">
                        Testimonials
                    </Link>
                    <Link className="text-sm font-medium hover:text-primary transition-colors" href="#contact">
                        Contact
                    </Link>
                </nav>
                <Link href="/signup">
                    <Button className="ml-4 hidden md:flex" variant="outline">
                        Log In
                    </Button>
                </Link>

                <Link href="/signup">
                    <Button className="ml-4 hidden md:flex">Sign Up</Button>
                </Link>
                <Button
                    variant="ghost"
                    size="icon"
                    className="ml-auto md:hidden"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
                </Button>
            </header>
            {mobileMenuOpen && (
                <motion.nav
                    className="md:hidden bg-white dark:bg-gray-800 p-4"
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: -20}}
                >
                    <Link className="block py-2 text-sm font-medium hover:text-primary transition-colors"
                          href="#features">
                        Features
                    </Link>
                    <Link className="block py-2 text-sm font-medium hover:text-primary transition-colors"
                          href="#pricing">
                        Pricing
                    </Link>
                    <Link className="block py-2 text-sm font-medium hover:text-primary transition-colors"
                          href="#testimonials">
                        Testimonials
                    </Link>
                    <Link className="block py-2 text-sm font-medium hover:text-primary transition-colors"
                          href="#contact">
                        Contact
                    </Link>
                    <Link href="/login">
                        <Button className="mt-4 w-full" variant="outline">
                            Log In
                        </Button>
                    </Link>
                    <Link href="/signup">
                        <Button className="mt-2 w-full">
                            Sign Up
                        </Button>
                    </Link>
                </motion.nav>
            )}
            <main className="flex-1">
                <section
                    className="w-full py-12 md:py-24 lg:py-32 xl:py-48 min-h-screen flex items-center justify-center">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <motion.div className="space-y-2"
                                        initial={fadeIn.initial}
                                        animate={fadeIn.animate}
                                        transition={fadeIn.transition}>
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                                    Revolutionize Your Visitor Management
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                    VisiGuard: The ultimate solution for secure, efficient, and impressive visitor
                                    experiences.
                                    Elevate your access control and streamline operations.
                                </p>
                            </motion.div>
                            <motion.div className="space-x-4" initial={fadeIn.initial}
                                        animate={fadeIn.animate}
                                        transition={fadeIn.transition}>
                                <Button size="lg" className="bg-primary hover:bg-primary/90">Get Started</Button>
                                <Button size="lg" variant="outline">Watch Demo</Button>
                            </motion.div>
                        </div>
                    </div>
                </section>
                <section id="features" className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
                    <div className="container px-4 md:px-6">
                        <motion.h2
                            className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12"
                            initial={fadeIn.initial}
                            animate={fadeIn.animate}
                            transition={fadeIn.transition}
                        >
                            Powerful Features
                        </motion.h2>
                        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
                            {[
                                {
                                    icon: Users,
                                    title: "Smart Visitor Management",
                                    description: "Streamline check-ins, track visitor history, and manage appointments with ease."
                                },
                                {
                                    icon: Shield,
                                    title: "Advanced Access Control",
                                    description: "Secure your premises with state-of-the-art access control and real-time monitoring."
                                },
                                {
                                    icon: Clock,
                                    title: "Precise Time Tracking",
                                    description: "Accurately track time spent by visitors and employees within your facility."
                                },
                                {
                                    icon: Bell,
                                    title: "Instant Notifications",
                                    description: "Receive real-time alerts for important events and potential security concerns."
                                },
                                {
                                    icon: BarChart,
                                    title: "Comprehensive Analytics",
                                    description: "Generate detailed reports and insights to optimize your operations."
                                },
                                {
                                    icon: CheckCircle2,
                                    title: "Compliance Management",
                                    description: "Ensure regulatory compliance and maintain accurate records for audits."
                                }
                            ].map((feature, index) => (
                                <motion.div key={index} initial={fadeIn.initial}
                                            animate={fadeIn.animate}
                                            transition={{delay: index * 0.1}}>
                                    <Card className="relative overflow-hidden group">
                                        <CardHeader>
                                            <feature.icon className="w-10 h-10 mb-2 text-primary"/>
                                            <CardTitle>{feature.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p>{feature.description}</p>
                                        </CardContent>
                                        <div
                                            className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
                <section id="pricing"
                         className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <div className="container px-4 md:px-6">
                        <motion.h2
                            className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12"
                            initial={fadeIn.initial}
                            animate={fadeIn.animate}
                            transition={fadeIn.transition}
                        >
                            Flexible Pricing Plans
                        </motion.h2>
                        <Tabs defaultValue="monthly" className="w-full">
                            <TabsList className="grid w-full max-w-md grid-cols-2 mx-auto mb-8">
                                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                                <TabsTrigger value="annually">Annually</TabsTrigger>
                            </TabsList>
                            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
                                {[
                                    {
                                        title: "Starter",
                                        price: {monthly: 49, annually: 470},
                                        description: "For small businesses",
                                        features: ["Up to 100 visitors/month", "Basic visitor management", "Email support"]
                                    },
                                    {
                                        title: "Pro",
                                        price: {monthly: 99, annually: 950},
                                        description: "For growing companies",
                                        features: ["Up to 500 visitors/month", "Advanced access control", "Priority support", "Custom branding"]
                                    },
                                    {
                                        title: "Enterprise",
                                        price: {monthly: "Custom", annually: "Custom"},
                                        description: "For large organizations",
                                        features: ["Unlimited visitors", "Full feature access", "24/7 dedicated support", "On-premises deployment option"]
                                    }
                                ].map((plan, index) => (
                                    <motion.div key={index} initial={fadeIn.initial}
                                                animate={fadeIn.animate}
                                                transition={{delay: index * 0.1}}>
                                        <Card className="relative overflow-hidden">
                                            <CardHeader>
                                                <CardTitle>{plan.title}</CardTitle>
                                                <CardDescription>{plan.description}</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <TabsContent value="monthly">
                                                    <p className="text-4xl font-bold">${typeof plan.price.monthly === 'number' ? plan.price.monthly.toFixed(2) : plan.price.monthly}<span
                                                        className="text-sm font-normal">/mo</span></p>
                                                </TabsContent>
                                                <TabsContent value="annually">
                                                    <p className="text-4xl font-bold">${typeof plan.price.annually === 'number' ? plan.price.annually.toFixed(2) : plan.price.annually}<span
                                                        className="text-sm font-normal">/year</span></p>
                                                </TabsContent>
                                                <ul className="mt-4 space-y-2">
                                                    {plan.features.map((feature, featureIndex) => (
                                                        <li key={featureIndex} className="flex items-center">
                                                            <CheckCircle2 className="mr-2 h-4 w-4 text-primary"/>
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </CardContent>
                                            <CardFooter>
                                                <Button
                                                    className="w-full">{plan.title === "Enterprise" ? "Contact Sales" : "Choose Plan"}</Button>
                                            </CardFooter>
                                            {plan.title === "Pro" && (
                                                <div
                                                    className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rotate-45 translate-x-8 translate-y-4">
                                                    POPULAR
                                                </div>
                                            )}
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </Tabs>
                    </div>
                </section>
                <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
                    <div className="container px-4 md:px-6">
                        <motion.h2
                            className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12"
                            initial={fadeIn.initial}
                            animate={fadeIn.animate}
                            transition={fadeIn.transition}
                        >
                            What Our Clients Say
                        </motion.h2>
                        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
                            {[
                                {
                                    name: "Sarah Thompson",
                                    role: "Office Manager, TechCorp",
                                    quote: "VisiGuard Pro has transformed our visitor management process. It's intuitive, secure, and our guests love it!"
                                },
                                {
                                    name: "Michael Chen",
                                    role: "Head of Security, GlobalBank",
                                    quote: "The access control features are top-notch. We've seen a significant improvement in our security protocols."
                                },
                                {
                                    name: "Emily Rodriguez",
                                    role: "CEO, Innovate Inc.",
                                    quote: "From compliance management to detailed analytics, VisiGuard Pro has everything we need to run our facility smoothly."
                                }
                            ].map((testimonial, index) => (
                                <motion.div key={index} initial={fadeIn.initial}
                                            animate={fadeIn.animate}
                                            transition={{delay: index * 0.1}}>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>{testimonial.name}</CardTitle>
                                            <CardDescription>{testimonial.role}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="italic">&#34;{testimonial.quote}&#34;</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
                <section id="contact"
                         className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground flex items-center justify-center">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <motion.div className="space-y-2" initial={fadeIn.initial}
                                        animate={fadeIn.animate}
                                        transition={fadeIn.transition}>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Get
                                    Started?</h2>
                                <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Transform your visitor management and access control today. Request a demo or speak
                                    with our sales team.
                                </p>
                            </motion.div>
                            <motion.div className="w-full max-w-sm space-y-2" initial={fadeIn.initial}
                                        animate={fadeIn.animate}
                                        transition={fadeIn.transition}>
                                <form className="grid gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" placeholder="Enter your email" type="email"/>
                                    </div>
                                    <Button
                                        className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                                        type="submit">
                                        Request a Demo
                                    </Button>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                    © 2024 VisiGuard. All rights reserved.
                </p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-xs hover:underline underline-offset-4" href="#">
                        Terms of Service
                    </Link>
                    <Link className="text-xs hover:underline underline-offset-4" href="#">
                        Privacy Policy
                    </Link>
                    <Link className="text-xs hover:underline underline-offset-4" href="#">
                        Cookie Policy
                    </Link>
                </nav>
            </footer>
        </div>
    )
}
