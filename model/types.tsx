export interface Skill {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Error {
  error: string;
}

export interface ITimeline {
  id: string;
  title: string;
  location: string;
  description: string;
  buttonText?: string | undefined;
  date: string;
  icon: string;
}
