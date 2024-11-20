import { AxiosResponse } from "axios";
import request from "./request";
import { PaginatedResponse,PaginatedCategoryResponse} from "../types/type";




export const getProducts = (params?: Record<string, any>): Promise<PaginatedResponse> =>
    request.get('/products', { params }).then((res: AxiosResponse<PaginatedResponse>) => res.data);

export const getCollections = (params?: Record<string, any>): Promise<PaginatedCategoryResponse> =>
    request.get('/categories/', { params }).then((res: AxiosResponse<PaginatedCategoryResponse>) => res.data);

// export const createProducts = (data: CreateProductsData): Promise<Post> =>
//     request.post('/products', data, {
//         headers: {
//             'Content-Type': 'application/json; charset=UTF-8',
//         },
//     }).then((res: AxiosResponse<Post>) => res.data);

// export const updateProducts = (id: number, data: UpdatePostData): Promise<Post> =>
//     request.put(`/products/${id}`, data, {
//     }).then((res: AxiosResponse<Post>) => res.data);

// export const deleteProducts = (id: number): Promise<void> =>
//     request.delete(`/posts/${id}`).then(() => {});
