import type { SVGProps } from "react";

export default function FoodIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M21 10H3a1 1 0 0 0-1 1a10 10 0 0 0 5 8.66V21a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1.34A10 10 0 0 0 22 11a1 1 0 0 0-1-1m-5.45 8.16a1 1 0 0 0-.55.9V20H9v-.94a1 1 0 0 0-.55-.9A8 8 0 0 1 4.06 12h15.88a8 8 0 0 1-4.39 6.16M9 9V7.93a4.53 4.53 0 0 0-1.28-3.15A2.5 2.5 0 0 1 7 3V2H5v1a4.53 4.53 0 0 0 1.28 3.17A2.5 2.5 0 0 1 7 7.93V9zm4 0V7.93a4.53 4.53 0 0 0-1.28-3.15A2.5 2.5 0 0 1 11 3V2H9v1a4.53 4.53 0 0 0 1.28 3.15A2.5 2.5 0 0 1 11 7.93V9zm4 0V7.93a4.53 4.53 0 0 0-1.28-3.15A2.5 2.5 0 0 1 15 3V2h-2v1a4.53 4.53 0 0 0 1.28 3.15A2.5 2.5 0 0 1 15 7.93V9z"
      ></path>
    </svg>
  );
}
