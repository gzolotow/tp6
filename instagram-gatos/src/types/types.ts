export interface GatoApi {
  id: string
  url: string
}

export interface PublicacionType {
  id: string
  imagen: string
  usuario: string
  avatar: string
  descripcion: string
  likes: number
  comentarios: string[]
  fecha: string
}

export interface UsuarioPerfil {
  nombre: string
  avatar: string
  bio: string
  publicaciones: number
  seguidores: number
  seguidos: number
}