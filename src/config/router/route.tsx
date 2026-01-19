import LandingPage from "../../landing-page/landing-page";
import AppLayout from "../../layout";


export type RouteType = {
    path: string,
    element: React.ReactNode,
    index: true | undefined
}

export const routes: RouteType[] | any[] = [
    {
        path: "/",
        element: <AppLayout />,
        children: [
            { index: true, element: <LandingPage /> },
        ]
    },
];