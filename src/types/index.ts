export type UsageType = 'Permission Sets' | 'Workflows' | 'Performance cycle';

export interface Person {
  id: string;
  name: string;
  avatar: string;
  position: string;
}

export interface GroupConditions {
  department?: string[];
  position?: string[];
  location?: string[];
  team?: string[];
  employmentType?: string[];
  tenure?: string[];
  level?: string[];
  project?: string[];
  skills?: string[];
  role?: string[];
}

export interface Group {
  id: string;
  name: string;
  members: any[];
  usage: UsageType[];
  owner: Person;
  conditions: GroupConditions;
} 