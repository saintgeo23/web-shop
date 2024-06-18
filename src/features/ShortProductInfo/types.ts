export interface ShortProductInfoProps {
    price: number;
    photo: string;
    title: string;
    description?: string;
    oldPrice? : number;
    style?: React.CSSProperties
  }