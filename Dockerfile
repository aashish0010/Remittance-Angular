FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS base
WORKDIR /app
EXPOSE 8080

FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

# Copy csproj files and restore
COPY Remittance.Domain/Remittance.Domain.csproj Remittance.Domain/
COPY Remittance.Application/Remittance.Application.csproj Remittance.Application/
COPY Remittance.Infrastructure/Remittance.Infrastructure.csproj Remittance.Infrastructure/
COPY Remittance.API/Remittance.API.csproj Remittance.API/
RUN dotnet restore Remittance.API/Remittance.API.csproj

# Copy everything and build
COPY Remittance.Domain/ Remittance.Domain/
COPY Remittance.Application/ Remittance.Application/
COPY Remittance.Infrastructure/ Remittance.Infrastructure/
COPY Remittance.API/ Remittance.API/
RUN dotnet publish Remittance.API/Remittance.API.csproj -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .
ENV ASPNETCORE_URLS=http://+:8080
ENTRYPOINT ["dotnet", "Remittance.API.dll"]
