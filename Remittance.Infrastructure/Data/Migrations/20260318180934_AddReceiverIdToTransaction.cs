using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Remittance.Infrastructure.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddReceiverIdToTransaction : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ReceiverId",
                table: "Transactions",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Transactions_ReceiverId",
                table: "Transactions",
                column: "ReceiverId");

            migrationBuilder.AddForeignKey(
                name: "FK_Transactions_Receivers_ReceiverId",
                table: "Transactions",
                column: "ReceiverId",
                principalTable: "Receivers",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Transactions_Receivers_ReceiverId",
                table: "Transactions");

            migrationBuilder.DropIndex(
                name: "IX_Transactions_ReceiverId",
                table: "Transactions");

            migrationBuilder.DropColumn(
                name: "ReceiverId",
                table: "Transactions");
        }
    }
}
