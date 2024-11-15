import { AxiosResponse } from "axios";
import request from "./request";

interface PostData {
    id: string;
    title: string;
    body: string;
    userId: string;
}

interface CreatePostData {
    title: string;
    body: string;
    userId: number;
}

interface UpdatePostData {
    title?: string;
    body?: string;
    userId?: number;
}

export const getProducts = (params?: Record<string, any>): Promise<PostData[]> =>
    request.get('/products', { params }).then((res: AxiosResponse<PostData[]>) => res.data);


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
