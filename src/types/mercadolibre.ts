/**
 * These types represent a subset of MercadoLibre API responses.
 * Feel free to complete missing fields if needed.
 */

export type SearchApiResponse = {
  paging: {
    total: number;
    offset: number;
    limit: number;
  };
  results: Array<{
    id: string;
    title: string;
    thumbnail: string;
  }>;
};

export type ItemApiResponse = {
  id: string;
  title: string;
  pictures: Array<{ url: string }>;
};

export type ItemDescriptionApiResponse = {
  plain_text: string;
};
