import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface TableCellProps extends ComponentProps<"td"> {}

export function TableCell(props: TableCellProps) {
  return (
    <td {...props} className={twMerge(props.className, "py-3 px-4 text-sm font-medium text-zinc-300")}>
      {props.children}
    </td>
  );
}