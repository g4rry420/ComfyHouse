$ipAddress = (
  Get-NetIPConfiguration |
  Where-Object {
    $_.IPv4DefaultGateway -ne $null -and
    $_.NetAdapter.Status -ne "Disconnected"
  }
).IPv4Address.IPAddress

Write-Host "Remove IP to EC2 Inbound rule ----- START"
aws.exe ec2 revoke-security-group-ingress --region $env:AWS_REGION_NAME --group-id $env:AWS_SECURITY_GROUP_ID --protocol tcp --port $env:AWS_PORT --cidr "$ipAddress/32"
Write-Host "Remove IP to EC2 Inbound rule ----- END"

Write-Host "Removing AWS Credentials ----- START"
$path = Split-Path -parent $HOME
Remove-Item "$($path)\circleci\.aws\config" -Force
Remove-Item "$($path)\circleci\.aws\credentials" -Force
Write-Host "Removing AWS Credentials ----- END"

Write-Host "Check AWS Credentials ----- START"
aws.exe configure list
Write-Host "Check AWS Credentials ----- END"
