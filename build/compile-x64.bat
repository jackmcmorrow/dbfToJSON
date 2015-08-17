cd ../src
jx compile dbfToJSON.jxp -native
rename dbfToJSON.exe dbfToSJON-x64.exe
mv -f dbfToSJON-x64.exe ../bin
