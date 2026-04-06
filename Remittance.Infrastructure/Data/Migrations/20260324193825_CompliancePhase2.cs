using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Remittance.Infrastructure.Data.Migrations
{
    /// <inheritdoc />
    public partial class CompliancePhase2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "DeletedAt",
                table: "Receivers",
                type: "timestamp with time zone",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DeletedBy",
                table: "Receivers",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "Receivers",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeletedAt",
                table: "PaymentCorridors",
                type: "timestamp with time zone",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DeletedBy",
                table: "PaymentCorridors",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "PaymentCorridors",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeletedAt",
                table: "ExchangeRates",
                type: "timestamp with time zone",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DeletedBy",
                table: "ExchangeRates",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "ExchangeRates",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeletedAt",
                table: "Customers",
                type: "timestamp with time zone",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DeletedBy",
                table: "Customers",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "Customers",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "KycLevel",
                table: "Customers",
                type: "character varying(20)",
                maxLength: 20,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<DateTime>(
                name: "KycVerifiedAt",
                table: "Customers",
                type: "timestamp with time zone",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "KycVerifiedBy",
                table: "Customers",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "RiskRating",
                table: "Customers",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeletedAt",
                table: "CorridorPayoutPartners",
                type: "timestamp with time zone",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DeletedBy",
                table: "CorridorPayoutPartners",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "CorridorPayoutPartners",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeletedAt",
                table: "ComplianceRules",
                type: "timestamp with time zone",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DeletedBy",
                table: "ComplianceRules",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "ComplianceRules",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeletedAt",
                table: "CommissionRates",
                type: "timestamp with time zone",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DeletedBy",
                table: "CommissionRates",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "CommissionRates",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeletedAt",
                table: "Agents",
                type: "timestamp with time zone",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DeletedBy",
                table: "Agents",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "Agents",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeletedAt",
                table: "AgentLocationUsers",
                type: "timestamp with time zone",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DeletedBy",
                table: "AgentLocationUsers",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "AgentLocationUsers",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeletedAt",
                table: "AgentLocations",
                type: "timestamp with time zone",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DeletedBy",
                table: "AgentLocations",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "AgentLocations",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeletedAt",
                table: "AgentLocationBranches",
                type: "timestamp with time zone",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DeletedBy",
                table: "AgentLocationBranches",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "AgentLocationBranches",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeletedAt",
                table: "AgentCommissions",
                type: "timestamp with time zone",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DeletedBy",
                table: "AgentCommissions",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "AgentCommissions",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeletedAt",
                table: "AgentBanks",
                type: "timestamp with time zone",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DeletedBy",
                table: "AgentBanks",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "AgentBanks",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeletedAt",
                table: "AgentBankBranches",
                type: "timestamp with time zone",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DeletedBy",
                table: "AgentBankBranches",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "AgentBankBranches",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.CreateTable(
                name: "AuditLogs",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    EntityName = table.Column<string>(type: "text", nullable: false),
                    EntityId = table.Column<string>(type: "text", nullable: false),
                    Action = table.Column<string>(type: "text", nullable: false),
                    OldValues = table.Column<string>(type: "text", nullable: true),
                    NewValues = table.Column<string>(type: "text", nullable: true),
                    ChangedColumns = table.Column<string>(type: "text", nullable: true),
                    UserId = table.Column<string>(type: "text", nullable: true),
                    UserName = table.Column<string>(type: "text", nullable: true),
                    Timestamp = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    IpAddress = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AuditLogs", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "SanctionsScreeningResults",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    ScreenedName = table.Column<string>(type: "text", nullable: false),
                    ScreenedType = table.Column<string>(type: "text", nullable: false),
                    Status = table.Column<string>(type: "character varying(20)", maxLength: 20, nullable: false),
                    MatchedName = table.Column<string>(type: "text", nullable: true),
                    MatchedListSource = table.Column<string>(type: "text", nullable: true),
                    MatchScore = table.Column<double>(type: "double precision", nullable: true),
                    TransactionId = table.Column<long>(type: "bigint", nullable: true),
                    CustomerId = table.Column<int>(type: "integer", nullable: true),
                    ReviewedBy = table.Column<string>(type: "text", nullable: true),
                    ReviewedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    ReviewNotes = table.Column<string>(type: "text", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SanctionsScreeningResults", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AuditLogs_EntityName",
                table: "AuditLogs",
                column: "EntityName");

            migrationBuilder.CreateIndex(
                name: "IX_AuditLogs_Timestamp",
                table: "AuditLogs",
                column: "Timestamp");

            migrationBuilder.CreateIndex(
                name: "IX_AuditLogs_UserId",
                table: "AuditLogs",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_SanctionsScreeningResults_CustomerId",
                table: "SanctionsScreeningResults",
                column: "CustomerId");

            migrationBuilder.CreateIndex(
                name: "IX_SanctionsScreeningResults_ScreenedName",
                table: "SanctionsScreeningResults",
                column: "ScreenedName");

            migrationBuilder.CreateIndex(
                name: "IX_SanctionsScreeningResults_TransactionId",
                table: "SanctionsScreeningResults",
                column: "TransactionId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AuditLogs");

            migrationBuilder.DropTable(
                name: "SanctionsScreeningResults");

            migrationBuilder.DropColumn(
                name: "DeletedAt",
                table: "Receivers");

            migrationBuilder.DropColumn(
                name: "DeletedBy",
                table: "Receivers");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "Receivers");

            migrationBuilder.DropColumn(
                name: "DeletedAt",
                table: "PaymentCorridors");

            migrationBuilder.DropColumn(
                name: "DeletedBy",
                table: "PaymentCorridors");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "PaymentCorridors");

            migrationBuilder.DropColumn(
                name: "DeletedAt",
                table: "ExchangeRates");

            migrationBuilder.DropColumn(
                name: "DeletedBy",
                table: "ExchangeRates");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "ExchangeRates");

            migrationBuilder.DropColumn(
                name: "DeletedAt",
                table: "Customers");

            migrationBuilder.DropColumn(
                name: "DeletedBy",
                table: "Customers");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "Customers");

            migrationBuilder.DropColumn(
                name: "KycLevel",
                table: "Customers");

            migrationBuilder.DropColumn(
                name: "KycVerifiedAt",
                table: "Customers");

            migrationBuilder.DropColumn(
                name: "KycVerifiedBy",
                table: "Customers");

            migrationBuilder.DropColumn(
                name: "RiskRating",
                table: "Customers");

            migrationBuilder.DropColumn(
                name: "DeletedAt",
                table: "CorridorPayoutPartners");

            migrationBuilder.DropColumn(
                name: "DeletedBy",
                table: "CorridorPayoutPartners");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "CorridorPayoutPartners");

            migrationBuilder.DropColumn(
                name: "DeletedAt",
                table: "ComplianceRules");

            migrationBuilder.DropColumn(
                name: "DeletedBy",
                table: "ComplianceRules");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "ComplianceRules");

            migrationBuilder.DropColumn(
                name: "DeletedAt",
                table: "CommissionRates");

            migrationBuilder.DropColumn(
                name: "DeletedBy",
                table: "CommissionRates");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "CommissionRates");

            migrationBuilder.DropColumn(
                name: "DeletedAt",
                table: "Agents");

            migrationBuilder.DropColumn(
                name: "DeletedBy",
                table: "Agents");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "Agents");

            migrationBuilder.DropColumn(
                name: "DeletedAt",
                table: "AgentLocationUsers");

            migrationBuilder.DropColumn(
                name: "DeletedBy",
                table: "AgentLocationUsers");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "AgentLocationUsers");

            migrationBuilder.DropColumn(
                name: "DeletedAt",
                table: "AgentLocations");

            migrationBuilder.DropColumn(
                name: "DeletedBy",
                table: "AgentLocations");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "AgentLocations");

            migrationBuilder.DropColumn(
                name: "DeletedAt",
                table: "AgentLocationBranches");

            migrationBuilder.DropColumn(
                name: "DeletedBy",
                table: "AgentLocationBranches");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "AgentLocationBranches");

            migrationBuilder.DropColumn(
                name: "DeletedAt",
                table: "AgentCommissions");

            migrationBuilder.DropColumn(
                name: "DeletedBy",
                table: "AgentCommissions");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "AgentCommissions");

            migrationBuilder.DropColumn(
                name: "DeletedAt",
                table: "AgentBanks");

            migrationBuilder.DropColumn(
                name: "DeletedBy",
                table: "AgentBanks");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "AgentBanks");

            migrationBuilder.DropColumn(
                name: "DeletedAt",
                table: "AgentBankBranches");

            migrationBuilder.DropColumn(
                name: "DeletedBy",
                table: "AgentBankBranches");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "AgentBankBranches");
        }
    }
}
