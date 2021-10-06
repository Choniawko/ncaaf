export const headers = {
  "Ocp-Apim-Subscription-Key": process.env.REACT_APP_API_KEY || "",
  "Content-Type": "application/json",
  mode: "cors",
};
