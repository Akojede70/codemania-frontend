import { JSX } from 'react/jsx-runtime';
import { ReactNode } from "react";
import {
    Bet,
    Community,
    Gamepad,
    Leaderboard,
    Video,
    Tokensidebar,
} from '../../assets/images-icon/';

interface Path {
    id: number;
    icon: JSX.Element;
    name: ReactNode;
    path: string;
}

const paths: Path[] = [
    {
        id: 1,
        icon: (
            <img
                src={Gamepad}
                alt="game"
            />
        ),
        name: "Tournaments",
        path: '/',
    },
    {
        id: 2,
        icon: (
            <img
                src={Leaderboard}
                alt="leaderboard"
            />
        ),
        name: "Leaderboard",
        path: '',
    },
    {
        id: 3,
        icon: (
            <img
                src={Tokensidebar}
                alt="tokensidebar"
            />
        ),
        name: "Token Shop",
        path: '',
    },
    {
        id: 4,
        icon: (
            <img
                src={Bet}
                alt="bet"
            />
        ),
        name: "Live betting",
        path: '',
    },
    {
        id: 5,
        icon: (
            <img
                src={Video}
                alt="video"
            />
        ),
        name: "Content Locker",
        path: '',
    },
    {
        id: 6,
        icon: (
            <img
                src={Community}
                alt="community"
            />
        ),
        name: "Community",
        path: '',
    },
];

export default paths;
