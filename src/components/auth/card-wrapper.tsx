"use client";

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { BackButton } from "./back-button";
import { AuthHeader } from "./header";
import { Social } from "./social";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export function CardWrapper({
  children,
  headerLabel,
  backButtonHref,
  backButtonLabel,
  showSocial,
}: CardWrapperProps) {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <AuthHeader label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>

      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
}
