export type ProjectType = 
  | 'anime-drama' | 'short-drama' | 'advertisement' | 'voice-broadcast' 
  | 'digital-person' | 'selling-video' | 'product-promo' | 'knowledge-video' | 'other';

export type Platform = 'douyin' | 'xiaohongshu' | 'bilibili' | 'youtube' | 'tiktok' | 'other';
export type ProjectStatus = 'learning' | 'testing' | 'creating' | 'published' | 'archived';
export type AssetType = 'character' | 'scene' | 'prop';
export type PromptType = 'image' | 'video';

export interface Project {
  id: string;
  name: string;
  type: ProjectType;
  description: string;
  goal: string;
  platforms: Platform[];
  status: ProjectStatus;
  createdAt: string;
  updatedAt: string;
}

export interface Asset {
  id: string;
  projectId: string;
  name: string;
  type: AssetType;
  description: string;
  imagePrompt: string;
  videoPrompt: string;
  notes: string;
  createdAt: string;
  updatedAt: string;
}

export interface Prompt {
  id: string;
  projectId: string;
  title: string;
  type: PromptType;
  positivePrompt: string;
  negativePrompt: string;
  relatedAssets: string[];
  platforms: Platform[];
  effectScore: number;
  notes: string;
  createdAt: string;
  updatedAt: string;
}

export interface Shot {
  id: string;
  shotNumber: number;
  duration: number;
  description: string;
  promptId?: string;
}

export interface Storyboard {
  id: string;
  projectId: string;
  title: string;
  description: string;
  totalDuration: number;
  shots: Shot[];
  createdAt: string;
  updatedAt: string;
}

export interface Review {
  id: string;
  projectId: string;
  title: string;
  platform: Platform;
  content: string;
  successPoints: string;
  failurePoints: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface AppData {
  projects: Project[];
  assets: Asset[];
  prompts: Prompt[];
  storyboards: Storyboard[];
  reviews: Review[];
  version: string;
  lastSyncTime: string;
}

export interface Statistics {
  totalProjects: number;
  totalAssets: number;
  totalPrompts: number;
  totalStoryboards: number;
  totalReviews: number;
  recentProjects: Project[];
  recentEdits: Array<{ type: string; name: string; time: string }>;
}
