import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LoanAllocationService } from "./loanAllocation.service";
import { LoanAllocationControllerBase } from "./base/loanAllocation.controller.base";

@swagger.ApiTags("loanAllocations")
@common.Controller("loanAllocations")
export class LoanAllocationController extends LoanAllocationControllerBase {
  constructor(protected readonly service: LoanAllocationService) {
    super(service);
  }
}
