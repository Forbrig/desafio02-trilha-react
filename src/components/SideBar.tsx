import "../styles/sidebar.scss";

import { Button } from "../components/Button";

interface SideBarProps {
  onChangeGenre: (id: number) => void;
  selectedGenreId: number;
  genres: GenreProps[];
}
interface GenreProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

export function SideBar({
  genres,
  onChangeGenre,
  selectedGenreId,
}: SideBarProps) {
  // Complete aqui
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onChangeGenre(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
