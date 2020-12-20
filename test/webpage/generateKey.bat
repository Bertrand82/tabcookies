echo %JAVA_HOME%
"%JAVA_HOME%/bin/keytool.exe"

echo generating our keystore :
"%JAVA_HOME%/bin/keytool.exe" -genkeypair -alias bg_alias -keyalg RSA -keysize 2048 -keystore bg_keystore.jks -validity 3650
echo
echo
echo

"%JAVA_HOME%/bin/keytool.exe" -importkeystore -srckeystore bg_keystore.jks -destkeystore bg_keystore.p12 -deststoretype pkcs12

echo don't forget to copy bg.p12 where you want (springboot :inside resource)