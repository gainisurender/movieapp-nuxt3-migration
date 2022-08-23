export interface MovieResponseRoot {
   dates: any;
   page: number;
   results: MovieItem[];
}

export interface MovieItem {
   adult: boolean;
   backdrop_path: string;
   belongs_to_collection: any;
   budget: number;
   genres: GenreItem[];
   homepage: string;
   id: number;
   imdb_id: string;
   original_language: string;
   original_title: string;
   overview: string;
   popularity: number;
   poster_path: string;
   production_companies: ProductionCompanyItem[];
   production_countries: ProductionCountryItem[];
   release_date: string;
   revenue: number;
   runtime: number;
   spoken_languages: SpokenLanguageItem[];
   status: string;
   tagline: string;
   title: string;
   video: boolean;
   vote_average: number;
   vote_count: number;
}

export interface GenreItem {
   id: number;
   name: string;
}

export interface ProductionCompanyItem {
   id: number;
   logo_path?: string;
   name: string;
   origin_country: string;
}

export interface ProductionCountryItem {
   iso_3166_1: string;
   name: string;
}

export interface SpokenLanguageItem {
   english_name: string;
   iso_639_1: string;
   name: string;
}
