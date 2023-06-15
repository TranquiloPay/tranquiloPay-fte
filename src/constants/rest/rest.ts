export const TRANQUILOPAY_BFF_PATH =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://tranquilopay-bff.vercel.app";
