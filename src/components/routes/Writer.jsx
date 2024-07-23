import CreateNote from "../Writer-dashboard/CreateNote.jsx";
import NotesPage from "../Writer-dashboard/NotesPage.jsx";
import AuthorDashboard from "../../pages/AuthorDashboard.jsx";
import PoemsPage from "../Writer-dashboard/PoemsPage.jsx";
import CreatePoem from "../Writer-dashboard/CreatePoem.jsx";
import ViewNote from "../Writer-dashboard/ViewNote.jsx";


export default function RoutesWriter () {
    return [
        { path: '/author', element: <AuthorDashboard />, layout: "author_dashboard" },
        { path: '/author/poems', element: <PoemsPage />, layout: "author_dashboard" },
        { path: '/author/poems/create', element: <CreatePoem />, layout: "author_dashboard" },
        { path: '/author/notes', element: <NotesPage />, layout: "author_dashboard" },
        { path: '/author/notes/create', element: <CreateNote />, layout: "author_dashboard" },
        { path: '/author/notes/:noteId', element: <ViewNote />, layout: "author_dashboard" },
    ]
}