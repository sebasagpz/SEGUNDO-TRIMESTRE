class Usuario:
    def __init__(self, nombre, correo):
        self.nombre = nombre
        self.correo = correo
        self.playlists = []

    def crear_playlist(self, nombre):
        playlist = Playlist(nombre, self)
        self.playlists.append(playlist)
        return playlist


class Playlist:
    def __init__(self, nombre, propietario):
        self.nombre = nombre
        self.propietario = propietario
        self.canciones = []

    def agregar_cancion(self, cancion):
        self.canciones.append(cancion)

    def mostrar_canciones(self):
        for c in self.canciones:
            print(f"- {c.titulo} de {c.artista}")


class Cancion:
    def __init__(self, titulo, artista, duracion):
        self.titulo = titulo
        self.artista = artista
        self.duracion = duracion

    def reproducir(self):
        print(f"▶ Reproduciendo: {self.titulo} - {self.artista}")


# Clase para demostrar polimorfismo (hereda de Cancion)
class Podcast(Cancion):
    def __init__(self, titulo, artista, duracion, episodio):
        super().__init__(titulo, artista, duracion)
        self.episodio = episodio

    def reproducir(self):
        print(f"🎙 Reproduciendo Podcast: {self.titulo} (Episodio {self.episodio})")
