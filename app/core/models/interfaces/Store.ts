import {CardDetails} from './CardDetails';

export interface Store {
  loader: boolean;
  cardVisibility: boolean;
  cardDetails: CardDetails;
}
