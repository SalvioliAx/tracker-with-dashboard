export interface Track {
    id?: number;
    idmNumber: number;
    requestedDate: Date;
    action: string;
    name: string;
    sso: number;
    application: string;
    environment: string;
    client: string;
    performedBy: string;
    executionDate: Date;
    comments: string;
  }
  