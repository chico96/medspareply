"use client";

import NextLink from "next/link";
import type { ComponentProps, MouseEventHandler, ReactNode } from "react";
import { track } from "@vercel/analytics";

type AllowedPropertyValues = string | number | boolean | null;
type EventProperties = Record<string, AllowedPropertyValues>;

type TrackedAnchorProps = Omit<ComponentProps<"a">, "onClick"> & {
  event: string;
  eventProperties?: EventProperties;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  children: ReactNode;
};

export function TrackedAnchor({
  event,
  eventProperties,
  onClick,
  children,
  ...rest
}: TrackedAnchorProps) {
  const handleClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    track(event, eventProperties);
    onClick?.(e);
  };
  return (
    <a {...rest} onClick={handleClick}>
      {children}
    </a>
  );
}

type TrackedLinkProps = ComponentProps<typeof NextLink> & {
  event: string;
  eventProperties?: EventProperties;
};

export function TrackedLink({
  event,
  eventProperties,
  onClick,
  children,
  ...rest
}: TrackedLinkProps) {
  const handleClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    track(event, eventProperties);
    onClick?.(e);
  };
  return (
    <NextLink {...rest} onClick={handleClick}>
      {children}
    </NextLink>
  );
}
