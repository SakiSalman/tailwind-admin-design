export function isArrayAndNotEmpty(input: any): boolean {
    return input && Array.isArray(input) && input.length > 0;
}