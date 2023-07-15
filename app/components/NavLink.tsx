import React from "react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

export interface NavLinkProps extends LinkProps {
  children: React.ReactElement | string;
  activeClassName?: string;
  className?: string;
}

export function NavLink({
  children,
  href,
  activeClassName,
  className,
  ...props
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  const combinedClassName =
    isActive && activeClassName ? `${className} ${activeClassName}` : className;

  return (
    <Link href={href} className={combinedClassName} {...props}>
      {children}
    </Link>
  );
}
