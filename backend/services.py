from typing import List, Optional
from database import database
from models import *
import logging
from datetime import datetime

logger = logging.getLogger(__name__)

class ArtistService:
    @staticmethod
    async def get_artist_info() -> Optional[ArtistInfoResponse]:
        try:
            data = await database.find_one("artist_info", {})
            if not data:
                return None
            
            return ArtistInfoResponse(
                name=data["name"],
                tagline=data["tagline"], 
                yearsActive=data["years_active"],
                description=data["description"]
            )
        except Exception as e:
            logger.error(f"Error getting artist info: {e}")
            return None

class BiographyService:
    @staticmethod
    async def get_biography() -> Optional[BiographyResponse]:
        try:
            data = await database.find_one("biography", {})
            if not data:
                return None
                
            return BiographyResponse(
                title=data["title"],
                content=data["content"],
                image=data["image"]
            )
        except Exception as e:
            logger.error(f"Error getting biography: {e}")
            return None

class TrajectoryService:
    @staticmethod
    async def get_trajectory() -> Optional[TrajectoryResponse]:
        try:
            data = await database.find_one("trajectory", {})
            if not data:
                return None
                
            return TrajectoryResponse(
                title=data["title"],
                content=data["content"]
            )
        except Exception as e:
            logger.error(f"Error getting trajectory: {e}")
            return None

class DiscographyService:
    @staticmethod
    async def get_albums() -> List[AlbumResponse]:
        try:
            albums = await database.find_many("albums", sort=[("order", 1), ("year", -1)])
            
            return [
                AlbumResponse(
                    id=str(album["_id"]),
                    title=album["title"],
                    year=album["year"],
                    type=album["type"],
                    cover=album["cover"],
                    tracks=album["tracks"]
                )
                for album in albums
            ]
        except Exception as e:
            logger.error(f"Error getting albums: {e}")
            return []

class ShowsService:
    @staticmethod
    async def get_shows() -> List[ShowResponse]:
        try:
            shows = await database.find_many("shows", sort=[("date", 1)])
            
            return [
                ShowResponse(
                    id=str(show["_id"]),
                    date=show["date"],
                    venue=show["venue"],
                    location=show["location"],
                    time=show["time"],
                    status=show["status"]
                )
                for show in shows
            ]
        except Exception as e:
            logger.error(f"Error getting shows: {e}")
            return []

class GalleryService:
    @staticmethod
    async def get_gallery() -> List[GalleryResponse]:
        try:
            images = await database.find_many("gallery", sort=[("order", 1)])
            
            return [
                GalleryResponse(
                    id=str(img["_id"]),
                    url=img["url"],
                    caption=img["caption"]
                )
                for img in images
            ]
        except Exception as e:
            logger.error(f"Error getting gallery: {e}")
            return []

class ContactService:
    @staticmethod
    async def send_message(contact_request: ContactRequest) -> ContactResponse:
        try:
            contact_message = ContactMessage(
                name=contact_request.name,
                email=contact_request.email,
                subject=contact_request.subject,
                message=contact_request.message,
                status="new"
            )
            
            message_id = await database.insert_one("contact_messages", contact_message.dict(by_alias=True))
            
            if message_id:
                return ContactResponse(
                    success=True,
                    message="Mensagem enviada com sucesso",
                    id=message_id
                )
            else:
                return ContactResponse(
                    success=False,
                    message="Erro ao enviar mensagem",
                    id=""
                )
                
        except Exception as e:
            logger.error(f"Error sending message: {e}")
            return ContactResponse(
                success=False,
                message="Erro interno do servidor",
                id=""
            )

class SettingsService:
    @staticmethod
    async def get_contact_info() -> Optional[ContactInfoResponse]:
        try:
            data = await database.find_one("site_settings", {"key": "contact_info"})
            if not data:
                return None
                
            info = data["data"]
            return ContactInfoResponse(
                email=info.get("email", ""),
                phone=info.get("phone", ""),
                manager=info.get("manager", ""),
                city=info.get("city", "")
            )
        except Exception as e:
            logger.error(f"Error getting contact info: {e}")
            return None
    
    @staticmethod
    async def get_social_links() -> Optional[SocialLinksResponse]:
        try:
            data = await database.find_one("site_settings", {"key": "social_links"})
            if not data:
                return None
                
            links = data["data"]
            return SocialLinksResponse(
                facebook=links.get("facebook", ""),
                instagram=links.get("instagram", ""),
                twitter=links.get("twitter", ""),
                youtube=links.get("youtube", ""),
                spotify=links.get("spotify", "")
            )
        except Exception as e:
            logger.error(f"Error getting social links: {e}")
            return None