import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

// API service functions
export const apiService = {
  // Artist info
  async getArtistInfo() {
    try {
      const response = await apiClient.get('/artist-info');
      return response.data;
    } catch (error) {
      console.error('Error fetching artist info:', error);
      throw error;
    }
  },

  // Biography
  async getBiography() {
    try {
      const response = await apiClient.get('/biography');
      return response.data;
    } catch (error) {
      console.error('Error fetching biography:', error);
      throw error;
    }
  },

  // Trajectory
  async getTrajectory() {
    try {
      const response = await apiClient.get('/trajectory');
      return response.data;
    } catch (error) {
      console.error('Error fetching trajectory:', error);
      throw error;
    }
  },

  // Discography
  async getDiscography() {
    try {
      const response = await apiClient.get('/discography');
      return response.data;
    } catch (error) {
      console.error('Error fetching discography:', error);
      throw error;
    }
  },

  // Shows
  async getShows() {
    try {
      const response = await apiClient.get('/shows');
      return response.data;
    } catch (error) {
      console.error('Error fetching shows:', error);
      throw error;
    }
  },

  // Gallery
  async getGallery() {
    try {
      const response = await apiClient.get('/gallery');
      return response.data;
    } catch (error) {
      console.error('Error fetching gallery:', error);
      throw error;
    }
  },

  // Contact Info
  async getContactInfo() {
    try {
      const response = await apiClient.get('/contact-info');
      return response.data;
    } catch (error) {
      console.error('Error fetching contact info:', error);
      throw error;
    }
  },

  // Social Links
  async getSocialLinks() {
    try {
      const response = await apiClient.get('/social-links');
      return response.data;
    } catch (error) {
      console.error('Error fetching social links:', error);
      throw error;
    }
  },

  // Send contact message
  async sendContactMessage(messageData) {
    try {
      const response = await apiClient.post('/contact', messageData);
      return response.data;
    } catch (error) {
      console.error('Error sending contact message:', error);
      throw error;
    }
  }
};