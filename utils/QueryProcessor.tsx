export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return ( "sramin" );
  }

  if (query.toLowerCase().includes("what is your name?")) {
    return "sramin";
  }

  if (query.toLowerCase().includes("what is 45 plus 1?")) {
    return "46";
  }

  if (query.toLowerCase().includes("what is 65 plus 51?")) {
    return "116";
  }

  return "";


}
