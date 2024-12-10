"use client";

import { Search, X, ExternalLink, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import Link from 'next/link';

const mainNavItems = [
  { label: 'Stock Video', href: '#' },
  { label: 'Video Templates', href: '#' },
  { label: 'Music', href: '#' },
  { label: 'Sound Effects', href: '#' },
  { label: 'Graphic Templates', href: '#' },
  { label: 'Graphics', href: '#' },
  { label: '3D', href: '#' },
  { label: 'Presentation Templates', href: '#' },
  { label: 'Photos', href: '#' },
  { label: 'Fonts', href: '#' },
  { label: 'Add-ons', href: '#' },
  { label: 'More', href: '#' },
];

export function Header() {
  return (
    <header className="flex flex-col">
      <div className="bg-[#1C1C1C] text-white">
        <div className="container mx-auto">
          <div className="flex h-16 items-center justify-between px-4">
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-2xl font-bold text-[#82B440]">
                envato
              </Link>
              <div className="relative">
                <Button variant="ghost" size="sm" className="text-white">
                  Video Templates
                  <Menu className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative flex-1 max-w-lg">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="search"
                  placeholder="saas"
                  className="w-full pl-10 pr-4 py-2 bg-[#2A2A2A] border border-[#404040] rounded-md text-sm focus:outline-none focus:border-[#82B440]"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <X className="h-4 w-4 text-gray-400" />
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-white">
                <ExternalLink className="mr-2 h-4 w-4" />
                All Labs
              </Button>
              <Button variant="ghost" size="sm" className="text-white">
                Alex
              </Button>
              <Button variant="ghost" size="sm" className="text-white">
                Learn
              </Button>
            </div>
          </div>
        </div>
      </div>
      <nav className="bg-[#252525] text-white border-t border-[#404040]">
        <div className="container mx-auto">
          <div className="flex items-center h-12 px-4 space-x-6 text-sm">
            {mainNavItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-[#82B440] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}