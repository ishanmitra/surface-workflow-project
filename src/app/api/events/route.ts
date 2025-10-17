/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { NextResponse } from "next/server";
import { type Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface EventPayload {
  type: string;
  pageUrl?: string | null;
  visitorId: string;
  metadata?: Prisma.InputJsonValue;
}

// Allows CORS only for all sites
function withCors(response: NextResponse) {
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return response;
}

export async function POST(req: Request) {
  try {
    const body = await req.json() as EventPayload;

    const event = await prisma.event.create({
      data: {
        type: body.type,
        pageUrl: body.pageUrl,
        visitorId: body.visitorId,
        metadata: body.metadata ?? {},
      },
    });

    return withCors(NextResponse.json({ success: true, event }));
  } catch (err: unknown) {
    console.error(err);
    return withCors(NextResponse.json({ success: false, error: err }, { status: 500 }));
  }
}

export async function GET() {
  const events = await prisma.event.findMany({
    orderBy: { createdAt: "desc" },
    take: 50,
  });
  
  return withCors(NextResponse.json(events));
}

export async function OPTIONS() {
  return withCors(NextResponse.json({}));
}