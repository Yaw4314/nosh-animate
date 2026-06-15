import { getMenuFromNotion } from "@/lib/notion";
import { burgers as staticBurgers } from "@/data/menu";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const items = await getMenuFromNotion();
    return NextResponse.json(items || staticBurgers);
  } catch (error) {
    return NextResponse.json(staticBurgers);
  }
}
