using Microsoft.EntityFrameworkCore;
using Remittance.Domain.Entities;
using Remittance.Domain.Enums;

namespace Remittance.Infrastructure.Data;

public static class DbSeeder
{
    public static async Task SeedAsync(ApplicationDbContext context)
    {
        // NOTE: Do NOT call EnsureCreatedAsync() here — Program.cs already calls MigrateAsync()
        // which is the correct approach. Mixing both causes conflicts.

        // Always seed static values and ensure menus are up-to-date (both are idempotent)
        await SeedStaticValuesAsync(context);
        await SeedMissingMenusAsync(context);

        if (await context.Roles.AnyAsync())
            return;

        // Seed Roles
        var roles = new List<Role>
        {
            new() { Name = "SystemAdmin", RoleType = RoleType.SystemAdmin, Portal = PortalType.Admin, Description = "Full system access" },
            new() { Name = "Admin", RoleType = RoleType.Admin, Portal = PortalType.Admin, Description = "Administrative access" },
            new() { Name = "Compliance", RoleType = RoleType.Compliance, Portal = PortalType.Admin, Description = "Compliance and AML monitoring" },
            new() { Name = "Operations", RoleType = RoleType.Operations, Portal = PortalType.Admin, Description = "Operations management" },
            new() { Name = "Agent", RoleType = RoleType.Agent, Portal = PortalType.Agent, Description = "Agent portal access" },
            new() { Name = "Customer", RoleType = RoleType.Customer, Portal = PortalType.Customer, Description = "Customer self-service" }
        };
        await context.Roles.AddRangeAsync(roles);
        await context.SaveChangesAsync();

        // Seed Menus — Admin portal (matches sidebar layout)
        var adminDashboard = new Menu { Name = "Dashboard", Icon = "dashboard", Url = "/admin/dashboard", DisplayOrder = 1, Portal = PortalType.Admin };
        var agentMgmt = new Menu { Name = "Agents", Icon = "people_outline", Url = "/admin/agents", DisplayOrder = 2, Portal = PortalType.Admin };
        var agentSetup = new Menu { Name = "Agent Setup", Icon = "tune", Url = "/admin/setup", DisplayOrder = 3, Portal = PortalType.Admin };
        var custRegister = new Menu { Name = "Customer Register", Icon = "person_add_alt", Url = "/admin/customer-register", DisplayOrder = 4, Portal = PortalType.Admin };
        var custReport = new Menu { Name = "Customer Report", Icon = "assessment", Url = "/admin/customer-report", DisplayOrder = 5, Portal = PortalType.Admin };
        var receiversMenu = new Menu { Name = "Receivers", Icon = "contact_phone", Url = "/admin/receivers", DisplayOrder = 6, Portal = PortalType.Admin };
        var rateMgmt = new Menu { Name = "Exchange Rates", Icon = "currency_exchange", Url = "/admin/rates", DisplayOrder = 7, Portal = PortalType.Admin };
        var commMgmt = new Menu { Name = "Service Charges", Icon = "payments", Url = "/admin/commissions", DisplayOrder = 8, Portal = PortalType.Admin };
        var routingMenu = new Menu { Name = "Routing", Icon = "alt_route", Url = "/admin/routing", DisplayOrder = 9, Portal = PortalType.Admin };
        var txnMgmt = new Menu { Name = "Transactions", Icon = "receipt_long", Url = "/admin/transactions", DisplayOrder = 10, Portal = PortalType.Admin };
        var compSetup = new Menu { Name = "Compliance Setup", Icon = "tune", Url = "/admin/compliance-setup", DisplayOrder = 11, Portal = PortalType.Admin };
        var compAlerts = new Menu { Name = "Compliance Alerts", Icon = "security", Url = "/admin/compliance", DisplayOrder = 12, Portal = PortalType.Admin };
        var staticValues = new Menu { Name = "Static Values", Icon = "dataset", Url = "/admin/static-values", DisplayOrder = 13, Portal = PortalType.Admin };
        var reportAgentStmt = new Menu { Name = "Agent Statement", Icon = "account_balance", Url = "/admin/reports/agent-statement", DisplayOrder = 14, Portal = PortalType.Admin };
        var reportTxn = new Menu { Name = "Transaction Report", Icon = "summarize", Url = "/admin/reports/transactions", DisplayOrder = 15, Portal = PortalType.Admin };
        var reportComm = new Menu { Name = "Commission Report", Icon = "paid", Url = "/admin/reports/commissions", DisplayOrder = 16, Portal = PortalType.Admin };
        var reportRevenue = new Menu { Name = "Revenue Report", Icon = "trending_up", Url = "/admin/reports/revenue", DisplayOrder = 17, Portal = PortalType.Admin };
        var reportSettlement = new Menu { Name = "Settlement Report", Icon = "handshake", Url = "/admin/reports/settlement", DisplayOrder = 18, Portal = PortalType.Admin };
        var userMgmtRoles = new Menu { Name = "Roles", Icon = "badge", Url = "/admin/user-management/roles", DisplayOrder = 19, Portal = PortalType.Admin };
        var userMgmtUsers = new Menu { Name = "Users", Icon = "group", Url = "/admin/user-management/users", DisplayOrder = 20, Portal = PortalType.Admin };

        // Agent portal
        var agentDashboard = new Menu { Name = "Dashboard", Icon = "dashboard", Url = "/agent/dashboard", DisplayOrder = 1, Portal = PortalType.Agent };
        var sendMoney = new Menu { Name = "Send Money", Icon = "send", Url = "/agent/send", DisplayOrder = 2, Portal = PortalType.Agent };
        var agentTxns = new Menu { Name = "My Transactions", Icon = "history", Url = "/agent/transactions", DisplayOrder = 3, Portal = PortalType.Agent };
        var agentComm = new Menu { Name = "My Service Charges", Icon = "account_balance_wallet", Url = "/agent/commissions", DisplayOrder = 4, Portal = PortalType.Agent };

        // Customer portal
        var custDashboard = new Menu { Name = "Dashboard", Icon = "dashboard", Url = "/customer/dashboard", DisplayOrder = 1, Portal = PortalType.Customer };
        var custSend = new Menu { Name = "Send Money", Icon = "send", Url = "/customer/send", DisplayOrder = 2, Portal = PortalType.Customer };
        var custTxns = new Menu { Name = "My Transactions", Icon = "history", Url = "/customer/transactions", DisplayOrder = 3, Portal = PortalType.Customer };

        var menus = new List<Menu>
        {
            adminDashboard, agentMgmt, agentSetup, custRegister, custReport,
            receiversMenu, rateMgmt, commMgmt, routingMenu, txnMgmt,
            compSetup, compAlerts, staticValues,
            reportAgentStmt, reportTxn, reportComm, reportRevenue, reportSettlement,
            userMgmtRoles, userMgmtUsers,
            agentDashboard, sendMoney, agentTxns, agentComm,
            custDashboard, custSend, custTxns
        };
        await context.Menus.AddRangeAsync(menus);
        await context.SaveChangesAsync();

        // Seed Permissions (Read, Write, Approve, Delete for each menu)
        var permissions = new List<Permission>();
        foreach (var menu in menus)
        {
            foreach (var action in new[] { "Read", "Write", "Approve", "Delete" })
            {
                permissions.Add(new Permission { MenuId = menu.Id, ActionName = action });
            }
        }
        await context.Permissions.AddRangeAsync(permissions);
        await context.SaveChangesAsync();

        // Assign all admin permissions to SystemAdmin
        var sysAdminRole = roles.First(r => r.Name == "SystemAdmin");
        var adminPermissions = await context.Permissions
            .Where(p => context.Menus.Any(m => m.Id == p.MenuId && m.Portal == PortalType.Admin))
            .ToListAsync();

        foreach (var perm in adminPermissions)
        {
            await context.RolePermissions.AddAsync(new RolePermission
            {
                RoleId = sysAdminRole.Id,
                PermissionId = perm.Id
            });
        }

        // Assign compliance permissions
        var compRole = roles.First(r => r.Name == "Compliance");
        var compMenuNames = new[] { "Dashboard", "Compliance Setup", "Compliance Alerts", "Transactions", "Customer Report" };
        var compPerms = await context.Permissions
            .Where(p => compMenuNames.Contains(p.Menu.Name) && p.Menu.Portal == PortalType.Admin)
            .ToListAsync();
        foreach (var perm in compPerms)
        {
            await context.RolePermissions.AddAsync(new RolePermission { RoleId = compRole.Id, PermissionId = perm.Id });
        }

        // Assign Admin role permissions (everything except User Management)
        var adminRole = roles.First(r => r.Name == "Admin");
        var adminExclude = new[] { "Roles", "Users" };
        var adminRolePerms = await context.Permissions
            .Where(p => !adminExclude.Contains(p.Menu.Name) && p.Menu.Portal == PortalType.Admin)
            .ToListAsync();
        foreach (var perm in adminRolePerms)
        {
            await context.RolePermissions.AddAsync(new RolePermission { RoleId = adminRole.Id, PermissionId = perm.Id });
        }

        // Assign operations permissions (no compliance, no user management)
        var opsRole = roles.First(r => r.Name == "Operations");
        var opsExclude = new[] { "Compliance Setup", "Compliance Alerts", "Roles", "Users" };
        var opsPerms = await context.Permissions
            .Where(p => !opsExclude.Contains(p.Menu.Name) && p.Menu.Portal == PortalType.Admin)
            .ToListAsync();
        foreach (var perm in opsPerms)
        {
            await context.RolePermissions.AddAsync(new RolePermission { RoleId = opsRole.Id, PermissionId = perm.Id });
        }

        // Assign agent permissions
        var agentRole = roles.First(r => r.Name == "Agent");
        var agentPerms = await context.Permissions
            .Where(p => p.Menu.Portal == PortalType.Agent)
            .ToListAsync();
        foreach (var perm in agentPerms)
        {
            await context.RolePermissions.AddAsync(new RolePermission { RoleId = agentRole.Id, PermissionId = perm.Id });
        }

        // Assign customer permissions
        var custRole = roles.First(r => r.Name == "Customer");
        var custPerms = await context.Permissions
            .Where(p => p.Menu.Portal == PortalType.Customer)
            .ToListAsync();
        foreach (var perm in custPerms)
        {
            await context.RolePermissions.AddAsync(new RolePermission { RoleId = custRole.Id, PermissionId = perm.Id });
        }

        await context.SaveChangesAsync();

        // Seed default SystemAdmin user
        var adminUser = new ApplicationUser
        {
            FullName = "System Administrator",
            Email = "admin@remittance.com",
            UserName = "admin@remittance.com",
            PasswordHash = BCrypt.Net.BCrypt.HashPassword("Admin@123"),
            PhoneNumber = "0000000000"
        };
        await context.Users.AddAsync(adminUser);
        await context.UserRoles.AddAsync(new UserRole { UserId = adminUser.Id, RoleId = sysAdminRole.Id });

        // Seed Payment Methods
        await context.AgentPaymentMethods.AddRangeAsync(
            new AgentPaymentMethod { Name = "Cash Payment" },
            new AgentPaymentMethod { Name = "Bank Transfer" },
            new AgentPaymentMethod { Name = "Wallet Payment" }
        );
        await context.SaveChangesAsync();

        await context.SaveChangesAsync();
    }

