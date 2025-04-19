export type TitleConfig = {
  className: string;
  title: string;
  secondFontColorIndexList: number[];
  fontColors: string[];
};

export type CardItem = {
  id: number;
  title: string;
  desc: string;
  thumbnail: string;
  className?: string;
};

export type CardData = {
  config: TitleConfig;
  data: CardItem[];
};

export type CardDataProps = {
  cardList: CardData;
};

export type StepItem = {
  id: number;
  title: string;
  desc: string;
  iconCaption: string;
  animationSpeed: number;
  className: string;
  colors?: number[][];
  dotSize: number;
};

export type StepData ={
  config: TitleConfig;
  data: StepItem[]
};

export type StepDataProps = {
  stepList: StepData; 
};

export type ClientItem = {
  id: number;
  name: string;
  img: string;
  nameImg: string;
};

export type ExperienceItem = {
  id: number;
  company: string;
  title: string;
  responsibility: string;
  img: string;
  iconLists: string[];
  link: string;
};

export type ExperienceData ={
  config: TitleConfig;
  data: ExperienceItem[]
};

export type ExperienceDataProps = {
  experienceList: ExperienceData; 
};
