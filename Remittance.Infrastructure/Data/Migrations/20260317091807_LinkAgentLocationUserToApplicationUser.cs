using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Remittance.Infrastructure.Data.Migrations
{
    /// <inheritdoc />
    public partial class LinkAgentLocationUserToApplicationUser : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "AgentLocationUsers",
                type: "text",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_AgentLocationUsers_UserId",
                table: "AgentLocationUsers",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_AgentLocationUsers_Users_UserId",
                table: "AgentLocationUsers",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.SetNull);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AgentLocationUsers_Users_UserId",
                table: "AgentLocationUsers");

            migrationBuilder.DropIndex(
                name: "IX_AgentLocationUsers_UserId",
                table: "AgentLocationUsers");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "AgentLocationUsers");
        }
    }
}
