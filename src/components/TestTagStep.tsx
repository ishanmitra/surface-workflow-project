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
import { useEvents } from "~/hooks/use-events";
import { Spinner } from "~/components/ui/spinner";

const manrope = Manrope({ subsets: ['latin'], weight: ['600'] });

export default function TestTagStep() {
  const { events, isLoading, error } = useEvents(5000); // Poll every 5 seconds

  if (error) {
    return (
      <div className="text-red-500 p-6">
        Error loading events: {error.message}
      </div>
    );
  }

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
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-4">
                  <Spinner className="mx-auto" />
                </TableCell>
              </TableRow>
            ) : (
              events.map((event) => (
                <TableRow key={event.id} className="h-13 text-[#667085] border-[#eaecf0]">
                  <TableCell className="px-3 w-[50px]">{event.type}</TableCell>
                  <TableCell className="px-3 max-w-[100px] overflow-hidden">
                    {event.visitorId}
                  </TableCell>
                  <TableCell className="px-3 max-w-[100px] overflow-hidden">
                    {JSON.stringify(event.metadata)}
                  </TableCell>
                  <TableCell className="px-3 max-w-[100px] overflow-hidden">
                    {new Date(event.createdAt).toLocaleString()}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-end">
        <Button 
          className={`${manrope.className} font-semibold bg-[#2f64ee] hover:bg-[#0b2d84] mx-6 cursor-pointer`}
        >
          Test Tag
        </Button>
      </div>
    </>
  );
}
