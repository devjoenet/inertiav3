class Theme {
  base: Array<string>
  variants: { [variant: string]: Array<string> }

  constructor() {
    this.base = []
    this.variants = {}
  }
  setBaseClasses(baseClasses: Array<string>): void {
    this.base = [...this.base, ...baseClasses]
  }

  setVariants(variants: { [variant: string]: Array<string> }): void {
    this.variants = { ...this.variants, ...variants }
  }

  getThemes(): Array<string> {
    return Object.keys(this.variants)
  }

  getClasses(variant: string): string {
    return [...this.base, ...this.variants[variant]].join(" ")
  }
}

export { Theme }
