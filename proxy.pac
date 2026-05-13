function FindProxyForURL(url, host) {
    // Если заходим на школьный портал
    if (dnsDomainIs(host, "nz.ua") || shExpMatch(host, "*.nz.ua")) {
        // Направляем трафик на твой снайперский пост в cPanel
        return "PROXY 91.239.232.167:8081; DIRECT";
    }

    // Весь остальной интернет идет напрямую
    return "DIRECT";
}
