export interface SliderProps {
  bg?: string;
  slideIndex?: number;
  handleClick?: () => void;
}

export interface ArrowProps {
  direction: string;
  bg?: string;
}

export interface WrapperProps {
  slideIndex: number;
}

export interface CategoryProps {
  item?: CategoryProps;
  img: string;
  title: string;
  id: number;
}

export interface ProductProps {
  item?: ProductProps;
  img?: string;
  id?: number;
}

export interface SocialIconProps {
  color: string;
}
