import env from '../env';

/**
 * Get list of jobs from server
 */
export const list = async () => {
    try {
        const resp = await fetch(`${env.urlApi}/job`);
        const json = resp.json();

        return json;

    } catch (error) {
        return error;
    }
}