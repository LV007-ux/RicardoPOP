"""
Seed data script to populate the database with initial data
"""

from database import database
import asyncio
import logging
import os
from pathlib import Path
from dotenv import load_dotenv

# Load environment variables
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

logger = logging.getLogger(__name__)

async def seed_database():
    """Seed the database with initial data"""
    try:
        await database.connect()
        
        # Artist Info
        artist_info = {
            "_id": "artist-info-1",
            "name": "RICARDO POP",
            "tagline": "Que mistura é essa!",
            "years_active": "15",
            "description": "Cantor, compositor e violonista com mais de 15 anos de estrada na música. Ao longo dessa jornada, abracei um estilo musical eclético, com fortes influências do pop rock, MPB e forronejo, criando uma identidade única e autêntica.",
            "created_at": "2025-01-01T00:00:00",
            "updated_at": "2025-01-01T00:00:00"
        }
        await database.insert_one("artist_info", artist_info)
        
        # Biography
        biography = {
            "_id": "biography-1",
            "title": "BIOGRAFIA",
            "content": "Cantor, compositor e violonista com mais de 15 anos de estrada na música. Ao longo dessa jornada, abracei um estilo musical eclético, com fortes influências do pop rock, MPB e forronejo, criando uma identidade única e autêntica.",
            "image": "https://customer-assets.emergentagent.com/job_83361586-94c2-4a5b-965e-7f1f86246a58/artifacts/dly9brgk_WhatsApp%20Image%202025-07-30%20at%2008.48.46.jpeg",
            "created_at": "2025-01-01T00:00:00",
            "updated_at": "2025-01-01T00:00:00"
        }
        await database.insert_one("biography", biography)
        
        # Trajectory
        trajectory = {
            "_id": "trajectory-1",
            "title": "TRAJETÓRIA",
            "content": "Minha trajetória começou em parcerias marcantes, como o projeto autoral Júlio Cesar & Ricardo, que resultou no lançamento de um álbum com composições próprias. Há cerca de 10 anos sigo em carreira solo com o projeto Ricardo Pop – Que Mistura é Essa, onde exploro a fusão de ritmos e estilos que definem minha musicalidade. Participei de diversos eventos culturais promovidos pela Prefeitura de Maricá, entre eles: Sob o Céu Sob o Sol, Espraiado de Portas Abertas, Pedacinho do Céu, Festival Rua & Sabor e Maricá Musical – experiências que fortaleceram meu vínculo com o público e a cultura local.",
            "created_at": "2025-01-01T00:00:00",
            "updated_at": "2025-01-01T00:00:00"
        }
        await database.insert_one("trajectory", trajectory)
        
        # Albums
        albums = [
            {
                "_id": "album-1",
                "title": "Que Mistura é Essa",
                "year": "2024",
                "type": "Álbum",
                "cover": "https://customer-assets.emergentagent.com/job_83361586-94c2-4a5b-965e-7f1f86246a58/artifacts/qkemigoh_ChatGPT%20Image%208%20de%20jul.%20de%202025%2C%2011_00_18.png",
                "tracks": ["Mistura de Ritmos", "Pop Rock Brasileiro", "Forronejo da Alma", "MPB Moderna", "Guitarra & Violão"],
                "order": 1,
                "created_at": "2024-01-01T00:00:00",
                "updated_at": "2024-01-01T00:00:00"
            },
            {
                "_id": "album-2",
                "title": "Júlio Cesar & Ricardo",
                "year": "2015",
                "type": "Álbum Colaborativo",
                "cover": "/api/placeholder/300/300",
                "tracks": ["Parceria Musical", "Composições Próprias", "Início da Jornada", "Primeiro Álbum"],
                "order": 2,
                "created_at": "2015-01-01T00:00:00",
                "updated_at": "2015-01-01T00:00:00"
            }
        ]
        await database.insert_many("albums", albums)
        
        # Shows
        shows = [
            {
                "_id": "show-1",
                "date": "2025-08-15",
                "venue": "Festival Rua & Sabor",
                "location": "Maricá, RJ",
                "time": "20:00",
                "status": "confirmed",
                "created_at": "2025-01-01T00:00:00",
                "updated_at": "2025-01-01T00:00:00"
            },
            {
                "_id": "show-2",
                "date": "2025-08-28",
                "venue": "Sob o Céu Sob o Sol",
                "location": "Maricá, RJ",
                "time": "19:30",
                "status": "confirmed",
                "created_at": "2025-01-01T00:00:00",
                "updated_at": "2025-01-01T00:00:00"
            },
            {
                "_id": "show-3",
                "date": "2025-09-10",
                "venue": "Espraiado de Portas Abertas",
                "location": "Maricá, RJ",
                "time": "18:00",
                "status": "confirmed",
                "created_at": "2025-01-01T00:00:00",
                "updated_at": "2025-01-01T00:00:00"
            },
            {
                "_id": "show-4",
                "date": "2025-09-25",
                "venue": "Pedacinho do Céu",
                "location": "Maricá, RJ",
                "time": "20:30",
                "status": "confirmed",
                "created_at": "2025-01-01T00:00:00",
                "updated_at": "2025-01-01T00:00:00"
            }
        ]
        await database.insert_many("shows", shows)
        
        # Gallery
        gallery = [
            {
                "_id": "gallery-1",
                "url": "https://customer-assets.emergentagent.com/job_83361586-94c2-4a5b-965e-7f1f86246a58/artifacts/dly9brgk_WhatsApp%20Image%202025-07-30%20at%2008.48.46.jpeg",
                "caption": "Ricardo POP em performance",
                "order": 1,
                "created_at": "2025-01-01T00:00:00",
                "updated_at": "2025-01-01T00:00:00"
            },
            {
                "_id": "gallery-2", 
                "url": "https://customer-assets.emergentagent.com/job_83361586-94c2-4a5b-965e-7f1f86246a58/artifacts/qkemigoh_ChatGPT%20Image%208%20de%20jul.%20de%202025%2C%2011_00_18.png",
                "caption": "Arte conceitual do projeto",
                "order": 2,
                "created_at": "2025-01-01T00:00:00",
                "updated_at": "2025-01-01T00:00:00"
            },
            {
                "_id": "gallery-3",
                "url": "https://customer-assets.emergentagent.com/job_83361586-94c2-4a5b-965e-7f1f86246a58/artifacts/fdixcoqi_ChatGPT%20Image%208%20de%20jul.%20de%202025%2C%2010_44_34.png",
                "caption": "Ricardo POP e banda",
                "order": 3,
                "created_at": "2025-01-01T00:00:00",
                "updated_at": "2025-01-01T00:00:00"
            },
            {
                "_id": "gallery-4",
                "url": "https://customer-assets.emergentagent.com/job_83361586-94c2-4a5b-965e-7f1f86246a58/artifacts/h9r7ej00_WhatsApp%20Image%202025-07-30%20at%2008.48.51.jpeg",
                "caption": "Show ao vivo em Maricá",
                "order": 4,
                "created_at": "2025-01-01T00:00:00",
                "updated_at": "2025-01-01T00:00:00"
            },
            {
                "_id": "gallery-5",
                "url": "https://customer-assets.emergentagent.com/job_83361586-94c2-4a5b-965e-7f1f86246a58/artifacts/iuwcqcj8_WhatsApp%20Image%202025-07-30%20at%2008.49.13.jpeg",
                "caption": "Estúdio de gravação",
                "order": 5,
                "created_at": "2025-01-01T00:00:00",
                "updated_at": "2025-01-01T00:00:00"
            }
        ]
        await database.insert_many("gallery", gallery)
        
        # Site Settings
        site_settings = [
            {
                "_id": "contact-info-setting",
                "key": "contact_info",
                "data": {
                    "email": "contato@ricardopop.com.br",
                    "phone": "+55 (21) 99999-9999",
                    "manager": "Assessoria Musical",
                    "city": "Maricá, RJ"
                },
                "created_at": "2025-01-01T00:00:00",
                "updated_at": "2025-01-01T00:00:00"
            },
            {
                "_id": "social-links-setting",
                "key": "social_links",
                "data": {
                    "facebook": "https://www.facebook.com/Ricardopopoficial",
                    "instagram": "https://www.instagram.com/ricardopoparaujo",
                    "twitter": "#",
                    "youtube": "#",
                    "spotify": "#"
                },
                "created_at": "2025-01-01T00:00:00",
                "updated_at": "2025-01-01T00:00:00"
            }
        ]
        await database.insert_many("site_settings", site_settings)
        
        logger.info("Database seeded successfully!")
        
    except Exception as e:
        logger.error(f"Error seeding database: {e}")
        raise
    finally:
        await database.close()

if __name__ == "__main__":
    asyncio.run(seed_database())