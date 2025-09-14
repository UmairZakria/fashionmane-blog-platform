export function deslugify(slug) {
    return slug
      .toString()
      .replace(/-/g, " "); 
  }
  