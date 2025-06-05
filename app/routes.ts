// src/routes.ts
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"), // La page d'accueil
  route("tasks/:id", "routes/task-details.tsx"), // Page de détail d'une tâche
  route("*", "routes/error.tsx") // Gestion des erreurs (par exemple, si la tâche n'existe pas)
] satisfies RouteConfig;
