export function slugify(text) {
    return text
      .toString()
      .trim()
      .replace(/\s+/g, "-"); // replace one or more spaces with -
  }
  