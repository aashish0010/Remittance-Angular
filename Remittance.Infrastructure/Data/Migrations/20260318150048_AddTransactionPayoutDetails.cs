using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Remittance.Infrastructure.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddTransactionPayoutDetails : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "PaymentMethodName",
                table: "Transactions",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PayoutAgentName",
                table: "Transactions",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PayoutMethodName",
                table: "Transactions",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ReceiverBankCode",
                table: "Transactions",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ReceiverBranchCode",
                table: "Transactions",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ReceiverBranchName",
                table: "Transactions",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SendingAgentName",
                table: "Transactions",
                type: "text",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PaymentMethodName",
                table: "Transactions");

            migrationBuilder.DropColumn(
                name: "PayoutAgentName",
                table: "Transactions");

            migrationBuilder.DropColumn(
                name: "PayoutMethodName",
                table: "Transactions");

            migrationBuilder.DropColumn(
                name: "ReceiverBankCode",
                table: "Transactions");

            migrationBuilder.DropColumn(
                name: "ReceiverBranchCode",
                table: "Transactions");

            migrationBuilder.DropColumn(
                name: "ReceiverBranchName",
                table: "Transactions");

            migrationBuilder.DropColumn(
                name: "SendingAgentName",
                table: "Transactions");
        }
    }
}
