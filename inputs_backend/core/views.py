from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import firebase_admin
from firebase_admin import firestore, storage
from django.core.files.storage import default_storage
import json
import os


db = firestore.client()
bucket = storage.bucket()


def get_terapeuta(request):
    try:
        # Obtiene la colección 'terapeutas'
        terapeutas_ref = db.collection("terapeutas")
        docs = terapeutas_ref.stream()

        # Convierte los documentos en una lista de diccionarios
        terapeutas = [doc.to_dict() for doc in docs]

        # Ordena la lista de terapeutas por el campo 'index' en orden ascendente
        terapeutas_sorted = sorted(terapeutas, key=lambda t: t.get("index", 0))

        # Retorna la lista ordenada como una respuesta JSON
        return JsonResponse(terapeutas_sorted, safe=False)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)


def get_services(request):
    try:
        # Obtiene la colección 'servicios'
        servicios_ref = db.collection("servicios")
        docs = servicios_ref.stream()

        # Convierte los documentos en una lista de diccionarios
        servicios = [doc.to_dict() for doc in docs]

        # Ordena la lista de terapeutas por el campo 'index' en orden ascendente
        servicios_sorted = sorted(servicios, key=lambda t: t.get("index", 0))

        # Retorna la lista ordenada como una respuesta JSON
        return JsonResponse(servicios_sorted, safe=False)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)


def get_services_without_body(request):
    try:
        # Obtiene la colección 'servicios'
        servicios_ref = db.collection("servicios")
        docs = servicios_ref.stream()

        # Convierte los documentos en una lista de diccionarios y excluye el campo 'body'
        servicios = [
            {key: value for key, value in doc.to_dict().items() if key != "body"}
            for doc in docs
        ]

        # Ordena la lista de servicios por el campo 'index' en orden ascendente
        servicios_sorted = sorted(servicios, key=lambda t: t.get("index", 0))

        # Retorna la lista ordenada como una respuesta JSON
        return JsonResponse(servicios_sorted, safe=False)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)
