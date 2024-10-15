import React, { ElementType } from "react";

export default function SocialLink({
  Icon,
  href,
  children,
}: {
  Icon: ElementType;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="social-link">
      <Icon className="footer-icon" />
      {children}
    </a>
  );
}
