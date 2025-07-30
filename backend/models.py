from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
from datetime import datetime
import uuid

# Base model for MongoDB documents
class BaseDocument(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()), alias="_id")
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)
    
    class Config:
        populate_by_name = True

# Artist Info Models
class ArtistInfo(BaseDocument):
    name: str
    tagline: str
    years_active: str
    description: str

class ArtistInfoResponse(BaseModel):
    name: str
    tagline: str
    yearsActive: str
    description: str

# Biography Models
class Biography(BaseDocument):
    title: str
    content: str
    image: str

class BiographyResponse(BaseModel):
    title: str
    content: str
    image: str

# Trajectory Models
class Trajectory(BaseDocument):
    title: str
    content: str

class TrajectoryResponse(BaseModel):
    title: str
    content: str

# Album Models
class Album(BaseDocument):
    title: str
    year: str
    type: str
    cover: str
    tracks: List[str]
    order: int = 0

class AlbumResponse(BaseModel):
    id: str
    title: str
    year: str
    type: str
    cover: str
    tracks: List[str]

# Show Models
class Show(BaseDocument):
    date: str  # ISO date string
    venue: str
    location: str
    time: str
    status: str = "confirmed"
    description: Optional[str] = None

class ShowResponse(BaseModel):
    id: str
    date: str
    venue: str
    location: str
    time: str
    status: str

# Gallery Models
class GalleryImage(BaseDocument):
    url: str
    caption: str
    order: int = 0

class GalleryResponse(BaseModel):
    id: str
    url: str
    caption: str

# Contact Models
class ContactMessage(BaseDocument):
    name: str
    email: EmailStr
    subject: str
    message: str
    status: str = "new"

class ContactRequest(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str

class ContactResponse(BaseModel):
    success: bool
    message: str
    id: str

# Site Settings Models
class SiteSettings(BaseDocument):
    key: str
    data: dict

class ContactInfoResponse(BaseModel):
    email: str
    phone: str
    manager: str
    city: str

class SocialLinksResponse(BaseModel):
    facebook: str
    instagram: str
    twitter: str
    youtube: str
    spotify: str