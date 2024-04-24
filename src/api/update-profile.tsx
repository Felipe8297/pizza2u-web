import { api } from '@/lib/axios'

interface UpdateProfileResponse {
  name: string
  description: string | null
}

export async function updateProfile({
  name,
  description,
}: UpdateProfileResponse) {
  await api.put('/profile', { name, description })
}
