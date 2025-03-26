const categories = {
  men: "men",
  women: "women",
  kid: "kid",
  unisex: "unisex",
} as const;

export const AllowedCategories = Object.values(categories);

export type CategoriesType = (typeof AllowedCategories)[number];
