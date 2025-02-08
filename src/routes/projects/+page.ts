import type { PageLoad } from './$types';
import { getProjects } from '$lib/db';
import projectJson from '$lib/projects.json'

export const load: PageLoad = async () => {
    // const projects = getProjects();
    const { projects } = projectJson;
    return { awaitObject: { projects } }
};