import { PUBLIC_API_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = PUBLIC_SUPABASE_URL
const supabaseKey = PUBLIC_API_KEY
const supabase = createClient(supabaseUrl, supabaseKey)


export const getProjects = async () => {
    let { data: projects, error } = await supabase
        .from('Project')
        .select('*')
        .order('date', { ascending: false })
    return projects
}