    // -----------------------------------------------------------------------
    // Idempotent Menu Seeder — runs on every startup, adds missing menus only
    // -----------------------------------------------------------------------
    private static async Task SeedMissingMenusAsync(ApplicationDbContext context)
    {
        // Menus that may have been added after the initial seed
        var missingMenus = new[]
        {
            new { Url = "/admin/sanctions",  Name = "Sanctions",      Icon = "gavel",        Order = 13, Portal = PortalType.Admin },
            new { Url = "/admin/settings",   Name = "Settings",       Icon = "settings_cog", Order = 21, Portal = PortalType.Admin },
        };

        var changed = false;

        foreach (var m in missingMenus)
        {
            if (!await context.Menus.AnyAsync(x => x.Url == m.Url))
            {
                var menu = new Menu
                {
                    Name = m.Name,
                    Icon = m.Icon,
                    Url = m.Url,
                    DisplayOrder = m.Order,
                    Portal = m.Portal
                };
                await context.Menus.AddAsync(menu);
                await context.SaveChangesAsync();

                // Add Read/Write/Approve/Delete permissions for this menu
                var newPerms = new List<Permission>();
                foreach (var action in new[] { "Read", "Write", "Approve", "Delete" })
                    newPerms.Add(new Permission { MenuId = menu.Id, ActionName = action });

                await context.Permissions.AddRangeAsync(newPerms);
                await context.SaveChangesAsync();

                // Grant all permissions to SystemAdmin role
                var sysAdminRole = await context.Roles.FirstOrDefaultAsync(r => r.RoleType == RoleType.SystemAdmin);
                if (sysAdminRole != null)
                {
                    foreach (var perm in newPerms)
                    {
                        var alreadyHas = await context.RolePermissions
                            .AnyAsync(rp => rp.RoleId == sysAdminRole.Id && rp.PermissionId == perm.Id);
                        if (!alreadyHas)
                            await context.RolePermissions.AddAsync(new RolePermission { RoleId = sysAdminRole.Id, PermissionId = perm.Id });
                    }
                }

                // Grant Read/Write to Admin role — except Settings (SystemAdmin only)
                if (m.Url != "/admin/settings")
                {
                    var adminRole = await context.Roles.FirstOrDefaultAsync(r => r.RoleType == RoleType.Admin);
                    if (adminRole != null)
                    {
                        var readPerm = newPerms.First(p => p.ActionName == "Read");
                        var writePerm = newPerms.First(p => p.ActionName == "Write");
                        var alreadyHasRead = await context.RolePermissions
                            .AnyAsync(rp => rp.RoleId == adminRole.Id && rp.PermissionId == readPerm.Id);
                        if (!alreadyHasRead)
                        {
                            await context.RolePermissions.AddAsync(new RolePermission { RoleId = adminRole.Id, PermissionId = readPerm.Id });
                            await context.RolePermissions.AddAsync(new RolePermission { RoleId = adminRole.Id, PermissionId = writePerm.Id });
                        }
                    }
                }

                changed = true;
            }
        }

        if (changed) await context.SaveChangesAsync();

        // Ensure Settings menu is SystemAdmin-only — revoke any existing non-SystemAdmin permissions
        var settingsMenu = await context.Menus.FirstOrDefaultAsync(m => m.Url == "/admin/settings");
        if (settingsMenu != null)
        {
            var nonSysAdminRoles = await context.Roles
                .Where(r => r.RoleType != RoleType.SystemAdmin)
                .Select(r => r.Id)
                .ToListAsync();

            var unwantedPerms = await context.RolePermissions
                .Where(rp => nonSysAdminRoles.Contains(rp.RoleId) && rp.Permission.MenuId == settingsMenu.Id)
                .ToListAsync();

            if (unwantedPerms.Any())
            {
                context.RolePermissions.RemoveRange(unwantedPerms);
                await context.SaveChangesAsync();
            }
        }
    }

