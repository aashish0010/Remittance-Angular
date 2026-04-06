using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Remittance.Infrastructure.Data.Migrations
{
    /// <inheritdoc />
    public partial class effectivedateremove : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_ExchangeRates_SourceCurrency_DestinationCurrency_EffectiveF~",
                table: "ExchangeRates");

            migrationBuilder.DropColumn(
                name: "EffectiveFrom",
                table: "ExchangeRates");

            migrationBuilder.DropColumn(
                name: "EffectiveTo",
                table: "ExchangeRates");

            migrationBuilder.CreateIndex(
                name: "IX_ExchangeRates_SourceCurrency_DestinationCurrency",
                table: "ExchangeRates",
                columns: new[] { "SourceCurrency", "DestinationCurrency" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_ExchangeRates_SourceCurrency_DestinationCurrency",
                table: "ExchangeRates");

            migrationBuilder.AddColumn<DateTime>(
                name: "EffectiveFrom",
                table: "ExchangeRates",
                type: "timestamp with time zone",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "EffectiveTo",
                table: "ExchangeRates",
                type: "timestamp with time zone",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_ExchangeRates_SourceCurrency_DestinationCurrency_EffectiveF~",
                table: "ExchangeRates",
                columns: new[] { "SourceCurrency", "DestinationCurrency", "EffectiveFrom" });
        }
    }
}
