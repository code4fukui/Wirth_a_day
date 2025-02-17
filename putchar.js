export const putchar = async (c) => {
  const n = typeof c == "string" ? c.charCodeAt(0) : c;
  await Deno.stdout.write(new Uint8Array([n]));
};
//await putchar("a");
//await putchar("b".charCodeAt(0));
