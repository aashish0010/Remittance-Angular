using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Remittance.Infrastructure.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddPayoutAgentCommissionAndBankPaymentMethodId : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Transactions_Agents_AgentId",
                table: "Transactions");

            migrationBuilder.AddColumn<decimal>(
                name: "PayoutAgentCommission",
                table: "Transactions",
                type: "numeric(18,2)",
                precision: 18,
                scale: 2,
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<int>(
                name: "PayoutAgentId",
                table: "Transactions",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Transactions_PayoutAgentId",
                table: "Transactions",
                column: "PayoutAgentId");

            migrationBuilder.AddForeignKey(
                name: "FK_Transactions_Agents_AgentId",
                table: "Transactions",
                column: "AgentId",
                principalTable: "Agents",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Transactions_Agents_PayoutAgentId",
                table: "Transactions",
                column: "PayoutAgentId",
                principalTable: "Agents",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Transactions_Agents_AgentId",
                table: "Transactions");

            migrationBuilder.DropForeignKey(
                name: "FK_Transactions_Agents_PayoutAgentId",
                table: "Transactions");

            migrationBuilder.DropIndex(
                name: "IX_Transactions_PayoutAgentId",
                table: "Transactions");

            migrationBuilder.DropColumn(
                name: "PayoutAgentCommission",
                table: "Transactions");

            migrationBuilder.DropColumn(
                name: "PayoutAgentId",
                table: "Transactions");

            migrationBuilder.AddForeignKey(
                name: "FK_Transactions_Agents_AgentId",
                table: "Transactions",
                column: "AgentId",
                principalTable: "Agents",
                principalColumn: "Id");
        }
    }
}
