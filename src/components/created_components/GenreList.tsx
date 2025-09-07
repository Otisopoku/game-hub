import useGenres, { Genre } from "@/hooks/useGenres";
import GenreButton from "./GenreButton";

const GenreList = () => {
  const { genres } = useGenres();

  return (
    <ul>
      {genres?.map((genre: Genre) => (
        <li key={genre.id}>
          <GenreButton genreName={genre.name} />
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
