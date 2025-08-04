'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import {
  Home,
  ClipboardList,
  Calendar,
  MessageSquare,
  TrendingUp,
  Settings,
  Menu,
  X,
} from 'lucide-react'
import { useState } from 'react'

const routes = [
  {
    label: 'Dashboard',
    icon: Home,
    href: '/dashboard',
  },
  {
    label: 'Assessments',
    icon: ClipboardList,
    href: '/assessments',
  },
  {
    label: 'Sessions',
    icon: Calendar,
    href: '/sessions',
  },
  {
    label: 'Messages',
    icon: MessageSquare,
    href: '/messages',
  },
  {
    label: 'Progress',
    icon: TrendingUp,
    href: '/progress',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/settings',
  },
]

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/dashboard" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary" />
              <span className="text-xl font-semibold">MindCare Portal</span>
            </Link>

            <div className="hidden md:flex md:items-center md:gap-1">
              {routes.map((route) => {
                const Icon = route.icon
                return (
                  <Button
                    key={route.href}
                    variant={pathname === route.href ? 'secondary' : 'ghost'}
                    size="sm"
                    asChild
                  >
                    <Link href={route.href}>
                      <Icon className="h-4 w-4" />
                      {route.label}
                    </Link>
                  </Button>
                )
              })}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t py-2 md:hidden">
            {routes.map((route) => {
              const Icon = route.icon
              return (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                    pathname === route.href
                      ? 'bg-secondary text-secondary-foreground'
                      : 'hover:bg-accent hover:text-accent-foreground',
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Icon className="h-4 w-4" />
                  {route.label}
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </nav>
  )
}