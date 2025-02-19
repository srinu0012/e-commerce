import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export function usePageNavigation(page: string) {
  let navigate = useNavigate();
  let GoToPage = useCallback(() => {
    navigate(`/${page}`);
  }, [page]);

  return GoToPage;
}
