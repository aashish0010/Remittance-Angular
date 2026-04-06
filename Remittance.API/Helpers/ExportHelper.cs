using ClosedXML.Excel;
using System.Reflection;
using System.Text;

namespace Remittance.API.Helpers;

public static class ExportHelper
{
    public static byte[] ToExcel<T>(IEnumerable<T> data, string sheetName = "Sheet1")
    {
        using var workbook = new XLWorkbook();
        var worksheet = workbook.Worksheets.Add(sheetName);

        var properties = typeof(T).GetProperties(BindingFlags.Public | BindingFlags.Instance);

        // Headers
        for (int i = 0; i < properties.Length; i++)
            worksheet.Cell(1, i + 1).Value = properties[i].Name;

        // Style header row
        var headerRange = worksheet.Range(1, 1, 1, properties.Length);
        headerRange.Style.Font.Bold = true;
        headerRange.Style.Fill.BackgroundColor = XLColor.LightGray;

        // Data rows
        var items = data.ToList();
        for (int row = 0; row < items.Count; row++)
        {
            for (int col = 0; col < properties.Length; col++)
            {
                var value = properties[col].GetValue(items[row]);
                var cell = worksheet.Cell(row + 2, col + 1);
                if (value == null)
                    cell.Value = "";
                else if (value is DateTime dt)
                    cell.Value = dt;
                else if (value is decimal dec)
                    cell.Value = dec;
                else if (value is int intVal)
                    cell.Value = intVal;
                else if (value is double dbl)
                    cell.Value = dbl;
                else if (value is bool boolVal)
                    cell.Value = boolVal ? "Yes" : "No";
                else
                    cell.Value = value.ToString();
            }
        }

        worksheet.Columns().AdjustToContents();

        using var stream = new MemoryStream();
        workbook.SaveAs(stream);
        return stream.ToArray();
    }

    public static byte[] ToCsv<T>(IEnumerable<T> data)
    {
        var properties = typeof(T).GetProperties(BindingFlags.Public | BindingFlags.Instance);
        var sb = new StringBuilder();

        // Header
        sb.AppendLine(string.Join(",", properties.Select(p => EscapeCsv(p.Name))));

        // Rows
        foreach (var item in data)
        {
            var values = properties.Select(p =>
            {
                var val = p.GetValue(item);
                return EscapeCsv(val?.ToString() ?? "");
            });
            sb.AppendLine(string.Join(",", values));
        }

        return Encoding.UTF8.GetPreamble().Concat(Encoding.UTF8.GetBytes(sb.ToString())).ToArray();
    }

    private static string EscapeCsv(string value)
    {
        if (value.Contains(',') || value.Contains('"') || value.Contains('\n'))
            return $"\"{value.Replace("\"", "\"\"")}\"";
        return value;
    }
}
