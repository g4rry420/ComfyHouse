$ErrorActionPreference = "Stop"
$password = ConvertTo-SecureString '.&VAqy(AW=MoDZASsHDK-FOF39yzJvjM' -AsPlainText -Force
$creds = New-Object System.Management.Automation.PSCredential ('Administrator', $password)

#Establishing an SFTP session
$Session = New-SFTPSession -ComputerName '18.233.81.38' -Credential $creds -Verbose

$path = Split-Path -parent $PSScriptRoot

$localBackUpFolderExists = Test-Path -Path "$($path)\backup"

if (-not $localBackUpFolderExists) {
  New-Item -ItemType "directory" -Path "$($path)\backup"
}

Get-SFTPItem -SessionId $Session.SessionId -Path "/C:/inetpub/wwwroot/" -Destination "$($path)/backup/" -Verbose

$IsBackupFolderExists = Test-SFTPPath -SessionId $Session.SessionId -Path "/C:/inetpub/wwwroot/backup"

if (-not $IsBackupFolderExists) {
  New-SFTPItem -SessionId $Session.SessionId -Path "/C:/inetpub/wwwroot/backup" -ItemType Directory -Verbose
}

$BackupFiles = Get-ChildItem -LiteralPath "$($path)\backup" -Depth 0

foreach ($File in $BackupFiles) {
  Set-SFTPItem -SessionId $Session.SessionId -Destination "/C:/inetpub/wwwroot/backup/" -Path "$($path)\build\$($File.Name)" -Force
}

# Move-SFTPItem -SessionId $Session.SessionId -Path "/C:/inetpub/wwwroot/" -Destination "/C:/inetpub/backup" -Verbose


Remove-SFTPSession $Session.SessionId -Verbose
