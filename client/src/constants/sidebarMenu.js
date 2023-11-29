import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PostAddIcon from '@mui/icons-material/PostAdd';
import NoteAltIcon from '@mui/icons-material/NoteAlt';

import AssignmentIcon from '@mui/icons-material/Assignment'
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"

import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';

import ExitToAppIcon from "@mui/icons-material/ExitToApp";

export const sidebarMenu = [
    {
        title: 'Home',
        icon: HomeOutlinedIcon,
        path: '/admin-home',
    },

    {
        title: 'Cursos',
        tag: 'divider'
    },
    {
        title: 'Agregar curso',
        icon: PostAddIcon,
        path: '/addCurso',
    },
    {
        title: 'Listar cursos',
        icon: AssignmentIcon,
        path: '/cursos',
    },

    {
        title: 'Profesores',
        tag: 'divider'
    },
    // {
    //     title: 'Agregar profesor',
    //     icon: GroupAddIcon,
    //     path: '/addProfesor',
    // },
    {
        title: 'Listar Profesores',
        icon: SupervisorAccountOutlinedIcon,
        path: '/profesores',
    },
    {
        title: 'Novedades',
        icon: ReceiptOutlinedIcon,
        path: '/invoices',
    },
    {
        title: 'Alumnos',
        tag: 'divider'
    },
    // {
    //     title: 'Agregar Alumnos',
    //     icon: PersonAddAltIcon,
    //     path: '/addAlumno',
    // },
    {
        title: 'Listar Alumnos',
        icon: SupervisorAccountOutlinedIcon,
        path: '/alumnos',
    },
    {
        title: 'FAQ Page',
        icon: HelpOutlineOutlinedIcon,
        path: '/faq',
    },
    {
        title: 'Perfil',
        tag: 'divider'
    },
    {
        title: 'Profile Form',
        icon: PersonOutlinedIcon,
        path: '/form',
    },
    {
        title: 'Logout',
        icon: ExitToAppIcon,
        path: '/logout',
    },
  
];


export const sidebarMenuProf = [
    {
        title: 'Home',
        icon: HomeOutlinedIcon,
        path: '/admin-home',
    },

    {
        title: 'Cursos',
        tag: 'divider'
    },
    {
        title: 'Mis alumnos',
        icon: PostAddIcon,
        path: '/calificar',
    },



    {
        title: 'Perfil',
        tag: 'divider'
    },
    {
        title: 'Profile Form',
        icon: PersonOutlinedIcon,
        path: '/form',
    },
    {
        title: 'Logout',
        icon: ExitToAppIcon,
        path: '/logout',
    },
  
]


export const sidebarMenuAlum = [
    {
        title: 'Home',
        icon: HomeOutlinedIcon,
        path: '/admin-home',
    },

    {
        title: 'Cursos',
        tag: 'divider'
    },
    {
        title: 'Mis notas',
        icon: PostAddIcon,
        path: '/calificaciones',
    },



    {
        title: 'Perfil',
        tag: 'divider'
    },
    {
        title: 'Profile Form',
        icon: PersonOutlinedIcon,
        path: '/form',
    },
    {
        title: 'Logout',
        icon: ExitToAppIcon,
        path: '/logout',
    },
  
]