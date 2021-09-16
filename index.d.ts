declare module "lyan-ui" {
  import { ReactNode, FC } from "react";

  interface ElementProps {
    element?: "input" | "select" | "multi select" | "table" | "group";
    type?: string;
    children?: ReactNode;
    onValueChange?(value: any): void;
  }

  export function Element(props: ElementProps): FC;
}

declare module "lyan-ui/components/input" {
  import { HTMLAttributes, FC } from "react";

  interface InputProps extends HTMLAttributes<HTMLInputElement> {
    onValueChange?(value: string): void;
  }

  export function Input(props: InputProps): FC;
}

declare module "lyan-ui/components/form_control" {
  import { HTMLAttributes, FC } from "react";

  interface FromControlProps extends HTMLAttributes<HTMLInputElement> {
    onValueChange?(value: string): void;
    digits?: string[];
    separator?: string;
    decimal?: string;
  }

  export function FormControl(props: FromControlProps): FC;
}
