import {createClient} from '@supabase/supabase-js'
import dotenv from 'dotenv';

dotenv.config();

const SupaBase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

export default SupaBase