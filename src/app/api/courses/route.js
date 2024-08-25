import { NextResponse } from "next/server";
import courses from "./data.json";

export async function GET(req) {
  return NextResponse.json(courses);
}
