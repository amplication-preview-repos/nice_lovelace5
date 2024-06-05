import * as graphql from "@nestjs/graphql";
import { LoanAllocationResolverBase } from "./base/loanAllocation.resolver.base";
import { LoanAllocation } from "./base/LoanAllocation";
import { LoanAllocationService } from "./loanAllocation.service";

@graphql.Resolver(() => LoanAllocation)
export class LoanAllocationResolver extends LoanAllocationResolverBase {
  constructor(protected readonly service: LoanAllocationService) {
    super(service);
  }
}
