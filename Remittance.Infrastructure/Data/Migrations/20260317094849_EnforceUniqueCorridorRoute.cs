using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Remittance.Infrastructure.Data.Migrations
{
    /// <inheritdoc />
    public partial class EnforceUniqueCorridorRoute : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_PaymentCorridors_SourceCountry_DestinationCountry_SendingAg~",
                table: "PaymentCorridors");

            migrationBuilder.CreateIndex(
                name: "IX_PaymentCorridors_SourceCountry_SourceCurrency_DestinationCo~",
                table: "PaymentCorridors",
                columns: new[] { "SourceCountry", "SourceCurrency", "DestinationCountry", "DestinationCurrency" },
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_PaymentCorridors_SourceCountry_SourceCurrency_DestinationCo~",
                table: "PaymentCorridors");

            migrationBuilder.CreateIndex(
                name: "IX_PaymentCorridors_SourceCountry_DestinationCountry_SendingAg~",
                table: "PaymentCorridors",
                columns: new[] { "SourceCountry", "DestinationCountry", "SendingAgentId" });
        }
    }
}
