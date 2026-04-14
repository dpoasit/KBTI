export interface Effects {
  cb?: number;
  sm?: number;
  eq?: number;
  ai?: number;
  tn?: number;
  cam?: number;
  soul?: number;
  spend?: number;
  tea?: number;
  live?: number;
  stash?: number;
  loud?: number;
  niche?: number;
}

export interface Option {
  text: string;
  effects: Effects;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export interface ResultData {
  code: string;
  name: string;
  oneLiner: string;
  longText: string;
  roles: string[];
  risks: string[];
  spend: string[];
  share: {
    moments: string;
    xhs: string;
    weibo: string;
  };
  color: string;
}

export interface Badge {
  id: string;
  name: string;
  condition: string;
  text: string;
}

export interface UserScores {
  cb: number;
  sm: number;
  eq: number;
  ai: number;
  tn: number;
  cam: number;
  soul: number;
  spend: number;
  tea: number;
  live: number;
  stash: number;
  loud: number;
  niche: number;
}
