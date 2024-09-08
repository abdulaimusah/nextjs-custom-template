let getToken: () => Promise<string | null> = async () => null;

export const setGetTokenFunction = (
  newGetToken: () => Promise<string | null>
) => {
  getToken = newGetToken;
};

export { getToken };