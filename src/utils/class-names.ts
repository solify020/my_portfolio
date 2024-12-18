type ClassValue = string | undefined | null | false

export const classNames = (...classes: ClassValue[]): string => {
  return classes.filter(Boolean).join(' ')
}
