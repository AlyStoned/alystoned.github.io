import React from "react";
import { useRouteData } from "react-static";

import BackLink from "../components/BackLink";
import CaseReview from "../components/CaseReview";
import CaseTile from "../components/CaseTile";


export default function Cases() {
    const { page, cases } = useRouteData();
    return (
        <main id="app-main">
            <div id="case-reviews">
                <div className="container">
                    <div className="text-container inner-padding">
                        <h1 className="section-label">Our cases</h1>
                        <p className="plain-text">We create cool smartphone apps. See what we have coded here:</p>
                    </div>

                    <ul className="case-reviews-list">
                        {cases.map(caseData => {
                            return (
                                <CaseReview {...caseData} key={caseData.title} />
                            )
                        })}
                    </ul>
                </div>
            </div>

            <div id="case-tiles">
                <div className="container">
                    <ul className="case-tiles-list">
                        {cases.map(caseData => {
                            return (
                                <CaseTile {...caseData} key={caseData.title} />
                            )
                        })}
                    </ul>
                </div>
            </div>

            <BackLink />
        </main>
    )
}