    // -----------------------------------------------------------------------
    // Static Values Seeder
    // -----------------------------------------------------------------------
    private static async Task SeedStaticValuesAsync(ApplicationDbContext context)
    {
        var changed = false;

        // -- Countries (Description stores the currency code) --
        if (!await context.SetupFields.AnyAsync(f => f.Category == SetupFieldCategory.Country))
        {
            var order = 0;
            var countryList = new (string Name, string Code, string Currency)[]
            {
                ("United States", "US", "USD"), ("United Kingdom", "GB", "GBP"),
                ("Canada", "CA", "CAD"), ("Australia", "AU", "AUD"),
                ("Germany", "DE", "EUR"), ("France", "FR", "EUR"),
                ("India", "IN", "INR"), ("Nepal", "NP", "NPR"),
                ("Philippines", "PH", "PHP"), ("Bangladesh", "BD", "BDT"),
                ("Pakistan", "PK", "PKR"), ("Sri Lanka", "LK", "LKR"),
                ("Mexico", "MX", "MXN"), ("Brazil", "BR", "BRL"),
                ("Nigeria", "NG", "NGN"), ("Ghana", "GH", "GHS"),
                ("Kenya", "KE", "KES"), ("South Africa", "ZA", "ZAR"),
                ("United Arab Emirates", "AE", "AED"), ("Saudi Arabia", "SA", "SAR"),
                ("Qatar", "QA", "QAR"), ("Kuwait", "KW", "KWD"),
                ("Bahrain", "BH", "BHD"), ("Oman", "OM", "OMR"),
                ("Japan", "JP", "JPY"), ("South Korea", "KR", "KRW"),
                ("China", "CN", "CNY"), ("Indonesia", "ID", "IDR"),
                ("Malaysia", "MY", "MYR"), ("Singapore", "SG", "SGD"),
                ("Thailand", "TH", "THB"), ("Vietnam", "VN", "VND"),
                ("Egypt", "EG", "EGP"), ("Ethiopia", "ET", "ETB"),
                ("Somalia", "SO", "SOS"), ("Turkey", "TR", "TRY"),
                ("Italy", "IT", "EUR"), ("Spain", "ES", "EUR"),
                ("Netherlands", "NL", "EUR"), ("Sweden", "SE", "SEK")
            };
            foreach (var (name, code, currency) in countryList)
            {
                context.SetupFields.Add(new SetupField
                {
                    Category = SetupFieldCategory.Country,
                    Code = code,
                    Name = name,
                    Description = currency,
                    SortOrder = ++order
                });
            }
            changed = true;
        }

        // -- Currencies --
        if (!await context.SetupFields.AnyAsync(f => f.Category == SetupFieldCategory.Currency))
        {
            var order = 0;
            var currencies = new (string Code, string Name)[]
            {
                ("USD", "US Dollar"), ("EUR", "Euro"), ("GBP", "British Pound"),
                ("AUD", "Australian Dollar"), ("CAD", "Canadian Dollar"),
                ("INR", "Indian Rupee"), ("NPR", "Nepalese Rupee"),
                ("PHP", "Philippine Peso"), ("BDT", "Bangladeshi Taka"),
                ("PKR", "Pakistani Rupee"), ("LKR", "Sri Lankan Rupee"),
                ("MXN", "Mexican Peso"), ("BRL", "Brazilian Real"),
                ("NGN", "Nigerian Naira"), ("GHS", "Ghanaian Cedi"),
                ("KES", "Kenyan Shilling"), ("ZAR", "South African Rand"),
                ("AED", "UAE Dirham"), ("SAR", "Saudi Riyal"),
                ("QAR", "Qatari Riyal"), ("KWD", "Kuwaiti Dinar"),
                ("BHD", "Bahraini Dinar"), ("OMR", "Omani Rial"),
                ("JPY", "Japanese Yen"), ("KRW", "South Korean Won"),
                ("CNY", "Chinese Yuan"), ("IDR", "Indonesian Rupiah"),
                ("MYR", "Malaysian Ringgit"), ("SGD", "Singapore Dollar"),
                ("THB", "Thai Baht")
            };
            foreach (var (code, name) in currencies)
            {
                context.SetupFields.Add(new SetupField
                {
                    Category = SetupFieldCategory.Currency,
                    Code = code,
                    Name = name,
                    SortOrder = ++order
                });
            }
            changed = true;
        }

        // -- ID Types --
        if (!await context.SetupFields.AnyAsync(f => f.Category == SetupFieldCategory.IdType))
        {
            var order = 0;
            var idTypes = new (string Code, string Name)[]
            {
                ("PASSPORT", "Passport"),
                ("NATIONAL_ID", "National ID"),
                ("DRIVER_LICENSE", "Driver License"),
                ("RESIDENCE_PERMIT", "Residence Permit"),
                ("REFUGEE_CARD", "Refugee Card"),
                ("VOTER_ID", "Voter ID"),
                ("MILITARY_ID", "Military ID")
            };
            foreach (var (code, name) in idTypes)
            {
                context.SetupFields.Add(new SetupField
                {
                    Category = SetupFieldCategory.IdType,
                    Code = code,
                    Name = name,
                    SortOrder = ++order
                });
            }
            changed = true;
        }

        // -- Purpose of Remittance --
        if (!await context.SetupFields.AnyAsync(f => f.Category == SetupFieldCategory.Purpose))
        {
            var order = 0;
            var purposes = new (string Code, string Name)[]
            {
                ("FAMILY_SUPPORT", "Family Support"),
                ("EDUCATION", "Education / Tuition"),
                ("MEDICAL", "Medical Expenses"),
                ("SAVINGS", "Savings / Investment"),
                ("RENT", "Rent / Housing"),
                ("LOAN_REPAYMENT", "Loan Repayment"),
                ("BUSINESS", "Business / Trade"),
                ("GIFT", "Gift"),
                ("TRAVEL", "Travel"),
                ("SALARY", "Salary Payment"),
                ("CHARITY", "Charity / Donation"),
                ("OTHER", "Other")
            };
            foreach (var (code, name) in purposes)
            {
                context.SetupFields.Add(new SetupField
                {
                    Category = SetupFieldCategory.Purpose,
                    Code = code,
                    Name = name,
                    SortOrder = ++order
                });
            }
            changed = true;
        }

        // -- Source of Fund --
        if (!await context.SetupFields.AnyAsync(f => f.Category == SetupFieldCategory.SourceOfFund))
        {
            var order = 0;
            var sources = new (string Code, string Name)[]
            {
                ("SALARY", "Salary / Employment Income"),
                ("BUSINESS_INCOME", "Business Income"),
                ("SAVINGS", "Personal Savings"),
                ("PENSION", "Pension / Retirement"),
                ("INVESTMENT", "Investment Returns"),
                ("LOAN", "Loan Proceeds"),
                ("GIFT", "Gift / Inheritance"),
                ("PROPERTY_SALE", "Property Sale"),
                ("GOVERNMENT_AID", "Government Aid / Benefits"),
                ("OTHER", "Other")
            };
            foreach (var (code, name) in sources)
            {
                context.SetupFields.Add(new SetupField
                {
                    Category = SetupFieldCategory.SourceOfFund,
                    Code = code,
                    Name = name,
                    SortOrder = ++order
                });
            }
            changed = true;
        }

        // -- Payment Types --
        if (!await context.SetupFields.AnyAsync(f => f.Category == SetupFieldCategory.PaymentType))
        {
            var order = 0;
            var paymentTypes = new (string Code, string Name)[]
            {
                ("CASH", "Cash"),
                ("BANK_TRANSFER", "Bank Transfer"),
                ("MOBILE_WALLET", "Mobile Wallet"),
                ("DEBIT_CARD", "Debit Card"),
                ("CREDIT_CARD", "Credit Card")
            };
            foreach (var (code, name) in paymentTypes)
            {
                context.SetupFields.Add(new SetupField
                {
                    Category = SetupFieldCategory.PaymentType,
                    Code = code,
                    Name = name,
                    SortOrder = ++order
                });
            }
            changed = true;
        }

        if (changed) await context.SaveChangesAsync();

        // -- Document Type Configs --
        if (!await context.DocumentTypeConfigs.AnyAsync())
        {
            context.DocumentTypeConfigs.AddRange(
                new DocumentTypeConfig { Name = "Passport", Code = "PASSPORT", RequiredSides = 2, SortOrder = 1 },
                new DocumentTypeConfig { Name = "National ID", Code = "NATIONAL_ID", RequiredSides = 2, SortOrder = 2 },
                new DocumentTypeConfig { Name = "Driver License", Code = "DRIVER_LICENSE", RequiredSides = 2, SortOrder = 3 },
                new DocumentTypeConfig { Name = "Residence Permit", Code = "RESIDENCE_PERMIT", RequiredSides = 2, SortOrder = 4 },
                new DocumentTypeConfig { Name = "Utility Bill", Code = "UTILITY_BILL", RequiredSides = 1, SortOrder = 5 },
                new DocumentTypeConfig { Name = "Bank Statement", Code = "BANK_STATEMENT", RequiredSides = 1, SortOrder = 6 },
                new DocumentTypeConfig { Name = "Proof of Address", Code = "PROOF_ADDRESS", RequiredSides = 1, SortOrder = 7 }
            );
            await context.SaveChangesAsync();
        }

        // -- System Settings (idempotent — only adds missing keys) --
        var defaultSettings = new[]
        {
            // General
            new SystemSetting { Key = "general.companyName",  Value = "",  Description = "Company name shown in admin header and receipts" },
            // KYC
            new SystemSetting { Key = "kyc.enabled",              Value = "true",             Description = "Enforce KYC verification before transactions" },
            new SystemSetting { Key = "kyc.skipDocumentUpload",   Value = "false",            Description = "Allow customer creation without an ID document" },
            new SystemSetting { Key = "kyc.mandatoryIdTypes",     Value = "",                 Description = "Comma-separated list of required ID types (empty = any)" },
            new SystemSetting { Key = "kyc.minimumAge",           Value = "18",               Description = "Minimum customer age for transactions" },
            new SystemSetting { Key = "kyc.duplicateCheck",       Value = "false",            Description = "Check for duplicate customers on creation" },
            new SystemSetting { Key = "kyc.reverificationPeriod", Value = "0",               Description = "KYC reverification period in days (0 = never expires)" },
            // Transaction
            new SystemSetting { Key = "transaction.numberPrefix",             Value = "TXN",   Description = "Reference number prefix for transactions" },
            new SystemSetting { Key = "transaction.requirePurpose",           Value = "false", Description = "Require purpose of remittance" },
            new SystemSetting { Key = "transaction.requireSourceOfFunds",     Value = "false", Description = "Require source of funds" },
            new SystemSetting { Key = "transaction.allowQuickSend",           Value = "true",  Description = "Show quick-send shortcut on agent dashboard" },
            new SystemSetting { Key = "transaction.cancellationAllowed",      Value = "true",  Description = "Allow transaction cancellation" },
            new SystemSetting { Key = "transaction.cancellationWindow",       Value = "0",     Description = "Cancellation window in minutes (0 = no limit)" },
            new SystemSetting { Key = "transaction.requireManagerApproval",   Value = "false", Description = "Require manager approval above threshold" },
            new SystemSetting { Key = "transaction.managerApprovalThreshold", Value = "5000",  Description = "Amount threshold triggering manager approval" },
            new SystemSetting { Key = "transaction.autoComplete",             Value = "false", Description = "Auto-complete transactions on payout confirmation" },
            // Compliance
            new SystemSetting { Key = "compliance.singleTransactionLimit", Value = "0",     Description = "Max single transaction amount (0 = disabled)" },
            new SystemSetting { Key = "compliance.dailyLimit",             Value = "0",     Description = "Max daily transaction amount per customer (0 = disabled)" },
            new SystemSetting { Key = "compliance.structuringDetection",   Value = "false", Description = "Enable structuring (smurfing) detection" },
            new SystemSetting { Key = "compliance.structuringWindow",      Value = "7",     Description = "Structuring detection window in days" },
            new SystemSetting { Key = "compliance.structuringAmount",      Value = "9000",  Description = "Cumulative threshold for structuring detection" },
            // Exchange Rate
            new SystemSetting { Key = "rate.applyMargin",   Value = "true", Description = "Apply margin when calculating effective rate" },
            new SystemSetting { Key = "rate.defaultMargin", Value = "0",    Description = "Default margin when none is set on a rate" },
            new SystemSetting { Key = "rate.rounding",      Value = "2",    Description = "Decimal places for receive-amount rounding" },
            new SystemSetting { Key = "rate.lockDuration",  Value = "60",   Description = "Quote lock duration in seconds" },
            // Agent & Commission
            new SystemSetting { Key = "fee.agentCommissionEnabled",   Value = "true",             Description = "Show agent commission stats on the agent dashboard" },
            new SystemSetting { Key = "branch.agentTransactionLimit", Value = "0",               Description = "Per-transaction limit for agents (0 = disabled)" },
            new SystemSetting { Key = "branch.agentDailyLimit",       Value = "0",               Description = "Daily transaction total limit for agents (0 = disabled)" },
            new SystemSetting { Key = "payout.availableMethods",      Value = "CashPickup,BankDeposit", Description = "Enabled payout delivery methods" },
            // User & Security
            new SystemSetting { Key = "user.passwordPolicy",         Value = "Strong", Description = "Password strength: Basic | Medium | Strong" },
            new SystemSetting { Key = "user.sessionTimeout",         Value = "30",     Description = "Frontend idle-timeout in minutes" },
            new SystemSetting { Key = "user.maxLoginAttempts",       Value = "5",      Description = "Max failed login attempts before lockout (0 = disabled)" },
            new SystemSetting { Key = "user.lockoutDurationMinutes", Value = "30",     Description = "Account lockout duration in minutes" },
            // System & Maintenance
            new SystemSetting { Key = "system.maintenanceMode",    Value = "false",                                     Description = "Enable maintenance mode (shows banner, blocks API)" },
            new SystemSetting { Key = "system.maintenanceMessage", Value = "System is under maintenance. Please try again later.", Description = "Message shown during maintenance mode" },
        };

        // Add any missing keys
        var existingKeys = await context.SystemSettings.Select(s => s.Key).ToListAsync();
        var toAdd = defaultSettings.Where(s => !existingKeys.Contains(s.Key)).ToList();
        if (toAdd.Any())
        {
            context.SystemSettings.AddRange(toAdd);
            await context.SaveChangesAsync();
        }

        // Remove orphaned keys that are no longer part of the active settings schema
        var activeKeys = new HashSet<string>(defaultSettings.Select(s => s.Key));
        var orphans = await context.SystemSettings
            .Where(s => !activeKeys.Contains(s.Key))
            .ToListAsync();
        if (orphans.Any())
        {
            context.SystemSettings.RemoveRange(orphans);
            await context.SaveChangesAsync();
        }
    }
}
