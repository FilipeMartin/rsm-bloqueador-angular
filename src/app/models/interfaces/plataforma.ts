export interface Usuario {
    admin: boolean;
    attributes: string;
    coordinateFormat: string;
    deviceLimit: number;
    deviceReadonly: boolean;
    disabled: boolean;
    email: string;
    expirationTime: string;
    id: number;
    latitude: string;
    limitCommands: boolean;
    login: string;
    longitude: string;
    map: string;
    name: string;
    password: string;
    phone: string;
    poiLayer: string;
    readonly: boolean;
    token: string;
    twelveHourFormat: boolean;
    userLimit: number;
    zoom: number;
  }
  
  export interface Veiculo {
    attributes: string;
    category: string;
    contact: string;
    disabled: boolean;
    geofenceIds: string;
    groupId: number;
    id: number;
    lastUpdate: string;
    model: string;
    name: string;
    phone: string;
    positionId: number;
    status: string;
    uniqueId: string;
  }
  
  export interface Posicao {
    accuracy: number;
    address: string;
    altitude: number;
    attributes: string;
    course: number;
    deviceId: number;
    deviceTime: string;
    fixTime: string;
    id: number;
    latitude: string;
    longitude: string;
    network: string;
    outdated: boolean;
    protocol: string;
    serverTime: string;
    speed: number;
    type: string;
    valid: boolean;
  }
  
  export interface Evento {
    attributes: string;
    bingKey: string;
    coordinateFormat: string;
    deviceReadonly: boolean;
    forceSettings: boolean;
    id: number;
    latitude: number;
    limitCommands: boolean;
    longitude: number;
    map: string;
    mapUrl: string;
    poiLayer: string;
    readonly: boolean;
    registration: boolean;
    twelveHourFormat: boolean;
    version: string;
    zoom: number;
  }