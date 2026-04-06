using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Remittance.Infrastructure.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddReceiverAndTransactionBankBranchFields : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ReceiverBankId",
                table: "Transactions",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ReceiverBranchId",
                table: "Transactions",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "BankCode",
                table: "Receivers",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "BankId",
                table: "Receivers",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "BranchCode",
                table: "Receivers",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "BranchId",
                table: "Receivers",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "BranchName",
                table: "Receivers",
                type: "text",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ReceiverBankId",
                table: "Transactions");

            migrationBuilder.DropColumn(
                name: "ReceiverBranchId",
                table: "Transactions");

            migrationBuilder.DropColumn(
                name: "BankCode",
                table: "Receivers");

            migrationBuilder.DropColumn(
                name: "BankId",
                table: "Receivers");

            migrationBuilder.DropColumn(
                name: "BranchCode",
                table: "Receivers");

            migrationBuilder.DropColumn(
                name: "BranchId",
                table: "Receivers");

            migrationBuilder.DropColumn(
                name: "BranchName",
                table: "Receivers");
        }
    }
}
