import { MenuItem } from "@/data/menu";

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;

export async function getMenuFromNotion(): Promise<MenuItem[] | null> {
  if (!NOTION_API_KEY || !NOTION_DATABASE_ID) return null;
  try {
    const response = await fetch(`https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`, {
      method: "POST",
      headers: { "Authorization": `Bearer ${NOTION_API_KEY}`, "Notion-Version": "2022-06-28", "Content-Type": "application/json" },
      next: { revalidate: 600 },
    });
    if (!response.ok) return null;
    const data = await response.json();
    return data.results.map((page: any) => {
      const props = page.properties;
      return {
        id: page.id,
        name: props.Name?.title[0]?.plain_text || "Unknown Item",
        description: props.Description?.rich_text[0]?.plain_text || "",
        category: props.Category?.select?.name || "beef",
        price: props.Price?.number || 0,
        originalPrice: props["Original Price"]?.number || undefined,
        image: props["Image URL"]?.url || "/placeholder.png",
        popular: props.Popular?.checkbox || false,
        available: props.Available?.checkbox ?? true,
      };
    }).filter((item: any) => item.available);
  } catch (error) { return null; }
}