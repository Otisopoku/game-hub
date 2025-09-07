import axios from "axios";
import { authorization } from "./the-movie-db-auth";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    language: "en-US",
    page: "1",
  },
  headers: {
    accept: "application/json",
    Authorization: authorization,
  },
});
