import { languages } from "./data";

import axios from "axios";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const executeCode = async (code, language) => {
    const response = await API.post(`/execute`, {
        "language": language,
        "version": languages[language],
        "files": [
            {
                "content": code
            }
        ],
        
    })
    return response.data;

};
