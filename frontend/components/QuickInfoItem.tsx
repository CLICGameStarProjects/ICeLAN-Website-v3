import { ElementType, ReactNode } from "react";

export default function QuickInfoItem({
  Icon,
  children,
}: {
  Icon: ElementType;
  children: ReactNode;
}) {
  return (
    <div className="quick-info-item">
      <Icon className="quick-info-icon" />
      {children}
    </div>
  );
}
