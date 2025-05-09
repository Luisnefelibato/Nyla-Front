export interface Call {
  id: string;
  to: string;
  from: string;
  status: 'completed' | 'failed' | 'ongoing';
  duration: number;
  startTime: string;
  endTime?: string;
  notes?: string;
  contactName?: string;
  institutionId?: string;
}
