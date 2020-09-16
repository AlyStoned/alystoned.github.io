import React from "react";
import Safe from "react-safe";


export default (props) => {
    const {Html, Head, Body, children, state: { siteData } } = props;
    return (
        <Html lang="en-US" className="no-fonts">
        <Head>
            <title>{siteData.title}</title>
            <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
            <meta name="referrer" content="unsafe-url" />
            <meta name="format-detection" content="telephone=no" />
            <meta name="msapplication-tap-highlight" content="no" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <Safe.script>
                {`
                document.documentElement.className = document.documentElement.className.replace(/\\bno-js\\b/, 'js');
                // Загрузка шрифтов (оптимизация при повторном заходе) см. https://github.com/bramstein/fontfaceobserver
                if (sessionStorage.fontsLoaded) {
                    document.documentElement.className = document.documentElement.className.replace(/\\bno-fonts\\b/, 'fonts-loaded');
                }
                if (!(matchMedia('(hover: none)').matches)) {
                  document.documentElement.classList.add('can-hover');
                }
                `}
            </Safe.script>
        </Head>
        <Body>{children}</Body>
        </Html>
    )
}
