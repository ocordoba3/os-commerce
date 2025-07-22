const genders = {
  men: "men",
  women: "women",
  kid: "kid",
  unisex: "unisex",
} as const;

export const AllowedGenders = Object.values(genders);

export type GenderType = (typeof AllowedGenders)[number];
