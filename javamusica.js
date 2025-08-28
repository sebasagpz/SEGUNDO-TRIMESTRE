// ============================================
// App de Música - Versión Sencilla (Java)
// Clases: Usuario, Cancion, Playlist, Artista, Podcast
// ============================================

import java.util.ArrayList;
import java.util.List;

public class AppMusica {
    public static void main(String[] args) {
        System.out.println("SENA MUSIC");

        // 1) Crear usuario, registrarse e iniciar sesión
        Usuario usuario1 = new Usuario("Sebas", "sebas@email.com", "1234");
        usuario1.registrarse();
        usuario1.iniciarSesion();

        // 2) El usuario crea una playlist
        Playlist playlist1 = usuario1.crearPlaylist("Favs");

        // 3) Crear canciones (igual que en tu Python)
        Cancion c1 = new Cancion("Flowers", "Alejandro", 4.30);
        Cancion c2 = new Cancion("Open Hearts", "The Weeknd", 3.50);

        // 4) Crear un podcast (herencia/polimorfismo)
        Podcast p1 = new Podcast("Podcast Sena Sofia", "Salado's Group", 60.0, 12);

        // 5) Agregar canciones y podcast a la playlist
        playlist1.agregarCancion(c1);
        playlist1.agregarCancion(c2);
        playlist1.agregarCancion(p1);

        // 6) Mostrar info de una canción y reproducir/pausar
        c1.mostrarInfo();
        c1.reproducir();
        c1.pausar();

        // 7) Reproducir toda la playlist
        playlist1.reproducirPlaylist();

        // 8) Eliminar una canción y volver a reproducir
        playlist1.eliminarCancion(c1);
        playlist1.reproducirPlaylist();
    }
}

// ============================================
// Clase Usuario
// ============================================
class Usuario {
    // Atributos: nombreUsuario, correo, contraseña
    private String nombreUsuario;
    private String correo;
    private String contraseña;
    private List<Playlist> playlists; // un usuario puede tener varias playlists

    public Usuario(String nombreUsuario, String correo, String contraseña) {
        this.nombreUsuario = nombreUsuario;
        this.correo = correo;
        this.contraseña = contraseña;
        this.playlists = new ArrayList<>();
    }

    // Métodos: registrarse(), iniciarSesion(), crearPlaylist()
    public void registrarse() {
        System.out.println("[Usuario] " + nombreUsuario + " se registró con el correo " + correo + ".");
    }

    public void iniciarSesion() {
        System.out.println("[Usuario] " + nombreUsuario + " inició sesión.");
    }

    public Playlist crearPlaylist(String nombre) {
        Playlist nueva = new Playlist(nombre);
        this.playlists.add(nueva);
        System.out.println("[Usuario] " + nombreUsuario + " creó la playlist '" + nombre + "'.");
        return nueva;
    }

    // Getter opcional si lo necesitas
    public String getNombreUsuario() { return nombreUsuario; }
}

// ============================================
// Clase Cancion
// ============================================
class Cancion {
    // Atributos: titulo, artista, duracion
    private String titulo;
    private String artista;
    private double duracion;

    public Cancion(String titulo, String artista, double duracion) {
        this.titulo = titulo;
        this.artista = artista;
        this.duracion = duracion;
    }

    // Métodos: reproducir(), pausar(), mostrarInfo()
    public void reproducir() {
        System.out.println("▶ Reproduciendo: " + titulo + " - " + artista);
    }

    public void pausar() {
        System.out.println("⏸ Pausada: " + titulo);
    }

    public void mostrarInfo() {
        System.out.println("[Canción] Título: " + titulo + " | Artista: " + artista + " | Duración: " + duracion);
    }

    // Getters usados por Playlist para imprimir
    public String getTitulo() { return titulo; }
    public String getArtista() { return artista; }
    public double getDuracion() { return duracion; }
}

// ============================================
// Clase Playlist
// ============================================
class Playlist {
    // Atributos: nombre, listaCanciones
    private String nombre;
    private List<Cancion> listaCanciones;

    public Playlist(String nombre) {
        this.nombre = nombre;
        this.listaCanciones = new ArrayList<>();
    }

    // Métodos: agregarCancion(), eliminarCancion(), reproducirPlaylist()
    public void agregarCancion(Cancion cancion) {
        this.listaCanciones.add(cancion);
        System.out.println("[Playlist '" + nombre + "'] Agregada: " + cancion.getTitulo());
    }

    public void eliminarCancion(Cancion cancion) {
        if (this.listaCanciones.remove(cancion)) {
            System.out.println("[Playlist '" + nombre + "'] Eliminada: " + cancion.getTitulo());
        } else {
            System.out.println("[Playlist '" + nombre + "'] La canción no está en la lista: " + cancion.getTitulo());
        }
    }

    public void reproducirPlaylist() {
        System.out.println("[Playlist] Reproduciendo '" + nombre + "' (" + this.listaCanciones.size() + " canciones)");
        for (Cancion c : this.listaCanciones) {
            c.reproducir();
        }
        System.out.println("[Playlist] Fin de la playlist '" + nombre + "'.");
    }
}

// ============================================
// Clase Artista
// ============================================
class Artista {
    // Atributos: nombre, generoMusical
    private String nombre;
    private String generoMusical;

    public Artista(String nombre, String generoMusical) {
        this.nombre = nombre;
        this.generoMusical = generoMusical;
    }

    // Métodos: publicarCancion(), mostrarPerfil()
    public Cancion publicarCancion(String titulo, double duracion, String genero) {
        System.out.println("[Artista] " + nombre + " publicó la canción '" + titulo + "'.");
        // Creamos una Cancion con el nombre del artista (igual que hiciste en Python)
        return new Cancion(titulo, this.nombre, duracion);
    }

    public void mostrarPerfil() {
        System.out.println("[Perfil Artista] " + nombre + " | Género musical: " + generoMusical);
    }
}

// ============================================
// Clase Podcast (hereda de Cancion) -> Polimorfismo
// ============================================
class Podcast extends Cancion {
    private int episodio;

    public Podcast(String titulo, String artista, double duracion, int episodio) {
        super(titulo, artista, duracion);
        this.episodio = episodio;
    }

    @Override
    public void reproducir() {
        System.out.println("🎙 Reproduciendo Podcast: " + getTitulo() + " (Episodio " + episodio + ")");
    }

    // Para usar getTitulo() necesitamos acceso; lo más simple es añadir:
    private String getTitulo() { return super.getTitulo(); }
}

