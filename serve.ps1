# Pasumai AgriScan - Zero-Dependency Local Web Server
# Uses Windows built-in .NET HttpListener

$port = 8080
$prefix = "http://localhost:$port/"
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($prefix)

try {
    $listener.Start()
    Write-Host "==========================================================" -ForegroundColor Green
    Write-Host " 🌾 Pasumai AgriScan Server Running on: $prefix" -ForegroundColor Cyan
    Write-Host " Opening application in your browser..." -ForegroundColor Yellow
    Write-Host " Press Ctrl+C in this terminal window to stop the server." -ForegroundColor Gray
    Write-Host "==========================================================" -ForegroundColor Green

    # Launch browser
    Start-Process $prefix

    $baseDir = $PSScriptRoot
    if (-not $baseDir) { $baseDir = Get-Location }

    $mimeTypes = @{
        ".html" = "text/html";
        ".htm"  = "text/html";
        ".css"  = "text/css";
        ".js"   = "application/javascript";
        ".json" = "application/json";
        ".png"  = "image/png";
        ".jpg"  = "image/jpeg";
        ".jpeg" = "image/jpeg";
        ".svg"  = "image/svg+xml";
        ".ico"  = "image/x-icon"
    }

    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $urlPath = $request.Url.LocalPath.TrimStart('/')
        if ([string]::IsNullOrEmpty($urlPath)) {
            $urlPath = "index.html"
        }

        $filePath = Join-Path $baseDir $urlPath

        if (Test-Path $filePath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $mime = "application/octet-stream"
            if ($mimeTypes.ContainsKey($ext)) {
                $mime = $mimeTypes[$ext]
            }

            $response.ContentType = $mime
            $response.StatusCode = 200

            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $errBytes = [System.Text.Encoding]::UTF8.GetBytes("404 - Not Found")
            $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
        }
        $response.OutputStream.Close()
    }
}
catch {
    Write-Host "Server error: $_" -ForegroundColor Red
}
finally {
    $listener.Stop()
}
