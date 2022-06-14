export interface CardDetails {
  cardType: string;
  cardNumber: string;
  validThru: string;
  cvv: string;
  usage: {
    usageLimit: number;
    spendings: number;
    availableBalance: number; 
  };
  deactivated: boolean;
  freezeCard: boolean;
}
