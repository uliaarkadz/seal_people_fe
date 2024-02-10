import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Landing from "./pages";
import Show from "./pages/Show";
import { peopleLoader, personLoader } from "./loaders";
import { updateAction, createAction, deleteAction } from "./actions";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Landing />} loader={peopleLoader} />
      <Route path=":id" element={<Show />} loader={personLoader} />
      <Route path="create" action={createAction} />
      <Route path="update/:id" action={updateAction} />
      <Route path="delete/:id" action={deleteAction} />
    </Route>
  )
);

export default router;
