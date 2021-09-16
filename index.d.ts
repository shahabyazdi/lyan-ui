declare module "lyan-ui" {
  import { ReactNode, FC } from "react";

  export interface ElementProps {
    element?: "input" | "select" | "multi select" | "table" | "group";
    type?: string;
    children?: ReactNode;
    onValueChange?(value: any): void;
  }

  export default function Element(props: ElementProps): FC;
}

declare module "lyan-ui/components/accordion" {
  import { HTMLAttributes, ReactElement, FC } from "react";

  interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
    icons?: ReactElement[];
    name?: string;
    collapse?: boolean;
    shadow?: boolean;
  }

  export default function Accordion(props: AccordionProps): FC;
}

declare module "lyan-ui/components/button" {
  import { FC } from "react";
  import Editor from "react-simple-code-editor";

  interface EditorProps extends Editor {
    language?: string;
  }

  export default function CodeEditor(props: EditorProps): FC;
}

declare module "lyan-ui/components/code_editor" {
  import { HTMLAttributes, FC } from "react";

  export default function Button(props: HTMLAttributes<HTMLButtonElement>): FC;
}

declare module "lyan-ui/components/fields" {
  import { HTMLAttributes, FC } from "react";

  interface FieldsProps extends HTMLAttributes<HTMLDivElement> {
    shadow?: boolean;
    rtl?: boolean;
  }

  export default function Fields(props: FieldsProps): FC;

  export function Item(props: HTMLAttributes<HTMLDivElement>): FC;
  export function Name(props: HTMLAttributes<HTMLDivElement>): FC;
  export function Element(props: HTMLAttributes<HTMLDivElement>): FC;
  export function Options(props: HTMLAttributes<HTMLDivElement>): FC;
}

declare module "lyan-ui/components/fieldset" {
  import { HTMLAttributes, ReactElement, FC } from "react";

  interface FieldsetProps extends HTMLAttributes<HTMLFieldSetElement> {
    shadow?: boolean;
    name?: boolean;
    icons?: ReactElement[];
    collapse?: boolean;
  }

  export default function Fieldset(props: FieldsetProps): FC;

  export function Icon(props: HTMLAttributes<HTMLDivElement>): FC;
}

declare module "lyan-ui/components/float_modal" {
  import { ReactElement, CSSProperties, FC } from "react";

  interface FloatModalProps {
    children?: ReactElement;
    name?: string;
    portal?: boolean;
    onOpen?(): void;
    panelClassName?: string;
    panelStyle?: CSSProperties;
    removePanelOnHide?: boolean;
    buttonStyle?: CSSProperties;
  }

  export default function FloatModal(props: FloatModalProps): FC;
}

declare module "lyan-ui/components/float_panel" {
  import {
    ReactElement,
    CSSProperties,
    HTMLAttributes,
    FC,
    MouseEvent,
  } from "react";

  interface FloatPanelProps extends HTMLAttributes<HTMLDivElement> {
    titleBar?: {
      title?: string;
      icons: ReactElement[];
      onClick?(event: MouseEvent<HTMLDivElement>): void;
    };
    id?: string;
    width?: number | string;
    maxHeight?: string;
    portal?: boolean;
    onClose?(): void;
    style?: CSSProperties;
    blur?: boolean;
    shadow?: boolean;
  }

  export default function FloatPanel(props: FloatPanelProps): FC;

  export function TitlebarIcon(props: HTMLAttributes<HTMLDivElement>): FC;
}

declare module "lyan-ui/components/form_control" {
  import { HTMLAttributes, FC } from "react";

  interface FromControlProps extends HTMLAttributes<HTMLInputElement> {
    onValueChange?(value: string): void;
    digits?: string[];
    separator?: string;
    decimal?: string;
  }

  export default function FormControl(props: FromControlProps): FC;
}

declare module "lyan-ui/components/form_group" {
  import { HTMLAttributes, FC } from "react";

  interface FormGroupProps extends HTMLAttributes<HTMLDivElement> {
    title?: string;
  }

  export default function FormGroup(props: FormGroupProps): FC;
}

declare module "lyan-ui/components/group" {
  import { ReactElement, FC } from "react";

  interface GroupProps {
    type?: string;
    children?: ReactElement;
  }

  export default function Group(props: GroupProps): FC;
}

declare module "lyan-ui/components/input" {
  import { HTMLAttributes, FC } from "react";

  interface InputProps extends HTMLAttributes<HTMLInputElement> {
    onValueChange?(value: string): void;
  }

  export default function Input(props: InputProps): FC;
}

