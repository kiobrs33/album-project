import { clientApi } from "../api/clientApi";

export const getPhotos = async () => {
  try {
    const data = await clientApi.get("/photos", {
      // headers: {
      //   "x-token":
      //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NWYzMGU2YzQ1ZjIyNDAyYTFiN2EyN2IiLCJpYXQiOjE3MTE5MzE2MTYsImV4cCI6MTcxMjAxODAxNn0.fsHyF50u-OdQNTIWx3PCzosL6YeYaqjozhD3V_9dsn4",
      // },
    });

    return data;
  } catch (error) {
    return new Error(error.message);
  }
};
