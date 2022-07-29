import { emptySplitApi as api } from './emptyApi';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCompanies: build.query<GetCompaniesApiResponse, GetCompaniesApiArg>({
      query: (queryArg) => ({
        url: `/companies`,
        params: { per_page: queryArg.perPage, page: queryArg.page },
      }),
    }),
    getCompaniesByCompanyId: build.query<
      GetCompaniesByCompanyIdApiResponse,
      GetCompaniesByCompanyIdApiArg
    >({
      query: (queryArg) => ({ url: `/companies/${queryArg.companyId}` }),
    }),
    getCompaniesByCompanyIdReleases: build.query<
      GetCompaniesByCompanyIdReleasesApiResponse,
      GetCompaniesByCompanyIdReleasesApiArg
    >({
      query: (queryArg) => ({
        url: `/companies/${queryArg.companyId}/releases`,
        params: {
          per_page: queryArg.perPage,
          page: queryArg.page,
          from_date: queryArg.fromDate,
          to_date: queryArg.toDate,
        },
      }),
    }),
    getCompaniesByCompanyIdReleasesAndReleaseId: build.query<
      GetCompaniesByCompanyIdReleasesAndReleaseIdApiResponse,
      GetCompaniesByCompanyIdReleasesAndReleaseIdApiArg
    >({
      query: (queryArg) => ({
        url: `/companies/${queryArg.companyId}/releases/${queryArg.releaseId}`,
      }),
    }),
    getCompaniesByCompanyIdReleasesAndReleaseIdStatistics: build.query<
      GetCompaniesByCompanyIdReleasesAndReleaseIdStatisticsApiResponse,
      GetCompaniesByCompanyIdReleasesAndReleaseIdStatisticsApiArg
    >({
      query: (queryArg) => ({
        url: `/companies/${queryArg.companyId}/releases/${queryArg.releaseId}/statistics`,
      }),
    }),
    getCompaniesByCompanyIdReleasesAndReleaseIdKeywords: build.query<
      GetCompaniesByCompanyIdReleasesAndReleaseIdKeywordsApiResponse,
      GetCompaniesByCompanyIdReleasesAndReleaseIdKeywordsApiArg
    >({
      query: (queryArg) => ({
        url: `/companies/${queryArg.companyId}/releases/${queryArg.releaseId}/keywords`,
      }),
    }),
    getReleases: build.query<GetReleasesApiResponse, GetReleasesApiArg>({
      query: (queryArg) => ({
        url: `/releases`,
        params: {
          per_page: queryArg.perPage,
          page: queryArg.page,
          from_date: queryArg.fromDate,
          to_date: queryArg.toDate,
        },
      }),
    }),
    getCategories: build.query<GetCategoriesApiResponse, GetCategoriesApiArg>({
      query: (queryArg) => ({
        url: `/categories`,
        params: { per_page: queryArg.perPage, page: queryArg.page },
      }),
    }),
    getCategoriesByCategoryId: build.query<
      GetCategoriesByCategoryIdApiResponse,
      GetCategoriesByCategoryIdApiArg
    >({
      query: (queryArg) => ({ url: `/categories/${queryArg.categoryId}` }),
    }),
    getCategoriesByCategoryIdReleases: build.query<
      GetCategoriesByCategoryIdReleasesApiResponse,
      GetCategoriesByCategoryIdReleasesApiArg
    >({
      query: (queryArg) => ({
        url: `/categories/${queryArg.categoryId}/releases`,
        params: {
          per_page: queryArg.perPage,
          page: queryArg.page,
          from_date: queryArg.fromDate,
          to_date: queryArg.toDate,
        },
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as prtimesHackthonApi };
export type GetCompaniesApiResponse = /** status 200 OK */ 企業詳細情報[];
export type GetCompaniesApiArg = {
  /** The number of results per page (max 999). */
  perPage?: number;
  /** Page number of the results to fetch (max 99). */
  page?: number;
};
export type GetCompaniesByCompanyIdApiResponse =
  /** status 200 OK */ 企業詳細情報;
export type GetCompaniesByCompanyIdApiArg = {
  /** 企業ID */
  companyId: number;
};
export type GetCompaniesByCompanyIdReleasesApiResponse =
  /** status 200 OK */ プレスリリース情報[];
export type GetCompaniesByCompanyIdReleasesApiArg = {
  /** 企業ID */
  companyId: number;
  /** The number of results per page (max 999). */
  perPage?: number;
  /** Page number of the results to fetch (max 99). */
  page?: number;
  /** 指定期間開始（YYYY-MM-DD） */
  fromDate?: string;
  /** 指定期間終了（YYYY-MM-DD） */
  toDate?: string;
};
export type GetCompaniesByCompanyIdReleasesAndReleaseIdApiResponse =
  /** status 200 OK */ プレスリリース情報;
export type GetCompaniesByCompanyIdReleasesAndReleaseIdApiArg = {
  /** 企業ID */
  companyId: number;
  /** リリースID */
  releaseId: number;
};
export type GetCompaniesByCompanyIdReleasesAndReleaseIdStatisticsApiResponse =
  /** status 200 OK */ 統計情報;
export type GetCompaniesByCompanyIdReleasesAndReleaseIdStatisticsApiArg = {
  /** 企業ID */
  companyId: number;
  /** リリースID */
  releaseId: number;
};
export type GetCompaniesByCompanyIdReleasesAndReleaseIdKeywordsApiResponse =
  /** status 200 OK */ プレスリリース情報2[];
export type GetCompaniesByCompanyIdReleasesAndReleaseIdKeywordsApiArg = {
  /** 企業ID */
  companyId: number;
  /** リリースID */
  releaseId: number;
};
export type GetReleasesApiResponse = /** status 200 OK */ プレスリリース情報[];
export type GetReleasesApiArg = {
  /** The number of results per page (max 999). */
  perPage?: number;
  /** Page number of the results to fetch (max 99). */
  page?: number;
  /** 指定期間開始（YYYY-MM-DD） */
  fromDate?: string;
  /** 指定期間終了（YYYY-MM-DD） */
  toDate?: string;
};
export type GetCategoriesApiResponse = /** status 200 OK */ カテゴリー情報[];
export type GetCategoriesApiArg = {
  /** The number of results per page (max 999). */
  perPage?: number;
  /** Page number of the results to fetch (max 99). */
  page?: number;
};
export type GetCategoriesByCategoryIdApiResponse =
  /** status 200 OK */ カテゴリー情報;
export type GetCategoriesByCategoryIdApiArg = {
  /** カテゴリーid */
  categoryId: number;
};
export type GetCategoriesByCategoryIdReleasesApiResponse =
  /** status 200 OK */ プレスリリース情報[];
export type GetCategoriesByCategoryIdReleasesApiArg = {
  /** カテゴリーid */
  categoryId: number;
  /** The number of results per page (max 999). */
  perPage?: number;
  /** Page number of the results to fetch (max 99). */
  page?: number;
  /** 指定期間開始（YYYY-MM-DD） */
  fromDate?: string;
  /** 指定期間終了（YYYY-MM-DD） */
  toDate?: string;
};
export type 企業詳細情報 = {
  company_id: number;
  company_name: string;
  president_name: string;
  address: string;
  phone: string;
  description: string;
  industry: string;
  ipo_type: string;
  capital: number;
  foundation_date: string;
  url: string;
  twitter_screen_name: string;
};
export type プレスリリース情報 = {
  company_name: string;
  title: string;
  subtitle: string;
  lead_paragraph: string;
  body: string;
  main_image: string;
  main_category_id: number;
  main_category_name: string;
  sub_category_id: number;
  sub_category_name: string;
  pr_type: string;
  created_at: string;
};
export type 統計情報 = {
  unique_user: number;
  page_view: number;
};
export type プレスリリース情報2 = {
  id: number;
  name: string;
  sort_priority: number;
};
export type カテゴリー情報 = {
  id: number;
  name: string;
};
export const {
  useGetCompaniesQuery,
  useGetCompaniesByCompanyIdQuery,
  useGetCompaniesByCompanyIdReleasesQuery,
  useGetCompaniesByCompanyIdReleasesAndReleaseIdQuery,
  useGetCompaniesByCompanyIdReleasesAndReleaseIdStatisticsQuery,
  useGetCompaniesByCompanyIdReleasesAndReleaseIdKeywordsQuery,
  useGetReleasesQuery,
  useGetCategoriesQuery,
  useGetCategoriesByCategoryIdQuery,
  useGetCategoriesByCategoryIdReleasesQuery,
} = injectedRtkApi;
