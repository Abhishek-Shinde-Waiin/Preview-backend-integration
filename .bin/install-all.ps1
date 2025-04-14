#!/usr/bin/env pwsh
$basedir=Split-Path $MyInvocation.MyCommand.Definition -Parent

$exe=""
if ($PSVersionTable.PSVersion -lt "6.0" -or $IsWindows) {
  # Fix case when both the Windows and Linux builds of Node
  # are installed in the same directory
  $exe=".exe"
}
$ret=0
if (Test-Path "$basedir//usr/local/bin/node$exe") {
  # Support pipeline input
  if ($MyInvocation.ExpectingInput) {
    $input | & "$basedir//usr/local/bin/node$exe"  "$basedir/../install-all/index.js" $args
  } else {
    & "$basedir//usr/local/bin/node$exe"  "$basedir/../install-all/index.js" $args
  }
  $ret=$LASTEXITCODE
} else {
  # Support pipeline input
  if ($MyInvocation.ExpectingInput) {
    $input | & "/usr/local/bin/node$exe"  "$basedir/../install-all/index.js" $args
  } else {
    & "/usr/local/bin/node$exe"  "$basedir/../install-all/index.js" $args
  }
  $ret=$LASTEXITCODE
}
exit $ret
