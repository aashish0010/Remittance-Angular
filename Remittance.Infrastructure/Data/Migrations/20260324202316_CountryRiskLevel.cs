using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Remittance.Infrastructure.Data.Migrations
{
    /// <inheritdoc />
    public partial class CountryRiskLevel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "RiskLevel",
                table: "SanctionedCountries",
                type: "character varying(20)",
                maxLength: 20,
                nullable: false,
                defaultValue: "Blocked");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "RiskLevel",
                table: "SanctionedCountries");
        }
    }
}
