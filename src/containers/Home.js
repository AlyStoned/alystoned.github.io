import React, { Fragment } from "react";
import { useRouteData } from "react-static";

import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutBlock from "../components/blocks/About";
import ProcessBlock from "../components/blocks/Process";
import CasesBlock from "../components/blocks/Cases";
// import ContactBlock from "../components/blocks/Contact";
import { colors } from "../constants/styles";


export default () => {
    const {
        page,
        about_block,
        process_block,
        cases_block,
        advantages,
        specialties,
        steps,
        cases
    } = useRouteData();

    return (
        <Fragment>
            <Header />

            <main id="app-main">
                <section id="hero-section">
                    <div className="container">
                        <div className="inner-padding">
                            <div className="hero-inner glitch-area">
                                <h1 className="hero-title glitch glitch-black"
                                    data-text={page.title}>
                                    {page.title}<span data-text={page.title_emphasis}
                                    className="hero-title-emphasis glitch glitch-blue">{page.title_emphasis}</span>
                                </h1>
                                <div className="hero-subheader">
                                    {page.subheader}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hero-next-wrapper">
                        <a className="hero-next-link" href="#about-section">
                            <svg viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 2L12 12L22 2"
                                      stroke={colors.blue}
                                      strokeWidth="3"
                                      strokeLinecap="round"
                                      strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </section>

                <AboutBlock block={about_block} advantages={advantages} specialties={specialties} />
                <ProcessBlock block={process_block} steps={steps} />
                <CasesBlock block={cases_block}
                            cases={cases.filter(caseObj => caseObj.show_in_review_block).slice(0, 3)} />
                {/*<ContactBlock />*/}
            </main>

            <Footer />
        </Fragment>
    )
}
