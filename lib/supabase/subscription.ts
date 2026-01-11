import { createClient } from '@/lib/supabase/server'

export async function checkSubscription(userId: string): Promise<boolean> {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('subscriptions')
    .select('*')
    .eq('user_id', userId)
    .eq('status', 'active')
    .single()

  if (error || !data) {
    return false
  }

  return true
}

export async function getUserSubscription(userId: string) {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('subscriptions')
    .select('*')
    .eq('user_id', userId)
    .single()

  return { data, error }
}
