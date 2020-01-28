import env from '../env';

/**
 * Get list of jobs from server
 */
export const list = async () => {
    try {
        const resp = await fetch(`${env.urlApi}/job`);
        const json = resp.json();
        //Timer to see loading
        await new Promise(resolve => setTimeout(resolve, 500));
        return json;

    } catch (error) {
        throw error;
    }
}