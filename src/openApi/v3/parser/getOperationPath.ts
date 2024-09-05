import { getOperationParameterName } from './getOperationParameterName';

/**
 * We return the correct parameter names to replace in the URL.
 * @param path
 */
export function getOperationPath(path: string): string {
    return path.replace(/\{(.*?)\}/g, (_, w: string) => {
        return `\${${getOperationParameterName(w)}}`;
    });
}
