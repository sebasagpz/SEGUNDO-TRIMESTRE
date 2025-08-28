# ============================================
# App de Música - Versión Sencilla (según diagrama)
# Clases: Usuario, Cancion, Playlist, Artista, Podcast
# ============================================

print("SENA MUSIC")

class Usuario:
    # Atributos: nombreUsuario, correo, contraseña
    def __init__(self, nombreUsuario, correo, contraseña):
        self.nombreUsuario = nombreUsuario
        self.correo = correo
        self.contraseña = contraseña
        self.playlists = []  # un usuario puede tener varias playlists

    # Métodos: registrarse(), iniciarSesion(), crearPlaylist()
    def registrarse(self):
        print(f"[Usuario] {self.nombreUsuario} se registró con el correo {self.correo}.")

    def iniciarSesion(self):
        print(f"[Usuario] {self.nombreUsuario} inició sesión.")

    def crearPlaylist(self, nombre):
        nueva = Playlist(nombre)
        self.playlists.append(nueva)
        print(f"[Usuario] {self.nombreUsuario} creó la playlist '{nombre}'.")
        return nueva


class Cancion:
    # Atributos: titulo, duracion, genero
    def __init__(self, titulo, artista, duracion):
        self.titulo = titulo
        self.artista = artista
        self.duracion = duracion

    # Métodos: reproducir(), pausar(), mostrarInfo()
    def reproducir(self):
        print(f"▶ Reproduciendo: {self.titulo} - {self.artista}")

    def pausar(self):
        print(f"⏸ Pausada: {self.titulo}")

    def mostrarInfo(self):
        print(f"[Canción] Título: {self.titulo} | Artista: {self.artista} | Duración: {self.duracion}")


class Playlist:
    # Atributos: nombre, listaCanciones
    def __init__(self, nombre):
        self.nombre = nombre
        self.listaCanciones = []

    # Métodos
    def agregarCancion(self, cancion):
        self.listaCanciones.append(cancion)
        print(f"[Playlist '{self.nombre}'] Agregada: {cancion.titulo}")

    def eliminarCancion(self, cancion):
        if cancion in self.listaCanciones:
            self.listaCanciones.remove(cancion)
            print(f"[Playlist '{self.nombre}'] Eliminada: {cancion.titulo}")
        else:
            print(f"[Playlist '{self.nombre}'] La canción no está en la lista: {cancion.titulo}")

    def reproducirPlaylist(self):
        print(f"[Playlist] Reproduciendo '{self.nombre}' ({len(self.listaCanciones)} canciones)")
        for c in self.listaCanciones:
            c.reproducir()
        print(f"[Playlist] Fin de la playlist '{self.nombre}'.")


class Artista:
    # Atributos: nombre, generoMusical
    def __init__(self, nombre, generoMusical):
        self.nombre = nombre
        self.generoMusical = generoMusical

    # Métodos
    def publicarCancion(self, titulo, duracion, genero):
        print(f"[Artista] {self.nombre} publicó la canción '{titulo}'.")
        return Cancion(titulo, self.nombre, duracion)

    def mostrarPerfil(self):
        print(f"[Perfil Artista] {self.nombre} | Género musical: {self.generoMusical}")


class Podcast(Cancion):
    # Hereda de Cancion -> ejemplo de polimorfismo
    def __init__(self, titulo, artista, duracion, episodio):
        super().__init__(titulo, artista, duracion)
        self.episodio = episodio

    def reproducir(self):
        print(f"🎙 Reproduciendo Podcast: {self.titulo} (Episodio {self.episodio})")


# ============================================
# DEMOSTRACIÓN (con tus valores)
# ============================================

if __name__ == "__main__":
    # 1) Crear usuario, registrarse e iniciar sesión
    usuario1 = Usuario("Sebas", "sebas@email.com", "1234")
    usuario1.registrarse()
    usuario1.iniciarSesion()

    # 2) El usuario crea una playlist
    playlist1 = usuario1.crearPlaylist("Favs")

    # 3) Crear canciones
    c1 = Cancion("Flowers", "Alejandro", 4.30)
    c2 = Cancion("Open Hearts", "The Weeknd", 3.50)

    # 4) Crear un podcast (herencia/polimorfismo)
    p1 = Podcast("Podcast Sena Sofia", "Salado's Group", 60, episodio=12)

    # 5) Agregar canciones y podcast a la playlist
    playlist1.agregarCancion(c1)
    playlist1.agregarCancion(c2)
    playlist1.agregarCancion(p1)

    # 6) Mostrar info de una canción y reproducir/pausar
    c1.mostrarInfo()
    c1.reproducir()
    c1.pausar()

    # 7) Reproducir toda la playlist
    playlist1.reproducirPlaylist()

    # 8) Eliminar una canción y volver a reproducir
    playlist1.eliminarCancion(c1)
    playlist1.reproducirPlaylist()

