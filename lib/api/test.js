import client from "./client"
import { API } from "./restApi"

export const getText = () => {
    return client.get(`${API}/staffs/counselors/`);
}