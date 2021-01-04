# react-privateroute

* React と Laravel Sanctum との連携（最小限構成）

react-privateroute からの Fork.  
[react-privateroute](https://github.com/hirolog/react-privateroute)

react-privateroute は、外部連携しておらず、codesandboxなど単体で動作確認できる。  
これを拡張し、外部APIへのログイン機能を加えた物。  

外部APIは Laravel Sanctum を想定。  
\utils\auth\apiAuth.jp  
で実際にAPIに投げている。