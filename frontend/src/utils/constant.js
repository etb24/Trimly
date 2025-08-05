import AppRouter, { SubdomainRouter } from "../AppRouter";


// no subdomain = app router else subdoain router
export const subdomainList = [
    {subdomain: "www", app: AppRouter, main: true},
    {subdomain: "url", app: SubdomainRouter, main: false},
];