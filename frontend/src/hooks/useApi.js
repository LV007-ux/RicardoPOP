import { useState, useEffect } from 'react';
import { apiService } from '../services/api';

// Custom hook for API data fetching
export const useApi = (apiFunction, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await apiFunction();
        setData(result);
      } catch (err) {
        setError(err);
        console.error('API Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, dependencies);

  const refetch = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiFunction();
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, refetch };
};

// Specific hooks for different data types
export const useArtistInfo = () => useApi(apiService.getArtistInfo);
export const useBiography = () => useApi(apiService.getBiography);
export const useTrajectory = () => useApi(apiService.getTrajectory);
export const useDiscography = () => useApi(apiService.getDiscography);
export const useShows = () => useApi(apiService.getShows);
export const useGallery = () => useApi(apiService.getGallery);
export const useContactInfo = () => useApi(apiService.getContactInfo);
export const useSocialLinks = () => useApi(apiService.getSocialLinks);