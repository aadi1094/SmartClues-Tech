'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import React from 'react'
import { useScroll, motion } from 'motion/react'
import { cn } from '@/lib/utils'
import ReactCookieBot from 'react-cookiebot'



const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Careers', href: '/careers' },
    // { name: 'Clients', href: '/#testimonials' },
    {name:'Gallery', href:'/gallery'},
    { name: 'Contact Us', href: '/contact' },

]

const colorPresets = {
    crimson: ["#7C444F", "#9F5255", "#E16A54", "#F39E60"],
    green: ["#F0E491", "#BBC863", "#658C58", "#31694E"],
    pink: ["#FCF5EE", "#FFC4C4", "#EE6983", "#850E35"],
    purple: ["#4E56C0", "#9B5DE0", "#D78FEE", "#FDCFFA"],
    blue: ["#3C467B", "#50589C", "#636CCB", "#6E8CFB"],
}

const DEFAULT_PRESET = colorPresets.blue;

type HeroHeaderProps = {
    onColorPresetChange?: (colors: string[]) => void
}

let cookieBotLoaded = false;

export const HeroHeader = ({ onColorPresetChange }: HeroHeaderProps) => {
    const [menuState, setMenuState] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)
    const { scrollYProgress } = useScroll()

    React.useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            setScrolled(latest > 0.05)
        })
        return () => unsubscribe()
    }, [scrollYProgress])

    React.useEffect(() => {
        if (onColorPresetChange) {
            onColorPresetChange(DEFAULT_PRESET)
        }
    }, [onColorPresetChange])

    const domainGroupId = process.env.NEXT_PUBLIC_DOMAINGROUPID

    const shouldRenderCookieBot = React.useMemo(() => {
        if (typeof window === 'undefined') return true // SSR
        
        // Check if already loaded via global flag
        if (cookieBotLoaded) return false
        
        // Check for existing CookieBot script or object
        const hasScript = document.querySelector('script[src*="consent.cookiebot.com"]') ||
                         document.querySelector('script[data-cbid]') ||
                         window.Cookiebot
        
        if (hasScript) {
            console.warn('CookieBot already exists, skipping render')
            return false
        }
        
        cookieBotLoaded = true
        return true
    }, [])

    // Debug logging
    React.useEffect(() => {
        console.log('CookieBot Domain Group ID:', domainGroupId)
        console.log('Should render CookieBot:', shouldRenderCookieBot)
    }, [domainGroupId, shouldRenderCookieBot])

    return (
        <>
            {shouldRenderCookieBot && (
                <ReactCookieBot
                    domainGroupId={domainGroupId}
                    onAccept={() => console.log("Cookies accepted")}
                    onDecline={() => console.log("Cookies declined")}
                    onLoad={() => console.log("CookieBot loaded successfully")}
                    onError={(error) => console.error("CookieBot error:", error)}
                    // Force banner to show globally (for testing)
                    culture="auto"
                    level="strict"
                />
            )}
            <header>
                <nav
                    data-state={menuState && 'active'}
                    className="fixed z-20 w-full pt-2 px-4">
                    <div
                        className={cn(
                            'mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-300 lg:px-12 bg-white/85 backdrop-blur-xl border border-black/5 shadow-lg ring-1 ring-black/5',
                            'bg-white/95 border-black/10 shadow-xl translate-y-1'
                        )}
                    >
                        <motion.div
                            key={1}
                            className={cn('relative flex flex-wrap items-center justify-between gap-6 py-3 duration-200 lg:gap-0 lg:py-1')}>
                            <div className="flex flex-1 w-full items-center justify-between gap-12 lg:w-auto">
                                <Link href="/" className="flex items-center gap-3 lg:mr-8">
                                    <div className="relative w-16 h-16 lg:w-20 lg:h-20 scale-200">
                                        <Image 
                                            src="/imagelogocopy.png"
                                            alt="SmartClues Logo"
                                            fill
                                            className="object-contain "
                                            priority
                                        />
                                    </div>
                                </Link>
                                
                                <button
                                    onClick={() => setMenuState(!menuState)}
                                    aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                    className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                    <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 text-black duration-200" />
                                    <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 text-black opacity-0 duration-200" />
                                </button>

                                <div className="hidden lg:flex items-center gap-5 ml-auto justify-end ">
                                    <ul className="flex justify-end gap-8 text-sm text-black/70">
                                        {menuItems
                                          .filter((item) => item.name !== 'Contact Us')
                                          .map((item) => (
                                            <li key={item.name}>
                                                <Link
                                                    href={item.href}
                                                    className="text-black/70 hover:text-black block duration-150">
                                                    <span>{item.name}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                      href="/contact"
                                      className="rounded-full bg-gradient-to-r from-[#00DFFF] to-[#0056D1] px-5 py-2 text-sm font-semibold text-white shadow-lg transition hover:opacity-90"
                                    >
                                      Contact Us
                                    </Link>
                                </div>
                            </div>

                            <div className="bg-white/90 backdrop-blur-xl in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-black/10 p-6 shadow-2xl md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-0">
                                <div className="lg:hidden">
                                    <ul className="space-y-6 text-base text-black/70">
                                        {menuItems.map((item) => (
                                            <li key={item.name}>
                                                <Link
                                                    href={item.href}
                                                    className="text-black/70 hover:text-black block duration-150">
                                                    <span>{item.name}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </nav>
            </header>
        </>
    )
}
