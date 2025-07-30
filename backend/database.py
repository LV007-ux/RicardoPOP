from motor.motor_asyncio import AsyncIOMotorClient
import os
from typing import List, Optional, Dict, Any
import logging

logger = logging.getLogger(__name__)

class Database:
    def __init__(self):
        self.client = None
        self.db = None
        
    async def connect(self):
        try:
            mongo_url = os.environ['MONGO_URL']
            db_name = os.environ.get('DB_NAME', 'ricardo_pop')
            
            self.client = AsyncIOMotorClient(mongo_url)
            self.db = self.client[db_name]
            
            # Test connection
            await self.client.admin.command('ismaster')
            logger.info("Successfully connected to MongoDB")
            
        except Exception as e:
            logger.error(f"Failed to connect to MongoDB: {e}")
            raise
    
    async def close(self):
        if self.client:
            self.client.close()
    
    # Generic CRUD operations
    async def find_one(self, collection: str, filter_dict: Dict[str, Any]) -> Optional[Dict[str, Any]]:
        try:
            return await self.db[collection].find_one(filter_dict)
        except Exception as e:
            logger.error(f"Error finding document in {collection}: {e}")
            return None
    
    async def find_many(self, collection: str, filter_dict: Dict[str, Any] = None, sort: List[tuple] = None) -> List[Dict[str, Any]]:
        try:
            cursor = self.db[collection].find(filter_dict or {})
            if sort:
                cursor = cursor.sort(sort)
            return await cursor.to_list(length=None)
        except Exception as e:
            logger.error(f"Error finding documents in {collection}: {e}")
            return []
    
    async def insert_one(self, collection: str, document: Dict[str, Any]) -> Optional[str]:
        try:
            result = await self.db[collection].insert_one(document)
            return str(result.inserted_id)
        except Exception as e:
            logger.error(f"Error inserting document in {collection}: {e}")
            return None
    
    async def insert_many(self, collection: str, documents: List[Dict[str, Any]]) -> Optional[List[str]]:
        try:
            result = await self.db[collection].insert_many(documents)
            return [str(id) for id in result.inserted_ids]
        except Exception as e:
            logger.error(f"Error inserting documents in {collection}: {e}")
            return None
    
    async def update_one(self, collection: str, filter_dict: Dict[str, Any], update_dict: Dict[str, Any]) -> bool:
        try:
            result = await self.db[collection].update_one(filter_dict, {"$set": update_dict})
            return result.modified_count > 0
        except Exception as e:
            logger.error(f"Error updating document in {collection}: {e}")
            return False
    
    async def delete_one(self, collection: str, filter_dict: Dict[str, Any]) -> bool:
        try:
            result = await self.db[collection].delete_one(filter_dict)
            return result.deleted_count > 0
        except Exception as e:
            logger.error(f"Error deleting document in {collection}: {e}")
            return False

# Global database instance
database = Database()