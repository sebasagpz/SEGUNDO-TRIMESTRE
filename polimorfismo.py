# Crear un usuario y playlist
usuario = Usuario("Sebas", "sebas@gmail.com")
playlist = usuario.crear_playlist("Favoritas")

# Crear objetos de diferentes clases
c1 = Cancion("Shape of You", "Ed Sheeran", 4.20)
c2 = Podcast("Aprendiendo Python", "DevTalks", 30, 12)

# Agregar a la playlist
playlist.agregar_cancion(c1)
playlist.agregar_cancion(c2)

# Polimorfismo: se llama al mismo método "reproducir"
for c in playlist.canciones:
    c.reproducir()
