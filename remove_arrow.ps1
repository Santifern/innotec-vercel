$f = 'app\pages\index.vue'
$bytes = [System.IO.File]::ReadAllBytes($f)
$text = [System.Text.Encoding]::UTF8.GetString($bytes)
$pattern = "(\r?\n)\s+<span class=""hero-btn-arrow"" aria-hidden=""true"">&rarr;</span>"
$text = [System.Text.RegularExpressions.Regex]::Replace($text, $pattern, '')
[System.IO.File]::WriteAllBytes($f, [System.Text.Encoding]::UTF8.GetBytes($text))
Write-Host "Done"
