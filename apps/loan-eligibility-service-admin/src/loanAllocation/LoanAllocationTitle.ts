import { LoanAllocation as TLoanAllocation } from "../api/loanAllocation/LoanAllocation";

export const LOANALLOCATION_TITLE_FIELD = "id";

export const LoanAllocationTitle = (record: TLoanAllocation): string => {
  return record.id?.toString() || String(record.id);
};
