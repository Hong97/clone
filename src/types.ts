export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  sources?: GroundingSource[];
}

export interface GroundingSource {
  title: string;
  url: string;
}

export interface ApiResponseSimulation {
  endpoint: string;
  method: 'POST' | 'GET';
  requestBody: string;
  responseBody: string;
  statusCode: number;
}
