import {FC} from "react";

import Head from "next/head";
import {Navbar} from "../ui";

interface Props{
    title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || 'Pokemon'}</title>
                <meta name="author" content="Laura Arellano"></meta>
                <meta name="description" content={`Información del pokemon ${title}`}></meta>
                <meta name="keywords" content={`${title}, pokemon, pokedex`}></meta>

                <Navbar />

                <main style={{
                    padding: '0px 20px'
                }}>
                    {children}
                </main>
            </Head>
        </>
    );
};

export default Layout