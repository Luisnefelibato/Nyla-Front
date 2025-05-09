// Servicio para la integración con la API de Gemini

import axios from 'axios';

const API_KEY = 'TU_API_KEY_DE_GEMINI'; // Aquí deberás establecer tu API key de Gemini

interface GeminiSearchParams {
  query: string;
  limit?: number;
}

export const searchInstitutions = async (params: GeminiSearchParams) => {
  try {
    // URL de la API de Gemini (deberás sustituirla por la real)
    const url = 'https://api.gemini.com/v1/search';
    
    const response = await axios.post(url, 
      {
        query: params.query,
        limit: params.limit || 10
      },
      {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );
    
    return response.data;
  } catch (error) {
    console.error('Error al buscar instituciones con Gemini:', error);
    throw error;
  }
};

export default {
  searchInstitutions
};