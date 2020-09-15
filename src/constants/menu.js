import routes from "./routes";


export default [
    {
        title: "About",
        url: `${routes.home}#about-section`,
        classes: ""
    },
    {
        title: "Works",
        url: routes.cases.all,
        classes: ""
    },
    // {
    //     title: "Contact us",
    //     url: `${routes.home}#contact-section`,
    //     classes: "contact"
    // }
];
