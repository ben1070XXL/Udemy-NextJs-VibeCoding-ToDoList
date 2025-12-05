import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"

export default function Navigation() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and App Name */}
          <div className="flex items-center gap-3">
            <Image src="/images/todoify-logo-480.png" alt="Todoify Logo" width={40} height={40} priority />
            <span className="text-2xl font-bold text-gray-900">Todoify</span>
          </div>

          {/* Center Navigation Links (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Pricing
            </a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              About
            </a>
          </div>

          {/* Right Side Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" className="text-gray-700 hover:text-gray-900">
              Login
            </Button>
            <Button className="bg-red-500 hover:bg-red-600 text-white">Sign Up</Button>
          </div>

          {/* Mobile Menu Toggle and Buttons for mobile*/}
          <div className="flex items-center gap-3 md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MenuIcon className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
                  <SheetDescription className="sr-only">
                    Navigation links for mobile devices.
                  </SheetDescription>
                </SheetHeader>
                <nav className="flex flex-col gap-4 py-6">
                  <a href="#features" className="text-lg font-medium hover:text-gray-900 text-center">
                    Features
                  </a>
                  <a href="#pricing" className="text-lg font-medium hover:text-gray-900 text-center">
                    Pricing
                  </a>
                  <a href="#about" className="text-lg font-medium hover:text-gray-900 text-center">
                    About
                  </a>
                  <Button variant="ghost" className="text-lg font-medium hover:text-gray-900 justify-center px-0 mx-4">
                    Login
                  </Button>
                  <Button className="bg-red-500 hover:bg-red-600 text-white text-lg font-medium justify-center px-0 mx-4">
                    Sign Up
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  )
}
