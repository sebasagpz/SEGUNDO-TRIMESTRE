# ============================================
# App de Música - Versión Sencilla
# ============================================

print("SENA MUSIC")


class Usuario:
    # Clase que representa a un usuario de la aplicación
    def __init__(self, nombre, correo):
        # Atributos del usuario
        self.nombre = nombre
        self.correo = correo
        self.playlists = []  # un usuario puede tener varias playlists

    def crear_playlist(self, nombre):
        # Crea una playlist y la asocia al usuario
        playlist = Playlist(nombre, self)
        self.playlists.append(playlist)
        return playlist


class Playlist:
    # Clase que representa una playlist de un usuario
    def __init__(self, nombre, propietario):
        # Atributos de la playlist
        self.nombre = nombre
        self.propietario = propietario  # referencia al usuario
        self.canciones = []  # lista de canciones dentro de la playlist

    def agregar_cancion(self, cancion):
        # Agrega una canción a la clase playlist
        self.canciones.append(cancion)

    def mostrar_canciones(self):
        # MOSTRAR TODAS LAS CANCIONES Q HAY EN LA PLAYLIST
        print(f"Playlist: {self.nombre} (Propietario: {self.propietario.nombre})")
        for c in self.canciones:
            print(f"- {c.titulo} de {c.artista}")


class Cancion:
    # Clase que representa una canción
    def __init__(self, titulo, artista, duracion):
        # Atributos de la canción
        self.titulo = titulo
        self.artista = artista
        self.duracion = duracion

    def reproducir(self):
        # REPRESENTACION DE LA CANCION
        print(f"▶ Reproduciendo: {self.titulo} - {self.artista}")


class Podcast(Cancion):
    # Clase que representa un Podcast, hereda de Cancion (POLIFORMISMO)
    def __init__(self, titulo, artista, duracion, episodio):
        # Se reutilizan los atributos de Cancion y se agrega "episodio"
        super().__init__(titulo, artista, duracion)
        self.episodio = episodio

    def reproducir(self):
        # Sobrescribe el método reproducir() para mostrar que es un Podcast
        print(f"🎙 Reproduciendo Podcast: {self.titulo} (Episodio {self.episodio})")


# ============================================
# DEMOSTRACIÓN (asignación de valores y pruebas)
# ============================================

# 1) Crear un usuario
usuario1 = Usuario("Sebas", "sebas@email.com")

# 2) El usuario crea una playlist
playlist1 = usuario1.crear_playlist("Favs")

# 3) Crear canciones
c1 = Cancion("Flowers", "Alejandro", 4.30)
c2 = Cancion("Open Hearts", "The Weeknd", 3.50)

# 4) Crear un podcast (ejemplo de herencia/polimorfismo)
p1 = Podcast("Podcast Sena Sofia", "Salado's Group", 60, episodio=12)

# 5) Agregar canciones y podcast a la playlist
playlist1.agregar_cancion(c1)
playlist1.agregar_cancion(c2)
playlist1.agregar_cancion(p1)

# 6) Mostrar canciones en la playlist
playlist1.mostrar_canciones()

# 7) Reproducir cada elemento (aquí se ve el polimorfismo con Podcast)
c1.reproducir()
c2.reproducir()
p1.reproducir()

