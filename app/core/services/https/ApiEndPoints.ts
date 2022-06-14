import {LOCAL_BASE_URL} from '@app/app.config';

const ApiEndPoints = {
  cardDetails: {
    method: 'GET',
    api: () => `${LOCAL_BASE_URL}/debit-card-details.json`,
  },
};

export interface APIDef {
  method: string;
  api: any;
  isWhiteListed?: boolean;
}

export interface APIInput {}

export default ApiEndPoints;
