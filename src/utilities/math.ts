/**
 * Parse a value to integer or return 0 if parsing fails
 */
export function parseIntOrZero(value: string | number | undefined): number {
  if (value === undefined || value === null) {
    return 0;
  }
  const parsed = parseInt(String(value), 10);
  return isNaN(parsed) ? 0 : parsed;
}

/**
 * Parse a value to float or return 0 if parsing fails
 */
export function parseFloatOrZero(value: string | number | undefined): number {
  if (value === undefined || value === null) {
    return 0;
  }
  const parsed = parseFloat(String(value));
  return isNaN(parsed) ? 0 : parsed;
}

/**
 * Clamp a value between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
