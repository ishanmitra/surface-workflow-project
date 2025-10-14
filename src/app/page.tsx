import { StepIcon } from "~/components/StepIcon";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible"

import { cn } from "~/lib/utils"

import { Inter, Manrope } from 'next/font/google';
import { Button } from "~/components/ui/button";

const inter = Inter({ subsets: ['latin'], weight: ['400'] });
const manrope = Manrope({ subsets: ['latin'], weight: ['600'] });

export default function HomePage() {
  return (
    <>
      <h1 className="font-semibold text-[32px] mb-9 pb-[7px] border-b border-[#ebedf3]">
        Getting Started
      </h1>

      <Collapsible className="mb-9">
        <Card className="rounded-[8px] border-2 border-[#ebedf3] shadow-[0px_1.2px_3.99px_0px_#00000007,0px_4.02px_13.4px_0px_#0000000B]">
          <CollapsibleTrigger className="h-fit group">
            <CardHeader className="flex h-fit px-0 mx-6 gap-[23px]">
              <StepIcon status="inactive" />
              <div className="flex flex-col gap-[11px] text-left">
                <CardTitle className="font-medium text-[18px] leading-5">
                  Install Surface Tag on your site
                </CardTitle>
                <CardDescription className={`${inter.className} text-base tracking-wider leading-5`}>
                  Enable tracking and analytics.
                </CardDescription>
              </div>
              <CardAction className={`${manrope.className} transition-all duration-150 group-data-[state=open]:opacity-0 group-data-[state=open]:cursor-default bg-[#2f64ee] hover:bg-[#0b2d84] cursor-pointer text-white font-semibold text-[14px] w-25 h-9 content-center rounded-[8px] self-center ml-auto`}>
                Install Tag
              </CardAction>
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent className={cn('overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down')}>
            <CardContent>
              <p>Card Content</p>
              <p>Card Content</p>
              <p>Card Content</p>
              <p>Card Content</p>
              <p>Card Content</p>
              <p>Card Content</p>
              <p>Card Content</p>
              <p>Card Content</p>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </CollapsibleContent>
        </Card>
      </Collapsible>

      <Collapsible>
        <Card className="rounded-[8px] border-2 border-[#ebedf3] shadow-[0px_1.2px_3.99px_0px_#00000007,0px_4.02px_13.4px_0px_#0000000B]">
          <CollapsibleTrigger className="h-fit group">
            <CardHeader className="flex h-fit px-0 mx-6 gap-[23px]">
              <StepIcon status="inactive" />
              <div className="flex flex-col gap-[11px] text-left">
                <CardTitle className="font-medium text-[18px] leading-5">
                  Test Surface Tag Events
                </CardTitle>
                <CardDescription className={`${inter.className} text-base tracking-wider leading-5`}>
                  Test if the Surface Tag is properly emitting events.
                </CardDescription>
              </div>
              <CardAction className={`${manrope.className} transition-all duration-150 group-data-[state=open]:opacity-0 group-data-[state=open]:cursor-default bg-[#f1f1f2] hover:bg-[#bdbdc2] cursor-pointer text-[#5f6065] font-semibold text-[14px] w-25 h-9 content-center rounded-[8px] self-center ml-auto`}>
                Test Tag
              </CardAction>
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent className={cn('overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down')}>
            <CardContent className="mb-[23px]">
              <p>Card Content</p>
              <p>Card Content</p>
              <p>Card Content</p>
              <p>Card Content</p>
              <p>Card Content</p>
              <p>Card Content</p>
              <p>Card Content</p>
              <p>Card Content</p>
              <p>Card Content</p>
            </CardContent>
            <CardFooter className="float-right">
              <Button className="bg-[#2f64ee] hover:bg-[#0b2d84] cursor-pointer">
                Test Tag
              </Button>
            </CardFooter>
          </CollapsibleContent>
        </Card>
      </Collapsible>

    </>
  );
}
