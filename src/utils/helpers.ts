// Utilidades generales para la aplicación

/**
 * Genera un ID único para entidades
 * @param prefix Prefijo para el ID (opcional)
 * @returns Un string con un ID único
 */
export const generateUniqueId = (prefix: string = ''): string => {
  const timestamp = Date.now().toString(36);
  const randomStr = Math.random().toString(36).substring(2, 8);
  return `${prefix}${timestamp}-${randomStr}`;
};

/**
 * Formatea una fecha ISO a formato legible
 * @param dateString Fecha en formato ISO string
 * @returns Fecha formateada (ej: 5 Mayo, 2023 15:30)
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  
  return date.toLocaleDateString('es-ES', options);
};

/**
 * Formatea segundos a formato mm:ss
 * @param seconds Número de segundos
 * @returns Duración formateada (ej: 2:45)
 */
export const formatDuration = (seconds: number): string => {
  if (seconds === 0) return '0:00';
  
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

/**
 * Trunca un texto a una longitud específica
 * @param text Texto a truncar
 * @param maxLength Longitud máxima
 * @returns Texto truncado con elipsis si es necesario
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength)}...`;
};

/**
 * Filtra un objeto eliminando propiedades indefinidas o nulas
 * @param obj Objeto a filtrar
 * @returns Objeto sin propiedades indefinidas o nulas
 */
export const cleanObject = <T extends Record<string, any>>(obj: T): Partial<T> => {
  const result: Partial<T> = {};
  
  Object.entries(obj).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      result[key as keyof T] = value;
    }
  });
  
  return result;
};

/**
 * Formatea un número de teléfono para su visualización
 * @param phoneNumber Número de teléfono (puede incluir caracteres no numéricos)
 * @returns Número de teléfono formateado
 */
export const formatPhoneNumber = (phoneNumber: string): string => {
  // Eliminar todos los caracteres no numéricos
  const cleaned = phoneNumber.replace(/\D/g, '');
  
  // Formato internacional
  if (cleaned.length > 10) {
    const countryCode = cleaned.substring(0, cleaned.length - 10);
    const areaCode = cleaned.substring(cleaned.length - 10, cleaned.length - 7);
    const firstPart = cleaned.substring(cleaned.length - 7, cleaned.length - 4);
    const secondPart = cleaned.substring(cleaned.length - 4);
    
    return `+${countryCode} ${areaCode} ${firstPart} ${secondPart}`;
  } 
  // Formato nacional (asumiendo 10 dígitos)
  else if (cleaned.length === 10) {
    const areaCode = cleaned.substring(0, 3);
    const firstPart = cleaned.substring(3, 6);
    const secondPart = cleaned.substring(6);
    
    return `(${areaCode}) ${firstPart}-${secondPart}`;
  }
  
  // Si no coincide con los formatos esperados, devolver tal cual
  return phoneNumber;
};

/**
 * Convierte un color a formato RGBA
 * @param hex Color en formato hexadecimal (#RRGGBB)
 * @param alpha Valor de transparencia (0-1)
 * @returns Color en formato rgba
 */
export const hexToRgba = (hex: string, alpha: number = 1): string => {
  // Eliminar el # si existe
  const cleanHex = hex.charAt(0) === '#' ? hex.substring(1) : hex;
  
  // Convertir a valores RGB
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

/**
 * Agrega clases CSS condicionales
 * @param baseClasses Clases base que siempre se incluyen
 * @param conditionalClasses Objeto con clases condicionales
 * @returns String con todas las clases aplicables
 */
export const classNames = (
  baseClasses: string,
  conditionalClasses: Record<string, boolean>
): string => {
  const classes = [baseClasses];
  
  Object.entries(conditionalClasses).forEach(([className, condition]) => {
    if (condition) {
      classes.push(className);
    }
  });
  
  return classes.filter(Boolean).join(' ');
};
