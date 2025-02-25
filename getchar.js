export const getchar = async () => {
  const buf = new Uint8Array(1);
  const n = await Deno.stdin.read(buf);  
  if (n === null || n === 0) {
    return null;
  }
  return buf[0];
};
