$password = ConvertTo-SecureString $env:AWS_EC2_PASSWORD -AsPlainText -Force
$creds = New-Object System.Management.Automation.PSCredential ($env:AWS_SERVER_USER, $password)

#Establishing an SFTP session
$Session = New-SFTPSession -ComputerName $env:AWS_SERVER_HOSTNAME -Credential $creds

$path = Split-Path -parent $PSScriptRoot

$ListFiles = Get-ChildItem -LiteralPath "$($path)\build" -Depth 0

Write-Host "Started Sending Files to EC2"

foreach ($File in $ListFiles) {
  Set-SFTPItem -SessionId $Session.SessionId -Destination "/C:/inetpub/wwwroot/" -Path "$($path)\build\$($File.Name)" -Force
}

Write-Host "Finished Sending Files to EC2"

Remove-SFTPSession $Session.SessionId -Verbose
