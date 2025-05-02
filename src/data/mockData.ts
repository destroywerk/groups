import { Group, Person, UsageType } from '../types';

const departments = ['Engineering', 'Design', 'Product', 'Marketing', 'Sales', 'HR', 'Finance', 'Operations'];
const locations = ['Berlin', 'Munich', 'London', 'Paris', 'Amsterdam', 'Barcelona', 'Milan'];
const positions = {
  hr: ['HR Director', 'HR Manager', 'HR Lead', 'HR Specialist'],
  engineering: ['Engineering Director', 'Engineering Manager', 'Senior Engineer', 'Software Engineer'],
  design: ['Design Director', 'Design Manager', 'Senior Designer', 'Product Designer'],
  product: ['Product Director', 'Product Manager', 'Product Owner', 'Product Analyst'],
  marketing: ['Marketing Director', 'Marketing Manager', 'Marketing Specialist', 'Content Strategist'],
  sales: ['Sales Director', 'Sales Manager', 'Account Executive', 'Sales Representative'],
  finance: ['Finance Director', 'Finance Manager', 'Financial Analyst', 'Accountant'],
  operations: ['Operations Director', 'Operations Manager', 'Operations Specialist', 'Operations Analyst'],
};

// Helper function to get position based on department and index
const getPosition = (department: keyof typeof positions, index: number): string => {
  const deptPositions = positions[department];
  return deptPositions[index % deptPositions.length];
};

// Helper function to get position based on group membership
const getPositionForGroup = (groupName: string): string => {
  if (groupName.includes('HR')) return 'HR Manager';
  if (groupName.includes('C-Suite')) return 'Chief Executive Officer';
  if (groupName.includes('Contractors')) return 'Contractor';
  if (groupName.includes('Sales')) return 'Sales Representative';
  if (groupName.includes('Marketing')) return 'Marketing Manager';
  if (groupName.includes('Tech') || groupName.includes('Engineering')) return 'Software Engineer';
  if (groupName.includes('Design')) return 'Product Designer';
  if (groupName.includes('Product')) return 'Product Manager';
  if (groupName.includes('Finance')) return 'Financial Analyst';
  if (groupName.includes('Operations')) return 'Operations Manager';
  if (groupName.includes('Security')) return 'Security Engineer';
  if (groupName.includes('Support')) return 'Support Specialist';
  return 'Team Member';
};

// Generate 100 people for the pool with correlated positions
export const people: Person[] = Array(100).fill(null).map((_, i) => ({
  id: `p${i + 1}`,
  name: [
    'Sana Dawoud', 'David Harley', 'Anna Reiser', 'Wade Warren', 'Robert Fox',
    'Jenny Wilson', 'Theresa Webb', 'Darlene Robertson', 'Cameron Williamson', 'Jerome Bell',
    'Bessie Cooper', 'Jacob Jones', 'Kristin Watson', 'Marvin McKinney', 'Brooklyn Simmons',
    'Marjory Dawes', 'Emma Thompson', 'Oliver Martinez', 'Sophia Chen', 'Lucas Kim',
    'Isabella Garcia', 'Ethan Patel', 'Ava Williams', 'Noah Brown', 'Mia Johnson',
    'Liam Davis', 'Charlotte Lee', 'Mason Taylor', 'Amelia White', 'James Wilson',
    'Harper Anderson', 'Benjamin Moore', 'Evelyn Jackson', 'Alexander Martin', 'Abigail Thompson',
    'Michael Rodriguez', 'Elizabeth Clark', 'William Lewis', 'Sofia Hernandez', 'Daniel Lee',
    'Victoria Nguyen', 'Joseph Brown', 'Grace Kim', 'Henry Davis', 'Chloe Martinez',
    'Samuel Taylor', 'Zoe Anderson', 'David Wilson', 'Lily Garcia', 'Andrew Johnson',
    'Hannah Smith', 'Christopher Lee', 'Aria Patel', 'Matthew Brown', 'Scarlett Davis',
    'Ryan Thompson', 'Maya Rodriguez', 'Nathan Clark', 'Audrey Martin', 'Jack Wilson',
    'Lucy Anderson', 'Owen Moore', 'Nora Jackson', 'Sebastian Lee', 'Claire Thompson',
    'Dylan Martinez', 'Bella Clark', 'Adrian Lewis', 'Skylar White', 'Leo Johnson',
    'Aurora Chen', 'Elijah Brown', 'Ruby Davis', 'Carter Wilson', 'Hazel Anderson',
    'Thomas Moore', 'Violet Jackson', 'Charles Martin', 'Penelope Thompson', 'Caleb Rodriguez',
    'Madeline Clark', 'Isaac Lewis', 'Elena Hernandez', 'Julian Lee', 'Sarah Nguyen',
    'Adam Brown', 'Eva Kim', 'Max Davis', 'Stella Martinez', 'Miles Taylor',
    'Gabriella Anderson', 'Cole Wilson', 'Naomi Garcia', 'Luke Johnson', 'Alice Smith',
    'Felix Lee', 'Luna Patel', 'Oscar Brown', 'Clara Davis', 'Eli Thompson',
    'Layla Rodriguez', 'Simon Clark', 'Willow Martin', 'Leo Wilson', 'Ivy Anderson'
  ][i],
  avatar: `https://i.pravatar.cc/150?img=${i + 1}`,
  position: i < 10 ? getPosition('hr', i) :
           i < 20 ? getPosition('engineering', i - 10) :
           i < 30 ? getPosition('design', i - 20) :
           i < 40 ? getPosition('product', i - 30) :
           i < 50 ? getPosition('marketing', i - 40) :
           i < 60 ? getPosition('sales', i - 50) :
           i < 80 ? getPosition('operations', i - 60) :
           getPosition('finance', i - 80)
}));

