export interface Link {
  label: string;
  url: string;
}

export interface UiLink extends Link {
  open?: boolean;
}
