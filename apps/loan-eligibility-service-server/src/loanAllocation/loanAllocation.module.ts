import { Module } from "@nestjs/common";
import { LoanAllocationModuleBase } from "./base/loanAllocation.module.base";
import { LoanAllocationService } from "./loanAllocation.service";
import { LoanAllocationController } from "./loanAllocation.controller";
import { LoanAllocationResolver } from "./loanAllocation.resolver";

@Module({
  imports: [LoanAllocationModuleBase],
  controllers: [LoanAllocationController],
  providers: [LoanAllocationService, LoanAllocationResolver],
  exports: [LoanAllocationService],
})
export class LoanAllocationModule {}
