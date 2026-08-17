// scripts/seed.ts
import { db } from "../db";
import { notes } from "../db/schema";

async function seed() {
  console.log("🌱 Seeding database with sample notes...");
  
  const sampleNotes = [
    { 
      content: "Next.js uses React Server Components for better performance", 
      important: true 
    },
    { 
      content: "Drizzle ORM provides type-safe database queries", 
      important: true 
    },
    { 
      content: "Neon is a serverless PostgreSQL database with branching", 
      important: false 
    },
    { 
      content: "Next.js App Router supports both static and dynamic rendering", 
      important: true 
    },
    { 
      content: "Remember to backup your database regularly", 
      important: false 
    },
    { 
      content: "TypeScript helps catch errors at compile time", 
      important: true 
    },
  ];

  try {
    for (const note of sampleNotes) {
      await db.insert(notes).values(note);
      console.log(`✅ Added: "${note.content}"`);
    }
    console.log(`✅ Seeded ${sampleNotes.length} notes successfully!`);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
  }
}

seed();