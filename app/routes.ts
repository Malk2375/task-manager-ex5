// app/routes.ts
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),  // La page d'accueil pour la liste des tâches
  route("tasks/:id", "pages/TaskDetailView/TaskDetailView.tsx"),  // Page de détail de la tâche
  route("*", "routes/error.tsx")  // Page d'erreur pour les routes inconnues
] satisfies RouteConfig;
