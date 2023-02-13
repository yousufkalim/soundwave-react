export const rgbaToHex = (rgba: string): string => {
  const parts = rgba.substring(rgba.indexOf('(') + 1, rgba.indexOf(')')).split(',');
  const r = parseInt(parts[0], 10);
  const g = parseInt(parts[1], 10);
  const b = parseInt(parts[2], 10);

  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};
