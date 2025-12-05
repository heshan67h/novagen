export interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export interface FeatureBoxProps {
  icon: string;
  title: string;
  description: string;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}
