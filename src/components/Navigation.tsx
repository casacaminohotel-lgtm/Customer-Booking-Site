'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Building2, Menu, X, Home, Phone, Info } from 'lucide-react';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-[200] bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg group-hover:shadow-xl group-hover:from-blue-600 group-hover:to-purple-700 transition-all duration-300 w-12 h-12 flex items-center justify-center">
              <span className="relative text-white font-bold text-2xl font-dancing-script z-10">C</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-dancing-script font-bold">
                Casa Blanca
              </span>
              <span className="text-[10px] font-medium text-gray-600 tracking-widest uppercase text-center -mt-1 font-montserrat">
                HOTELS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50"
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link 
              href="/properties" 
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50"
            >
              <Building2 className="h-4 w-4" />
              <span>Properties</span>
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50"
            >
              <Info className="h-4 w-4" />
              <span>About</span>
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50"
            >
              <Phone className="h-4 w-4" />
              <span>Contact</span>
            </Link>
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link href="/properties">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-900" />
            ) : (
              <Menu className="h-6 w-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-2 pt-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-gray-900 font-medium px-4 py-2 rounded-lg hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/properties" 
                className="text-gray-700 hover:text-gray-900 font-medium px-4 py-2 rounded-lg hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Properties
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-gray-900 font-medium px-4 py-2 rounded-lg hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-gray-900 font-medium px-4 py-2 rounded-lg hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/properties"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white mt-4">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
