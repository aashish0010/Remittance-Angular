using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Remittance.Infrastructure.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddCommissionPayoutAgentAndOptionalFields : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "DestinationCurrency",
                table: "CommissionRates",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PaymentMethod",
                table: "CommissionRates",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "PayoutAgentId",
                table: "CommissionRates",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "SourceCurrency",
                table: "CommissionRates",
                type: "text",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_CommissionRates_PayoutAgentId",
                table: "CommissionRates",
                column: "PayoutAgentId");

            migrationBuilder.AddForeignKey(
                name: "FK_CommissionRates_Agents_PayoutAgentId",
                table: "CommissionRates",
                column: "PayoutAgentId",
                principalTable: "Agents",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CommissionRates_Agents_PayoutAgentId",
                table: "CommissionRates");

            migrationBuilder.DropIndex(
                name: "IX_CommissionRates_PayoutAgentId",
                table: "CommissionRates");

            migrationBuilder.DropColumn(
                name: "DestinationCurrency",
                table: "CommissionRates");

            migrationBuilder.DropColumn(
                name: "PaymentMethod",
                table: "CommissionRates");

            migrationBuilder.DropColumn(
                name: "PayoutAgentId",
                table: "CommissionRates");

            migrationBuilder.DropColumn(
                name: "SourceCurrency",
                table: "CommissionRates");
        }
    }
}
