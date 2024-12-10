import Image from 'next/image';
import { Template } from '@/lib/types';

interface TemplateCardProps {
  template: Template;
}

export function TemplateCard({ template }: TemplateCardProps) {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative aspect-video">
        <Image
          src={template.image}
          alt={template.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold mb-2">{template.title}</h3>
        <p className="text-sm text-muted-foreground">{template.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {template.applications.map((app) => (
            <span
              key={app}
              className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs"
            >
              {app}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}