declare module "lyan-ui/components/list" {
  import {
    HTMLAttributes,
    ReactElement,
    FC,
    MouseEvent,
    ChangeEvent,
  } from "react";

  interface ListProps extends HTMLAttributes<HTMLDivElement> {
    gray?: boolean;
    toolbar?: boolean;
    searchValue?: string;
    rtl?: boolean;
    toolbarIcons?: ReactElement[];
    labels?: { Search: string };
    activeItem: { name?: string; id: string };
    onNewItem?(event: MouseEvent<HTMLDivElement>): void;
    onSearch?(event: ChangeEvent<HTMLInputElement>): void;
  }

  export default function List(props: ListProps): FC;

  export function ToolbarIcon(props: HTMLAttributes<HTMLDivElement>): FC;
  export function ToolbarIcon(props: HTMLAttributes<HTMLLIElement>): FC;
}

declare module "lyan-ui/components/multi_select" {
  import { HTMLAttributes, FC, ChangeEvent } from "react";

  export type Option = {
    text: string;
    value: string;
  };

  interface MultiSelectProps extends HTMLAttributes<HTMLDivElement> {
    type?: string;
    value?: string;
    name?: string;
    allowMoreOptions?: boolean;
    options?: Option[];
    digits?: string[];
    onChange?(event: ChangeEvent<HTMLInputElement>): void;
    onValueChange?(value: string): void;
    onNewItemRequested?(): void;
    labels?: {
      "Item Selected": string;
      "Items Selected": string;
      "Select All": string;
      "Select None": string;
      More: string;
    };
  }

  export default function MultiSelect(props: MultiSelectProps): FC;
}

declare module "lyan-ui/components/number" {
  import { HTMLAttributes, FC } from "react";

  interface NumberProps extends HTMLAttributes<HTMLInputElement> {
    separator?: string;
    decimal?: string;
    digits?: string[];
    onValueChange?(value: string): void;
  }

  export default function Number(props: NumberProps): FC;
}

declare module "lyan-ui/components/options" {
  import { FC } from "react";

  interface OptionsProps {
    stroke?: number | string;
    onDelete?(): void;
    onEdit?(): void;
    onClose?(): void;
    onMoveUp?(): void;
    onMoveDown?(): void;
  }

  export default function Option(props: OptionsProps): FC;
}

declare module "lyan-ui/components/section" {
  import { HTMLAttributes, FC } from "react";

  export default function Section(props: HTMLAttributes<HTMLElement>): FC;
}

declare module "lyan-ui/components/select" {
  import { HTMLAttributes, FC } from "react";

  interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
    allowMoreOptions?: boolean;
    emptyOption?: boolean;
    options?: Array<string[]>;
    labels?: { More: string };
    onValueChange?(value: string): void;
    onNewItemRequested?(): void;
  }

  export default function Select(props: SelectProps): FC;
}

declare module "lyan-ui/components/switch" {
  import { HTMLAttributes, FC } from "react";

  interface SwitchProps extends HTMLAttributes<HTMLInputElement> {
    onValueChange?(value: string): void;
  }

  export default function Switch(props: SwitchProps): FC;
}

declare module "lyan-ui/components/tab" {
  import { HTMLAttributes, ReactElement, FC } from "react";

  export type Tab = {
    name: string;
    id: string;
  };

  interface TabProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
    rtl?: boolean;
    activeTab: Tab;
    tabs?: Tab[];
    icons?: ReactElement[];
    onChange?(tab: Tab): void;
  }

  export default function Tab(props: TabProps): FC;

  export function Icon(props: HTMLAttributes<HTMLDivElement>): FC;
}

declare module "lyan-ui/components/tab_layout" {
  import { HTMLAttributes, FC } from "react";

  export default function TabLayout(props: HTMLAttributes<HTMLDivElement>): FC;
}

declare module "lyan-ui/components/table" {
  import { FC } from "react";

  interface TableProps {
    layout?: string;
  }

  export default function Table(props: TableProps): FC;
}

declare module "lyan-ui/components/table_layout" {
  import { HTMLAttributes, FC } from "react";

  export type Head = {
    name: string;
  };

  interface TableLayoutProps extends HTMLAttributes<HTMLTableElement> {
    renderHead?: boolean;
    newRow?: boolean;
    page?: number;
    lastIndex?: number;
    lastPage?: number;
    totalRows?: number;
    rowsPerPage?: number;
    rtl?: boolean;
    digits?: string[];
    head?: Head[];
    onNewRow?(): boolean;
    setPage?(page: number): void;
    labels?: {
      Rows: string;
      Page: string;
      Of: string;
    };
  }

  export default function TableLayout(props: TableLayoutProps): FC;
}
