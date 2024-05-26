import type { PageLoad } from './$types';
import { getProjects } from '$lib/db';

export const load: PageLoad = async () => {
    const projects = getProjects();
    return { awaitObject: { projects } }
};