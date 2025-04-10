// src\Components\Work\Work.tsx
// src\Components\Shared\Modal\Modal.tsx
export type Project = {
    id: string;
    title: string;
    description: string;
    image: string;
    liveLink: string;
    githubLink: string;
    active: boolean;
    gallery: string[];
    tech: string[];
};

// src\Components\Experience\Experience.tsx
export type ExperienceItem = {
    title: string;
    institution: string;
    date: string;
    type: string;
    certification: string;
  };

// src\Components\Shared\TechHero\TechHero.tsx
export type Tech = {
    id: string;
    name: string;
    icon: string;
    date: string;
    hero: boolean;
};