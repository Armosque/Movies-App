import { MoviesGrid } from "../components/MoviesGrid/MoviesGrid";
import { Search } from "../components/Search/Search";
import { useQuery } from "../hooks/useQuery";

export function LandingPage() {
    const query = useQuery();
    const search =query.get("search");
    return (
        <div>
            <Search/>
            <MoviesGrid key={search}/>
        </div>
    )
}
