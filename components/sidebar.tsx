"use client";

import { useState } from 'react';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Filter } from '@/lib/types';

interface FilterSection {
  title: string;
  type: 'categories' | 'applications';
  items: { id: string; label: string; count: number }[];
}

const filterSections: FilterSection[] = [
  {
    title: 'Categories',
    type: 'categories',
    items: [
      { id: 'slideshow', label: 'Slideshow Packages', count: 156 },
      { id: 'elements', label: 'Elements', count: 89 },
      { id: 'infographics', label: 'Infographics', count: 67 },
      { id: 'openers', label: 'Openers', count: 45 },
    ],
  },
  {
    title: 'Applications Supported',
    type: 'applications',
    items: [
      { id: 'after-effects', label: 'After Effects', count: 203 },
      { id: 'premiere-pro', label: 'Premiere Pro', count: 167 },
      { id: 'final-cut', label: 'Final Cut Pro', count: 89 },
    ],
  },
];

interface SidebarProps {
  filter: Filter;
  onFilterChange: (filter: Filter) => void;
}

export function Sidebar({ filter, onFilterChange }: SidebarProps) {
  const [openSections, setOpenSections] = useState<string[]>(['Categories']);

  const toggleSection = (title: string) => {
    setOpenSections((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  const toggleFilter = (type: 'categories' | 'applications', id: string) => {
    const newFilter = { ...filter };
    const array = newFilter[type];
    const index = array.indexOf(id);
    
    if (index === -1) {
      array.push(id);
    } else {
      array.splice(index, 1);
    }
    
    onFilterChange(newFilter);
  };

  return (
    <div className="w-64 bg-background border-r px-4 py-6 h-screen overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      {filterSections.map((section, idx) => (
        <div key={section.title}>
          <Collapsible
            open={openSections.includes(section.title)}
            onOpenChange={() => toggleSection(section.title)}
          >
            <CollapsibleTrigger className="flex items-center justify-between w-full py-2 text-sm font-medium">
              {section.title}
              {openSections.includes(section.title) ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="space-y-2 mt-2">
                {section.items.map((item) => (
                  <label
                    key={item.id}
                    className="flex items-center space-x-2 text-sm"
                  >
                    <Checkbox
                      id={item.id}
                      checked={filter[section.type].includes(item.id)}
                      onCheckedChange={() => toggleFilter(section.type, item.id)}
                    />
                    <span>{item.label}</span>
                    <span className="text-muted-foreground ml-auto">
                      ({item.count})
                    </span>
                  </label>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
          {idx < filterSections.length - 1 && <Separator className="my-4" />}
        </div>
      ))}
    </div>
  );
}