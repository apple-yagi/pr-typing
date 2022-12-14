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
export type GetCompaniesApiResponse = /** status 200 OK */ ??????????????????[];
export type GetCompaniesApiArg = {
  /** The number of results per page (max 999). */
  perPage?: number;
  /** Page number of the results to fetch (max 99). */
  page?: number;
};
export type GetCompaniesByCompanyIdApiResponse =
  /** status 200 OK */ ??????????????????;
export type GetCompaniesByCompanyIdApiArg = {
  /** ??????ID */
  companyId: number;
};
export type GetCompaniesByCompanyIdReleasesApiResponse =
  /** status 200 OK */ ???????????????????????????[];
export type GetCompaniesByCompanyIdReleasesApiArg = {
  /** ??????ID */
  companyId: number;
  /** The number of results per page (max 999). */
  perPage?: number;
  /** Page number of the results to fetch (max 99). */
  page?: number;
  /** ?????????????????????YYYY-MM-DD??? */
  fromDate?: string;
  /** ?????????????????????YYYY-MM-DD??? */
  toDate?: string;
};
export type GetCompaniesByCompanyIdReleasesAndReleaseIdApiResponse =
  /** status 200 OK */ ???????????????????????????;
export type GetCompaniesByCompanyIdReleasesAndReleaseIdApiArg = {
  /** ??????ID */
  companyId: number;
  /** ????????????ID */
  releaseId: number;
};
export type GetCompaniesByCompanyIdReleasesAndReleaseIdStatisticsApiResponse =
  /** status 200 OK */ ????????????;
export type GetCompaniesByCompanyIdReleasesAndReleaseIdStatisticsApiArg = {
  /** ??????ID */
  companyId: number;
  /** ????????????ID */
  releaseId: number;
};
export type GetCompaniesByCompanyIdReleasesAndReleaseIdKeywordsApiResponse =
  /** status 200 OK */ ???????????????????????????2[];
export type GetCompaniesByCompanyIdReleasesAndReleaseIdKeywordsApiArg = {
  /** ??????ID */
  companyId: number;
  /** ????????????ID */
  releaseId: number;
};
export type GetReleasesApiResponse = /** status 200 OK */ ???????????????????????????[];
export type GetReleasesApiArg = {
  /** The number of results per page (max 999). */
  perPage?: number;
  /** Page number of the results to fetch (max 99). */
  page?: number;
  /** ?????????????????????YYYY-MM-DD??? */
  fromDate?: string;
  /** ?????????????????????YYYY-MM-DD??? */
  toDate?: string;
};
export type GetCategoriesApiResponse = /** status 200 OK */ ?????????????????????[];
export type GetCategoriesApiArg = {
  /** The number of results per page (max 999). */
  perPage?: number;
  /** Page number of the results to fetch (max 99). */
  page?: number;
};
export type GetCategoriesByCategoryIdApiResponse =
  /** status 200 OK */ ?????????????????????;
export type GetCategoriesByCategoryIdApiArg = {
  /** ???????????????id */
  categoryId: number;
};
export type GetCategoriesByCategoryIdReleasesApiResponse =
  /** status 200 OK */ ???????????????????????????[];
export type GetCategoriesByCategoryIdReleasesApiArg = {
  /** ???????????????id */
  categoryId: number;
  /** The number of results per page (max 999). */
  perPage?: number;
  /** Page number of the results to fetch (max 99). */
  page?: number;
  /** ?????????????????????YYYY-MM-DD??? */
  fromDate?: string;
  /** ?????????????????????YYYY-MM-DD??? */
  toDate?: string;
};
export type ?????????????????? = {
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
export type ??????????????????????????? = {
  company_name: string;
  company_id: number;
  release_id: number;
  title: string;
  subtitle: string;
  url: string;
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
export type ???????????? = {
  unique_user: number;
  page_view: number;
};
export type ???????????????????????????2 = {
  id: number;
  name: string;
  sort_priority: number;
};
export type ????????????????????? = {
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
