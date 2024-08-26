import firebase_admin
from firebase_admin import credentials, storage

# Ruta al archivo JSON de credenciales
cred = credentials.Certificate("inputscr-db-firebase-adminsdk-jpja4-a043fea83b.json")

# Inicializar la aplicación de Firebase con las credenciales y el bucket de Storage
firebase_admin.initialize_app(
    cred,
    {
        "storageBucket": "inputscr-db.appspot.com"  # Reemplaza con el nombre de tu bucket
    },
)

# Ahora puedes obtener el bucket de Storage
bucket = storage.bucket()
