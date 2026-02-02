import CartPage from "@/cart/cart";
import LandingPage from "../../landing-page/landing-page";
import AppLayout from "../../layout";
import Listing from "../../listing/listing";
import { BlogPost } from "@/blog-post/blog-post";


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
            { path: "/shopping", element: <Listing /> },
            { path: "/cart", element: <CartPage /> },
            { path: "/blogs", element: <LandingPage /> },
            { path: "/blogs/:id", element: <BlogPost /> },
            { path: "/contact", element: <LandingPage /> },
            { path: "/about", element: <LandingPage /> },
        ]
    },
];