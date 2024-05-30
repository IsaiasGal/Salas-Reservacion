import { BasicResponse } from "./BasicResponse.model";

export interface LoginResponse extends BasicResponse {
    idUsuario: number;
}