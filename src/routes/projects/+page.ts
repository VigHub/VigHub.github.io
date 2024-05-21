import type { PageLoad } from './$types';
import { getProjects } from '$lib/db';

export const load: PageLoad = async () => {
    const projects = await getProjects();
    return { projects }
};