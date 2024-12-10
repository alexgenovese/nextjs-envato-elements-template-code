"use client";

import { useState } from 'react';
import { Header } from '@/components/header/header';
import { Subheader } from '@/components/header/subheader';
import { Sidebar } from '@/components/sidebar';
import { Button } from '@/components/ui/button';
import { SearchBar } from '@/components/search/search-bar';
import { TemplateGrid } from '@/components/template-grid/template-grid';
import { templates } from '@/lib/data';
import { Filter } from '@/lib/types';

export default function Home() {
  const [filter, setFilter] = useState<Filter>({
    categories: [],
    applications: [],
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Subheader />
      <div className="flex flex-1">
        <Sidebar filter={filter} onFilterChange={setFilter} />
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">All Templates</h2>
              <div className="flex items-center space-x-4">
                <SearchBar />
                <Button variant="outline">Sort by: Featured</Button>
              </div>
            </div>
            <TemplateGrid templates={templates} filter={filter} />
          </div>
        </main>
      </div>
    </div>
  );
}