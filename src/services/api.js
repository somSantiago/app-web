
import client from "./client";

const api = {
        users: {
            list() {
                return client.get(
                    `/users`
                );
            }
        }

};

export default api;