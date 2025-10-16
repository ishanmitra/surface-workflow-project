"use client";

import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";
import { StepIcon } from "~/components/StepIcon";
import { cn } from "~/lib/utils";
import { Manrope, Inter } from "next/font/google";
import React, { cloneElement, type Dispatch, type ReactElement, type SetStateAction } from "react";

const inter = Inter({ subsets: ['latin'], weight: ['400'] });
const manrope = Manrope({ subsets: ['latin'], weight: ['600'] });

interface StepCardProps {
  title: React.ReactNode;
  description: string;
  actionLabel: string;
  actionVariant: 'primary' | 'secondary';
  result?: 'inactive' | 'test' | 'success' | 'error';
  setResult: Dispatch<SetStateAction<"inactive" | "test" | "success" | "error">>;
  children: ReactElement<{ 
    result?: 'inactive' | 'test' | 'success' | 'error';
    setResult?: Dispatch<SetStateAction<"inactive" | "test" | "success" | "error">>;
  }>;
}

export default function StepCard({
  title,
  description,
  actionLabel,
  actionVariant,
  result,
  setResult,
  children,
}: StepCardProps) {
  const buttonStyles =
    actionVariant === "primary"
      ? "bg-[#2f64ee] hover:bg-[#0b2d84] text-white"
      : "bg-[#f1f1f2] hover:bg-[#bdbdc2] text-[#5f6065]";

  const clonedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return cloneElement(child, { result, setResult });
    }
    return child;
  });

  return (
    <Collapsible className="mb-9">
      <Card className="rounded-[8px] border-2 border-[#ebedf3] shadow-[0px_1.2px_3.99px_0px_#00000007,0px_4.02px_13.4px_0px_#0000000B]">
        <CollapsibleTrigger className="h-fit group">
          <CardHeader className="flex h-fit px-0 mx-6 gap-[23px]">
            <StepIcon result={result} />
            <div className="flex flex-col gap-[11px] text-left">
              <CardTitle className="font-medium text-[18px] leading-5">{title}</CardTitle>
              <CardDescription className={`${inter.className} text-base tracking-wider leading-5`}>
                {description}
              </CardDescription>
            </div>
            <CardAction
              className={`${manrope.className} transition-all duration-150 group-data-[state=open]:opacity-0 group-data-[state=open]:cursor-default ${buttonStyles} cursor-pointer font-semibold text-[14px] w-25 h-9 content-center rounded-[8px] self-center ml-auto`}
            >
              {actionLabel}
            </CardAction>
          </CardHeader>
        </CollapsibleTrigger>
        <CollapsibleContent
          className={cn(
            "overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down"
          )}
        >
          {clonedChildren}
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
}