// Generate groups matching the screenshot
export const groups: Group[] = [
  {
    id: 'g1',
    name: 'Admin Execs',
    members: people.slice(0, 2).map(p => ({ ...p, position: 'Executive Administrator' })),
    usage: ['Permission Sets' as UsageType, 'Workflows' as UsageType],
    owner: people[0],
    conditions: {
      level: ['Executive'],
      role: ['Administrator'],
    },
  },
  {
    id: 'g2',
    name: 'C-Suite',
    members: people.slice(2, 5).map(p => ({ ...p, position: 'Chief Executive Officer' })),
    usage: ['Performance cycle' as UsageType, 'Permission Sets' as UsageType],
    owner: people[0],
    conditions: {
      level: ['C-Level'],
      role: ['Executive'],
    },
  },
  {
    id: 'g3',
    name: 'Contractors',
    members: people.slice(5, 24).map(p => ({ ...p, position: 'Contractor' })),
    usage: ['Workflows' as UsageType, 'Performance cycle' as UsageType],
    owner: people[1],
    conditions: {
      employmentType: ['Contractor', 'Temporary'],
      tenure: ['0-12 months'],
    },
  },
  {
    id: 'g4',
    name: 'HR Leads',
    members: people.slice(24, 36).map(p => ({ ...p, position: 'HR Team Lead' })),
    usage: ['Permission Sets' as UsageType],
    owner: people[0],
    conditions: {
      department: ['Human Resources'],
      level: ['Team Lead', 'Manager'],
    },
  },
  {
    id: 'g5',
    name: 'HR DACH',
    members: people.slice(36, 51).map(p => ({ ...p, position: 'HR Manager' })),
    usage: ['Workflows' as UsageType],
    owner: people[0],
    conditions: {
      department: ['Human Resources'],
      location: ['Germany', 'Austria', 'Switzerland'],
    },
  },
  {
    id: 'g6',
    name: 'HR Summit 2025',
    members: people.slice(51, 75).map(p => ({ ...p, position: 'HR Professional' })),
    usage: ['Permission Sets' as UsageType, 'Performance cycle' as UsageType],
    owner: people[2],
    conditions: {
      project: ['HR Summit 2025'],
      role: ['Organizer', 'Presenter'],
    },
  },
  {
    id: 'g7',
    name: 'HUG demo crew',
    members: people.slice(75, 84).map(p => ({ ...p, position: 'Demo Specialist' })),
    usage: ['Workflows' as UsageType],
    owner: people[2],
    conditions: {
      project: ['HUG Demo'],
      skills: ['Public Speaking', 'Product Demo'],
    },
  },
  {
    id: 'g8',
    name: 'Sales & Marketing',
    members: people.slice(0, 45).map(p => ({ 
      ...p, 
      position: Math.random() > 0.5 ? 'Sales Representative' : 'Marketing Manager'
    })),
    usage: ['Permission Sets' as UsageType],
    owner: people[2],
    conditions: {
      department: ['Sales', 'Marketing'],
      location: ['EMEA', 'APAC'],
    },
  },
  {
    id: 'g9',
    name: 'Tech & Product EMEA',
    members: people.slice(0, 121).map(p => ({ 
      ...p, 
      position: Math.random() > 0.5 ? 'Software Engineer' : 'Product Manager'
    })),
    usage: ['Performance cycle' as UsageType, 'Workflows' as UsageType],
    owner: people[0],
    conditions: {
      team: ['Engineering', 'Product'],
      location: ['Europe', 'Middle East', 'Africa'],
    },
  },
  {
    id: 'g10',
    name: 'Design Team',
    members: people.slice(10, 25).map(p => ({ ...p, position: 'Product Designer' })),
    usage: ['Permission Sets' as UsageType, 'Performance cycle' as UsageType],
    owner: people[3],
    conditions: {
      team: ['Design'],
      skills: ['UI Design', 'UX Research'],
    },
  },
  {
    id: 'g11',
    name: 'Engineering Leaders',
    members: people.slice(25, 35).map(p => ({ ...p, position: 'Engineering Manager' })),
    usage: ['Workflows' as UsageType, 'Permission Sets' as UsageType],
    owner: people[4],
    conditions: {
      team: ['Engineering'],
      level: ['Manager', 'Director'],
    },
  },
  {
    id: 'g12',
    name: 'Finance Department',
    members: people.slice(35, 50).map(p => ({ ...p, position: 'Financial Analyst' })),
    usage: ['Performance cycle' as UsageType, 'Permission Sets' as UsageType],
    owner: people[5],
    conditions: {
      department: ['Finance'],
      role: ['Analyst', 'Controller'],
    },
  },
  {
    id: 'g13',
    name: 'Global Operations',
    members: people.slice(50, 80).map(p => ({ ...p, position: 'Operations Manager' })),
    usage: ['Workflows' as UsageType, 'Performance cycle' as UsageType],
    owner: people[6],
    conditions: {
      department: ['Operations'],
      location: ['Global'],
    },
  },
  {
    id: 'g14',
    name: 'Marketing Team',
    members: people.slice(15, 35).map(p => ({ ...p, position: 'Marketing Manager' })),
    usage: ['Permission Sets' as UsageType],
    owner: people[7],
    conditions: {
      team: ['Marketing'],
      skills: ['Digital Marketing', 'Content Strategy'],
    },
  },
  {
    id: 'g15',
    name: 'Product Management',
    members: people.slice(40, 60).map(p => ({ ...p, position: 'Product Manager' })),
    usage: ['Performance cycle' as UsageType, 'Workflows' as UsageType],
    owner: people[8],
    conditions: {
      role: ['Product Manager'],
      skills: ['Product Strategy', 'User Research'],
    },
  },
  {
    id: 'g16',
    name: 'Regional Managers',
    members: people.slice(60, 75).map(p => ({ ...p, position: 'Regional Manager' })),
    usage: ['Permission Sets' as UsageType, 'Performance cycle' as UsageType],
    owner: people[9],
    conditions: {
      level: ['Manager'],
      location: ['APAC', 'EMEA', 'Americas'],
    },
  },
  {
    id: 'g17',
    name: 'Sales Team APAC',
    members: people.slice(20, 45).map(p => ({ ...p, position: 'Sales Representative' })),
    usage: ['Workflows' as UsageType],
    owner: people[10],
    conditions: {
      team: ['Sales'],
      location: ['APAC'],
    },
  },
  {
    id: 'g18',
    name: 'Security Team',
    members: people.slice(45, 55).map(p => ({ ...p, position: 'Security Engineer' })),
    usage: ['Performance cycle' as UsageType, 'Permission Sets' as UsageType],
    owner: people[11],
    conditions: {
      team: ['Security'],
      skills: ['Information Security', 'Compliance'],
    },
  },
  {
    id: 'g19',
    name: 'Support Staff',
    members: people.slice(55, 85).map(p => ({ ...p, position: 'Support Specialist' })),
    usage: ['Workflows' as UsageType],
    owner: people[12],
    conditions: {
      role: ['Support'],
      skills: ['Customer Service', 'Technical Support'],
    },
  },
].sort((a, b) => a.name.localeCompare(b.name)); 