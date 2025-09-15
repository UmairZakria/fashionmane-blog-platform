export function deslugify(slug) {
    return slug
      .toString()
      .trim()
      .replace(/-/g, " "); 
  }
  