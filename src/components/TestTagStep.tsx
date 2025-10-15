import { Button } from "~/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Manrope } from "next/font/google";

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

export default function TestTagStep() {
  return (
    <>
      <div className="mb-[23px] border border-[#eaecf0] rounded-[8px] mx-6 px-0">
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
      </div>
      <div className="flex justify-end">
        <Button className={`${manrope.className} font-semibold bg-[#2f64ee] hover:bg-[#0b2d84] mx-6 cursor-pointer`}>
          Test Tag
        </Button>
      </div>
    </>
  );
}
