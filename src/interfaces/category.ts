const categories = {
  men: "men",
  women: "women",
  kids: "kids",
} as const;

export const AllowedCategories = Object.values(categories);

export type CategoriesType = (typeof AllowedCategories)[number];
