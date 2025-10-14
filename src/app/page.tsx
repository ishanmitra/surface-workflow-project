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

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table"

import { cn } from "~/lib/utils"

import { Inter, Manrope } from 'next/font/google';
import { Button } from "~/components/ui/button";

const inter = Inter({ subsets: ['latin'], weight: ['400'] });
const manrope = Manrope({ subsets: ['latin'], weight: ['600'] });

const events = [
  {
    event: "Track",
    visitor: "37d272f6-877b-47c6-98e5-5156bbfbc454",
    metadata: "{}",
    createdAt: "9/15/2024, 5:08:56 PM",
  },
  {
    event: "Page",
    visitor: "e7ef515a-7a5b-4949-9f28-8ae34790d144",
    metadata: "{“page_url”: “https://withsurface.com/page-1}",
    createdAt: "9/15/2024, 5:09:35 PM",
  },
  {
    event: "Identity",
    visitor: "42d467c8-3bd1-4519-9ae6-bfb00adcc01c",
    metadata: "{“user_id”: “42d467c8-3bd1-4519-9ae6-bfb00adcc01c”}",
    createdAt: "9/15/2024, 5:12:19 PM",
  },
  {
    event: "Click",
    visitor: "aa731c78-c4e0-4e4f-b515-65259f498979",
    metadata: "{“element_id”: “button-element”}",
    createdAt: "9/15/2024, 5:17:35 PM",
  },
]

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
            <CardContent className="mb-[23px] border border-[#eaecf0] rounded-[8px] mx-6 px-0">
              <Table className="text-base">
                <TableHeader className="h-11">
                  <TableRow className="border-[#eaecf0]">
                    <TableHead className="px-3">Event</TableHead>
                    <TableHead className="px-3">Visitor</TableHead>
                    <TableHead className="px-3">Metadata</TableHead>
                    <TableHead className="px-3">Created at</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {events.map((event, idx) => (
                    <TableRow key={idx} className="h-13 text-[#667085] border-[#eaecf0]">
                      <TableCell className="px-3 w-[50px]">{event.event}</TableCell>
                      <TableCell className="px-3 max-w-[100px] overflow-hidden">{event.visitor}</TableCell>
                      <TableCell className="px-3 max-w-[100px] overflow-hidden">{event.metadata}</TableCell>
                      <TableCell className="px-3 max-w-[100px] overflow-hidden">{event.createdAt}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="float-right">
              <Button className={`${manrope.className} font-semibold bg-[#2f64ee] hover:bg-[#0b2d84] cursor-pointer w-[89px]`}>
                Test Tag
              </Button>
            </CardFooter>
          </CollapsibleContent>
        </Card>
      </Collapsible>

    </>
  );
}
