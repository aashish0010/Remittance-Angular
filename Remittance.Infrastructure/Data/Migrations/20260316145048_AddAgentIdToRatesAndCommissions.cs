using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Remittance.Infrastructure.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddAgentIdToRatesAndCommissions : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "AgentId",
                table: "ExchangeRates",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Country",
                table: "ExchangeRates",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "AgentId",
                table: "CommissionRates",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_ExchangeRates_AgentId",
                table: "ExchangeRates",
                column: "AgentId");

            migrationBuilder.CreateIndex(
                name: "IX_CommissionRates_AgentId",
                table: "CommissionRates",
                column: "AgentId");

            migrationBuilder.AddForeignKey(
                name: "FK_CommissionRates_Agents_AgentId",
                table: "CommissionRates",
                column: "AgentId",
                principalTable: "Agents",
                principalColumn: "Id",
                onDelete: ReferentialAction.SetNull);

            migrationBuilder.AddForeignKey(
                name: "FK_ExchangeRates_Agents_AgentId",
                table: "ExchangeRates",
                column: "AgentId",
                principalTable: "Agents",
                principalColumn: "Id",
                onDelete: ReferentialAction.SetNull);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CommissionRates_Agents_AgentId",
                table: "CommissionRates");

            migrationBuilder.DropForeignKey(
                name: "FK_ExchangeRates_Agents_AgentId",
                table: "ExchangeRates");

            migrationBuilder.DropIndex(
                name: "IX_ExchangeRates_AgentId",
                table: "ExchangeRates");

            migrationBuilder.DropIndex(
                name: "IX_CommissionRates_AgentId",
                table: "CommissionRates");

            migrationBuilder.DropColumn(
                name: "AgentId",
                table: "ExchangeRates");

            migrationBuilder.DropColumn(
                name: "Country",
                table: "ExchangeRates");

            migrationBuilder.DropColumn(
                name: "AgentId",
                table: "CommissionRates");
        }
    }
}
