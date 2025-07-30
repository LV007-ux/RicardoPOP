from fastapi import FastAPI, APIRouter, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os
import logging
from pathlib import Path

# Import models and services
from models import *
from services import *
from database import database

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Create the main app without a prefix
app = FastAPI(title="Ricardo POP API", version="1.0.0")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("startup")
async def startup_db_client():
    await database.connect()

@app.on_event("shutdown")
async def shutdown_db_client():
    await database.close()

# Health check endpoint
@api_router.get("/")
async def root():
    return {"message": "Ricardo POP API is running", "status": "healthy"}

# Artist Info endpoint
@api_router.get("/artist-info", response_model=ArtistInfoResponse)
async def get_artist_info():
    try:
        result = await ArtistService.get_artist_info()
        if not result:
            raise HTTPException(status_code=404, detail="Artist info not found")
        return result
    except Exception as e:
        logger.error(f"Error getting artist info: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

# Biography endpoint
@api_router.get("/biography", response_model=BiographyResponse)
async def get_biography():
    try:
        result = await BiographyService.get_biography()
        if not result:
            raise HTTPException(status_code=404, detail="Biography not found")
        return result
    except Exception as e:
        logger.error(f"Error getting biography: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

# Trajectory endpoint
@api_router.get("/trajectory", response_model=TrajectoryResponse)
async def get_trajectory():
    try:
        result = await TrajectoryService.get_trajectory()
        if not result:
            raise HTTPException(status_code=404, detail="Trajectory not found")
        return result
    except Exception as e:
        logger.error(f"Error getting trajectory: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

# Discography endpoint
@api_router.get("/discography", response_model=List[AlbumResponse])
async def get_discography():
    try:
        result = await DiscographyService.get_albums()
        return result
    except Exception as e:
        logger.error(f"Error getting discography: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

# Shows endpoint
@api_router.get("/shows", response_model=List[ShowResponse])
async def get_shows():
    try:
        result = await ShowsService.get_shows()
        return result
    except Exception as e:
        logger.error(f"Error getting shows: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

# Gallery endpoint
@api_router.get("/gallery", response_model=List[GalleryResponse])
async def get_gallery():
    try:
        result = await GalleryService.get_gallery()
        return result
    except Exception as e:
        logger.error(f"Error getting gallery: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

# Contact Info endpoint
@api_router.get("/contact-info", response_model=ContactInfoResponse)
async def get_contact_info():
    try:
        result = await SettingsService.get_contact_info()
        if not result:
            raise HTTPException(status_code=404, detail="Contact info not found")
        return result
    except Exception as e:
        logger.error(f"Error getting contact info: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

# Social Links endpoint
@api_router.get("/social-links", response_model=SocialLinksResponse)
async def get_social_links():
    try:
        result = await SettingsService.get_social_links()
        if not result:
            raise HTTPException(status_code=404, detail="Social links not found")
        return result
    except Exception as e:
        logger.error(f"Error getting social links: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

# Contact form endpoint
@api_router.post("/contact", response_model=ContactResponse)
async def send_contact_message(contact_request: ContactRequest):
    try:
        result = await ContactService.send_message(contact_request)
        if not result.success:
            raise HTTPException(status_code=400, detail=result.message)
        return result
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error sending contact message: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

# Include the router in the main app
app.include_router(api_router)