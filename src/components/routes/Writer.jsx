import CreateNote from "../Writer-dashboard/CreateNote.jsx";
import NotesPage from "../Writer-dashboard/NotesPage.jsx";
import AuthorDashboard from "../../pages/AuthorDashboard.jsx";
import PoemsPage from "../Writer-dashboard/PoemsPage.jsx";
import CreatePoem from "../Writer-dashboard/CreatePoem.jsx";
import ViewNote from "../Writer-dashboard/ViewNote.jsx";
import FirstChapter from "../../pages/FirstChapter.jsx";
import Submitions from "../../pages/Submitions.jsx";
import Advertising from "../../pages/Advertising.jsx";
import NewCampaign from "../../pages/NewCampaign.jsx";
import SstSubmitions from "../../pages/SstSubmitions.jsx";
import Nisades from "../../pages/Nisades.jsx";
import CreateNisades from "../../pages/CreateNisades.jsx";


export default function RoutesWriter () {
    return [
        { path: '/author', element: <AuthorDashboard />, layout: "author_dashboard" },
        { path: '/author/poems', element: <PoemsPage />, layout: "author_dashboard" },
        { path: '/author/poems/create', element: <CreatePoem />, layout: "author_dashboard" },
        { path: '/author/notes', element: <NotesPage />, layout: "author_dashboard" },
        { path: '/author/notes/create', element: <CreateNote />, layout: "author_dashboard" },
        { path: '/author/notes/:noteId', element: <ViewNote />, layout: "author_dashboard" },
        { path: '/author/chapter/create', element: <FirstChapter />, layout: "author_dashboard" },
        { path: '/author/novels', element: <Submitions />, layout: "author_dashboard" },
        { path: '/author/advertising', element: <Advertising />, layout: "author_dashboard" },
        { path: '/author/advertising/newcampaign', element: <NewCampaign />, layout: "author_dashboard" },
        { path: '/author/short-stories', element: <SstSubmitions />, layout: "author_dashboard" },
        { path: '/author/nisades', element: <Nisades />, layout: "author_dashboard" },
        { path: '/author/nisades/create', element: <CreateNisades/>, layout: "author_dashboard" },


    ]
}