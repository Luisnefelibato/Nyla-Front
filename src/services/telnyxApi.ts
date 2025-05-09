// Servicio para la integración con la API de Telnyx

import axios from 'axios';

const API_KEY = 'TU_API_KEY_DE_TELNYX'; // Aquí deberás establecer tu API key de Telnyx

interface CallParams {
  to: string;
  from: string;
  connectionId: string;
}

export const makeCall = async (params: CallParams) => {
  try {
    // URL de la API de Telnyx (deberás sustituirla por la real)
    const url = 'https://api.telnyx.com/v2/calls';
    
    const response = await axios.post(url,
      {
        to: params.to,
        from: params.from,
        connection_id: params.connectionId,
        audio_url: 'https://example.com/greeting.wav' // URL opcional para reproducir un audio al contestar
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
    console.error('Error al realizar la llamada con Telnyx:', error);
    throw error;
  }
};

export const getCallHistory = async () => {
  try {
    const url = 'https://api.telnyx.com/v2/calls';
    
    const response = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    
    return response.data;
  } catch (error) {
    console.error('Error al obtener el historial de llamadas:', error);
    throw error;
  }
};

export default {
  makeCall,
  getCallHistory
};