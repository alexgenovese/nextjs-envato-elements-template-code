"use client";

import Link from 'next/link';
import { Search } from 'lucide-react';

const searchTags = [
  'business intro',
  'engagement',
  'explainer video',
  'instagram ad',
  'intro by neurofx',
  'latest reels templates',
  'marketing agency intro',
  'promo event tech',
  'roadmap infographics',
  'roadmaps',
  'social templates',
  'spheres',
  't-shirt promo',
];

export function Subheader() {
  return (
    <div className="bg-[#FFF5F5] border-b border-[#FFE7E7] py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-2 text-sm mb-2">
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            All Items
          </Link>
          <span className="text-gray-400">›</span>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Video Templates
          </Link>
        </div>
        <h1 className="text-3xl font-bold mb-2">
          <span className="text-[#A855F7]">Saas</span> Templates & Editable Video Templates
        </h1>
        <p className="text-gray-600 mb-4">
          Browse through all 40 templates. Take a look at the entire library.
        </p>
        <p className="text-gray-600 mb-4">
          If you can&apos;t find what you need. Check out the filters or refine your search!
        </p>
        <div className="flex flex-wrap gap-2">
          {searchTags.map((tag) => (
            <Link
              key={tag}
              href="#"
              className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-gray-200 text-sm text-gray-700 hover:border-gray-300"
            >
              <Search className="h-3 w-3 mr-1" />
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}