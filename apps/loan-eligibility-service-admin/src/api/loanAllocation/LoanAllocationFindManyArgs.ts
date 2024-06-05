import { LoanAllocationWhereInput } from "./LoanAllocationWhereInput";
import { LoanAllocationOrderByInput } from "./LoanAllocationOrderByInput";

export type LoanAllocationFindManyArgs = {
  where?: LoanAllocationWhereInput;
  orderBy?: Array<LoanAllocationOrderByInput>;
  skip?: number;
  take?: number;
};
