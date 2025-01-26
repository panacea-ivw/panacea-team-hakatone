// src/components/Auth/supabaseConfig.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rubbnjjfqppzfyrhnddn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1YmJuampmcXBwemZ5cmhuZGRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc4NzQ2ODEsImV4cCI6MjA1MzQ1MDY4MX0.TKPM6QJ8U3is2UKan_ygL84e1sbSOai1gSLRV_PcJ5M';
const supabase = createClient(supabaseUrl, supabaseKey);

const auth = supabase.auth;

export { supabase, auth };