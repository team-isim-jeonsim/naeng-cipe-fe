interface Recipe {
  id: number;
  title: string;
  writer: string;
  createdDate: string;
}

export interface RecipesResponse extends Recipe {
  thumbnail: string;
}

export interface RecipeResponse extends Recipe {
  content: string;
  ingredients: IngredientResponse[];
  images: ImageResponse[];
  updatedDate: string;
}

interface ImageResponse {
  imageUrl: string;
  isMainImage: boolean;
}
