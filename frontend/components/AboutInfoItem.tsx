import { ElementType, ReactNode } from "react";

export default function QuickInfoItem({
  Icon,
  title,
  description,
}: {
  Icon: ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="about-info">
      <Icon className="icon" />
      <h3>{title}</h3>
      <p className="description">{description}</p>
    </div>
  );
}
