import java.util.ArrayList;

// Clase Usuario: representa a la persona que usa la aplicación
class Usuario {
    private String nombre;                 // nombre del usuario
    private String correo;                 // correo del usuario
    private ArrayList<Playlist> playlists; // lista de playlists creadas por el usuario

    // Constructor: inicializa el nombre, correo y la lista de playlists
    public Usuario(String nombre, String correo) {
        this.nombre = nombre;
        this.correo = correo;
        this.playlists = new ArrayList<>();
    }

    // Método para crear una nueva playlist
    public Playlist crearPlaylist(String nombre) {
        Playlist playlist = new Playlist(nombre, this);
        playlists.add(playlist);
        return playlist;
    }

    public String getNombre() {
        return nombre;
    }
}

// Clase Playlist: contiene canciones o podcasts
class Playlist {
    private String nombre;                 // nombre de la playlist
    private Usuario propietario;           // el usuario dueño de la playlist
    private ArrayList<Cancion> canciones;  // lista de canciones de la playlist

    // Constructor
    public Playlist(String nombre, Usuario propietario) {
        this.nombre = nombre;
        this.propietario = propietario;
        this.canciones = new ArrayList<>();
    }

    // Método para agregar una canción a la playlist
    public void agregarCancion(Cancion c) {
        canciones.add(c);
    }

    // Método para mostrar las canciones de la playlist
    public void mostrarCanciones() {
        for (Cancion c : canciones) {
            System.out.println("- " + c.getTitulo() + " de " + c.getArtista());
        }
    }

    // Retorna la lista de canciones
    public ArrayList<Cancion> getCanciones() {
        return canciones;
    }
}

// Clase Cancion: representa una canción normal
class Cancion {
    protected String titulo;   // título de la canción
    protected String artista;  // artista de la canción
    protected double duracion; // duración de la canción en minutos

    // Constructor
    public Cancion(String titulo, String artista, double duracion) {
        this.titulo = titulo;
        this.artista = artista;
        this.duracion = duracion;
    }

    // Método para reproducir la canción
    public void reproducir() {
        System.out.println("▶ Reproduciendo: " + titulo + " - " + artista);
    }

    // Métodos para obtener los valores
    public String getTitulo() {
        return titulo;
    }

    public String getArtista() {
        return artista;
    }
}

// Clase Podcast: hereda de Cancion, pero se comporta diferente
class Podcast extends Cancion {
    private int episodio; // número del episodio del podcast

    // Constructor: usa super() para llamar al constructor de Cancion
    public Podcast(String titulo, String artista, double duracion, int episodio) {
        super(titulo, artista, duracion);
        this.episodio = episodio;
    }

    // Sobrescribe el método reproducir() → polimorfismo
    @Override
    public void reproducir() {
        System.out.println("🎙 Reproduciendo Podcast: " + titulo + " (Episodio " + episodio + ")");
    }
}

// Clase Main: punto de entrada del programa
public class Main {
    public static void main(String[] args) {
        // Crear usuario y playlist
        Usuario usuario = new Usuario("Sebas", "sebas@gmail.com");
        Playlist playlist = usuario.crearPlaylist("Favoritas");

        // Crear objetos de Cancion y Podcast
        Cancion c1 = new Cancion("Flowers", "Alejandro", 3.5);
        Cancion c2 = new Podcast("Aprendiendo Java", "DevTalks", 30, 5);

        // Agregar canciones a la playlist
        playlist.agregarCancion(c1);
        playlist.agregarCancion(c2);

        // Mostrar canciones en la playlist
        playlist.mostrarCanciones();

        // Demostración de polimorfismo: se usa el mismo método "reproducir"
        for (Cancion c : playlist.getCanciones()) {
            c.reproducir();
        }
    }
  }
