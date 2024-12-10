"use client";

import { Template, Filter } from '@/lib/types';
import { TemplateCard } from './template-card';

interface TemplateGridProps {
  templates: Template[];
  filter: Filter;
}

export function TemplateGrid({ templates, filter }: TemplateGridProps) {
  const filteredTemplates = templates.filter((template) => {
    const categoryMatch =
      filter.categories.length === 0 ||
      template.categories.some((cat) => filter.categories.includes(cat));
    const applicationMatch =
      filter.applications.length === 0 ||
      template.applications.some((app) => filter.applications.includes(app));
    return categoryMatch && applicationMatch;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredTemplates.map((template) => (
        <TemplateCard key={template.id} template={template} />
      ))}
    </div>
  );
}