import { PUBLIC_API_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public'
import { createClient } from '@supabase/supabase-js'
import type { MessageType, ProjectType } from './interfaces'

const supabaseUrl = PUBLIC_SUPABASE_URL
const supabaseKey = PUBLIC_API_KEY
const supabase = createClient(supabaseUrl, supabaseKey)


export const getProjects = async () => {
    let { data: projects, error } = await supabase
        .from('Project')
        .select('*')
        .order('date', { ascending: false })
    return projects as ProjectType[]
}

export const addMessage = async (message: MessageType) => {
    const { subject, email, content } = message
    let { data, error } = await supabase
        .from('Message')
        .insert([{ subject, email, content }])
        .select()
    return { data, error }
}