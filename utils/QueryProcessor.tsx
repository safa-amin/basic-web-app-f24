export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    const andrewId = "sramin"; // Replace with your actual Andrew ID
    if (andrewId === "YOUR ANDREW ID SHOULD BE HERE") {
      throw new Error("Please replace the placeholder with your actual Andrew ID.");
    }
    return andrewId;
  }
  
  return "Query not recognized.";
}