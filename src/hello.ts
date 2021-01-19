function capitalize(word: string): string {
  word = word.toLowerCase();
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function hello(name: string): string {
  const names: Array<string> = name.trim().split(/\s+/);
  const capitalizedNames: Array<string> = [];

  for (const name of names) {
    capitalizedNames.push(capitalize(name));
  }

  return `Hello, ${capitalizedNames.join(" ")}!`;
}
