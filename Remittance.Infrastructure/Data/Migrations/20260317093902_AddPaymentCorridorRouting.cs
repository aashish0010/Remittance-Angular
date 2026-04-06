using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Remittance.Infrastructure.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddPaymentCorridorRouting : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PaymentCorridors",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    SendingAgentId = table.Column<int>(type: "integer", nullable: true),
                    SourceCountry = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    SourceCurrency = table.Column<string>(type: "character varying(10)", maxLength: 10, nullable: false),
                    DestinationCountry = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    DestinationCurrency = table.Column<string>(type: "character varying(10)", maxLength: 10, nullable: false),
                    IsActive = table.Column<bool>(type: "boolean", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PaymentCorridors", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PaymentCorridors_Agents_SendingAgentId",
                        column: x => x.SendingAgentId,
                        principalTable: "Agents",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.SetNull);
                });

            migrationBuilder.CreateTable(
                name: "CorridorPayoutPartners",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    PaymentCorridorId = table.Column<int>(type: "integer", nullable: false),
                    PayoutAgentId = table.Column<int>(type: "integer", nullable: false),
                    PaymentModeIds = table.Column<string>(type: "character varying(200)", maxLength: 200, nullable: false),
                    IsActive = table.Column<bool>(type: "boolean", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CorridorPayoutPartners", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CorridorPayoutPartners_Agents_PayoutAgentId",
                        column: x => x.PayoutAgentId,
                        principalTable: "Agents",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_CorridorPayoutPartners_PaymentCorridors_PaymentCorridorId",
                        column: x => x.PaymentCorridorId,
                        principalTable: "PaymentCorridors",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CorridorPayoutPartners_PaymentCorridorId_PayoutAgentId",
                table: "CorridorPayoutPartners",
                columns: new[] { "PaymentCorridorId", "PayoutAgentId" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_CorridorPayoutPartners_PayoutAgentId",
                table: "CorridorPayoutPartners",
                column: "PayoutAgentId");

            migrationBuilder.CreateIndex(
                name: "IX_PaymentCorridors_SendingAgentId",
                table: "PaymentCorridors",
                column: "SendingAgentId");

            migrationBuilder.CreateIndex(
                name: "IX_PaymentCorridors_SourceCountry_DestinationCountry_SendingAg~",
                table: "PaymentCorridors",
                columns: new[] { "SourceCountry", "DestinationCountry", "SendingAgentId" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CorridorPayoutPartners");

            migrationBuilder.DropTable(
                name: "PaymentCorridors");
        }
    }
}
