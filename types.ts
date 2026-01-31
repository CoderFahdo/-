
export interface SlideProps {
  onNext?: () => void;
  onPrev?: () => void;
}

export enum SlideID {
  Title = 0,
  Intro = 1,
  Technical1 = 2,
  Technical2 = 3,
  MultiBranch = 4,
  MenuManagement = 5,
  SEO = 6,
  Requirements = 7,
  Timeline = 8,
  Financial = 9,
  Support = 10,
  Conclusion = 11
}
