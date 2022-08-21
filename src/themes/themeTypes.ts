export type ThemeKeys = ThemeKey | ((string | number) & {});
export type ThemeKey = keyof ThemeObject;

export interface ThemeObject {
  fontFamily?: string;
  backgroundColor: string;
  color: string;
  middleGray: string;
  brand: {
    borderColor: string;
    cssTextColor: string;
    jsTextColor: string;
    color: string;
  };
  menu: {
    backgroundColor: string;
    activeColor: string;
    fontColor: string;
  };
}
