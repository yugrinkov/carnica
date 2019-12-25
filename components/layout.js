import React from 'react'
import Header from './header'
import Menu from './menu'
import Link from 'next/link'
import Head from 'next/head'

import '../styles/reset.scss'
import '../styles/global.scss'

const Layout = (props) => (
    <>
        <Head>
            <title>Home 123</title>
            <link rel='icon' href='/favicon.ico' />
            <style jsx global>{`
                 @keyframes scrollDown {
                    0%{
                        opacity: 0;
                        transform: rotate(45deg) translate(-20px,-20px);
                    }
                    50%{
                        opacity: 1;
                    }
                    100%{
                        opacity: 0;
                        transform: rotate(45deg) translate(20px,20px);
                    }
                }
            `}</style>
        </Head>
        <Header />
        { props.children}
    </>
)

export default Layout
