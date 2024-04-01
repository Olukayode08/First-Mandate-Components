export const stripLeadingSlash = (path) => {
    return path.indexOf('/') === 0 ? path.slice(1) : path;
}