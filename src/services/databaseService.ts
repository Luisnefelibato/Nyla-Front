// Servicio para la gestión de la base de datos (simulada con localStorage)

import { Institution } from '../types/institution';
import { Talent } from '../types/talent';
import { Call } from '../types/call';

// Clase para manejar las operaciones con instituciones
class InstitutionService {
  private storageKey = 'nyla_institutions';

  // Obtener todas las instituciones
  getAllInstitutions(): Institution[] {
    const storedData = localStorage.getItem(this.storageKey);
    return storedData ? JSON.parse(storedData) : [];
  }

  // Obtener una institución por ID
  getInstitutionById(id: string): Institution | null {
    const institutions = this.getAllInstitutions();
    return institutions.find(institution => institution.id === id) || null;
  }

  // Guardar una nueva institución
  saveInstitution(institution: Institution): Institution {
    const institutions = this.getAllInstitutions();
    
    // Verificar si la institución ya existe para actualizar en lugar de añadir
    const existingIndex = institutions.findIndex(i => i.id === institution.id);
    
    if (existingIndex !== -1) {
      // Actualizar institución existente
      institutions[existingIndex] = institution;
    } else {
      // Añadir nueva institución
      institutions.push(institution);
    }
    
    localStorage.setItem(this.storageKey, JSON.stringify(institutions));
    return institution;
  }

  // Guardar varias instituciones a la vez
  saveInstitutions(newInstitutions: Institution[]): Institution[] {
    const institutions = this.getAllInstitutions();
    
    // Combinar las instituciones existentes con las nuevas
    const updatedInstitutions = [...institutions];
    
    newInstitutions.forEach(newInst => {
      const existingIndex = updatedInstitutions.findIndex(i => i.id === newInst.id);
      
      if (existingIndex !== -1) {
        // Actualizar institución existente
        updatedInstitutions[existingIndex] = newInst;
      } else {
        // Añadir nueva institución
        updatedInstitutions.push(newInst);
      }
    });
    
    localStorage.setItem(this.storageKey, JSON.stringify(updatedInstitutions));
    return newInstitutions;
  }

  // Eliminar una institución
  deleteInstitution(id: string): boolean {
    const institutions = this.getAllInstitutions();
    const updatedInstitutions = institutions.filter(institution => institution.id !== id);
    
    if (updatedInstitutions.length < institutions.length) {
      localStorage.setItem(this.storageKey, JSON.stringify(updatedInstitutions));
      return true;
    }
    
    return false;
  }

  // Buscar instituciones por texto
  searchInstitutions(query: string): Institution[] {
    const institutions = this.getAllInstitutions();
    const lowercaseQuery = query.toLowerCase();
    
    return institutions.filter(institution => 
      institution.name.toLowerCase().includes(lowercaseQuery) ||
      institution.description.toLowerCase().includes(lowercaseQuery) ||
      institution.location.toLowerCase().includes(lowercaseQuery) ||
      institution.category.toLowerCase().includes(lowercaseQuery)
    );
  }
}

// Clase para manejar las operaciones con talentos
class TalentService {
  private storageKey = 'nyla_talents';

  // Obtener todos los talentos
  getAllTalents(): Talent[] {
    const storedData = localStorage.getItem(this.storageKey);
    return storedData ? JSON.parse(storedData) : [];
  }

  // Obtener un talento por ID
  getTalentById(id: string): Talent | null {
    const talents = this.getAllTalents();
    return talents.find(talent => talent.id === id) || null;
  }

  // Guardar un nuevo talento
  saveTalent(talent: Talent): Talent {
    const talents = this.getAllTalents();
    
    // Verificar si el talento ya existe para actualizar en lugar de añadir
    const existingIndex = talents.findIndex(t => t.id === talent.id);
    
    if (existingIndex !== -1) {
      // Actualizar talento existente
      talents[existingIndex] = talent;
    } else {
      // Añadir nuevo talento
      talents.push(talent);
    }
    
    localStorage.setItem(this.storageKey, JSON.stringify(talents));
    return talent;
  }

  // Eliminar un talento
  deleteTalent(id: string): boolean {
    const talents = this.getAllTalents();
    const updatedTalents = talents.filter(talent => talent.id !== id);
    
    if (updatedTalents.length < talents.length) {
      localStorage.setItem(this.storageKey, JSON.stringify(updatedTalents));
      return true;
    }
    
    return false;
  }

  // Buscar talentos por texto
  searchTalents(query: string): Talent[] {
    const talents = this.getAllTalents();
    const lowercaseQuery = query.toLowerCase();
    
    return talents.filter(talent => 
      talent.firstName.toLowerCase().includes(lowercaseQuery) ||
      talent.lastName.toLowerCase().includes(lowercaseQuery) ||
      talent.email.toLowerCase().includes(lowercaseQuery) ||
      talent.experience.toLowerCase().includes(lowercaseQuery) ||
      talent.category.some(cat => cat.toLowerCase().includes(lowercaseQuery)) ||
      talent.skills.some(skill => skill.toLowerCase().includes(lowercaseQuery))
    );
  }
}

// Clase para manejar las operaciones con llamadas
class CallService {
  private storageKey = 'nyla_calls';

  // Obtener todas las llamadas
  getAllCalls(): Call[] {
    const storedData = localStorage.getItem(this.storageKey);
    return storedData ? JSON.parse(storedData) : [];
  }

  // Obtener una llamada por ID
  getCallById(id: string): Call | null {
    const calls = this.getAllCalls();
    return calls.find(call => call.id === id) || null;
  }

  // Guardar una nueva llamada
  saveCall(call: Call): Call {
    const calls = this.getAllCalls();
    
    // Verificar si la llamada ya existe para actualizar en lugar de añadir
    const existingIndex = calls.findIndex(c => c.id === call.id);
    
    if (existingIndex !== -1) {
      // Actualizar llamada existente
      calls[existingIndex] = call;
    } else {
      // Añadir nueva llamada
      calls.push(call);
    }
    
    localStorage.setItem(this.storageKey, JSON.stringify(calls));
    return call;
  }

  // Eliminar una llamada
  deleteCall(id: string): boolean {
    const calls = this.getAllCalls();
    const updatedCalls = calls.filter(call => call.id !== id);
    
    if (updatedCalls.length < calls.length) {
      localStorage.setItem(this.storageKey, JSON.stringify(updatedCalls));
      return true;
    }
    
    return false;
  }

  // Obtener las llamadas por fecha (más recientes primero)
  getCallsSortedByDate(): Call[] {
    const calls = this.getAllCalls();
    return calls.sort((a, b) => new Date(b.startTime).getTime() - new Date(a.startTime).getTime());
  }
}

// Exportar instancias de los servicios
export const institutionService = new InstitutionService();
export const talentService = new TalentService();
export const callService = new CallService();

// Exportar por defecto un objeto con todos los servicios
export default {
  institutions: institutionService,
  talents: talentService,
  calls: callService
};
