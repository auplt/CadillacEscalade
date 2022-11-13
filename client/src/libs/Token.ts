const ACCESS_TOKEN_STR = "access_token";

export const HasToken = () => {
    return localStorage.getItem(ACCESS_TOKEN_STR) !== null && localStorage.getItem(ACCESS_TOKEN_STR) !== "undefined";
};

export const DeleteToken = () => {
    localStorage.removeItem(ACCESS_TOKEN_STR);
};

export const SetToken = (accessToken: string) => {
    localStorage.setItem(ACCESS_TOKEN_STR, accessToken);
};

export const GetToken = () => {
    return localStorage.getItem(ACCESS_TOKEN_STR);
};
