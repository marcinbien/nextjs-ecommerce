export default function gql(
  x: TemplateStringsArray,
  ...args: string[]
): string {
  const r = [];
  for (let i = 0, l = x.length; i < l; i++) {
    r.push(x[i]);
    if (args[i]) {
      r.push(args[i]);
    }
  }

  const query = r.join("");
  return query;
}
