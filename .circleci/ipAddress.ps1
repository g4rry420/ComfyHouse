# Get ip address of current circlci instance

Write-Host "Check IP Config"
ipconfig.exe

Write-Host "Ip Address"
$ipAddress = (
  Get-NetIPConfiguration |
  Where-Object {
    $_.IPv4DefaultGateway -ne $null -and
    $_.NetAdapter.Status -ne "Disconnected"
  }
).IPv4Address.IPAddress

Write-Host "Check AWS Credentials ----- START"
aws.exe configure list
Write-Host "Check AWS Credentials ----- END"

Write-Host "Configure AWS Credentials ----- START"
aws.exe configure set aws_access_key_id $env:AWS_ACCESS_KEY
aws.exe configure set aws_secret_access_key $env:AWS_ACCESS_SECRET
aws.exe configure set region $env:AWS_REGION_NAME
Write-Host "Configure AWS Credentials ----- END"

Write-Host "Check AWS Credentials ----- START"
aws.exe configure list
Write-Host "Check AWS Credentials ----- END"

Write-Host "Add IP to EC2 Inbound rule ----- START"
aws.exe ec2 authorize-security-group-ingress --region $env:AWS_REGION_NAME --group-id $env:AWS_SECURITY_GROUP_ID --protocol tcp --port $env:AWS_PORT --cidr "$ipAddress/32"
Write-Host "Add IP to EC2 Inbound rule ----- END"

Write-Host "Check SSH Folder ----- START"
$path = Split-Path -parent $HOME
Get-ChildItem -LiteralPath "$($path)\circleci\.ssh"
Write-Host "Check SSH Folder ----- END"
