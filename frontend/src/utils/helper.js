import { subdomainList } from "./constant";

// eval which router config needs to be loaded from subdomainList
export const getApps = () => {
    const subdomain = getSubdomain(window.location.hostname);

    const mainApp = subdomainList.find((app) => app.main);
    if (subdomain === "") return mainApp.app;

    const apps = subdomainList.find((app) => subdomain === app.subdomain);

    return apps? apps.app : mainApp.app;
}

// http://url.localhost:5173/
// http://url.webdomain.com/
// need to determine subdomain and if slicing localhost (for production) or deployed app
export const getSubdomain = (location) => {
    const locationParts = location.split(".");
    const isLocalhost = locationParts.slice(-1)[0] === "localhost";
    const sliceTill = isLocalhost ? -1 : -2;
    return locationParts.slice(0,sliceTill).join("");
}