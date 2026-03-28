$targetPath = "C:\Users\quant\Documents\vendedor-digital"
$shortcutPath = [System.IO.Path]::Combine([System.Environment]::GetFolderPath('Desktop'), "Vendedor Digital Project.lnk")
$WshShell = New-Object -ComObject WScript.Shell
$Shortcut = $WshShell.CreateShortcut($shortcutPath)
$Shortcut.TargetPath = "$targetPath"
$Shortcut.Save()
Write-Host "¡Acceso directo creado en el escritorio apuntando a Documentos!" -ForegroundColor Green
