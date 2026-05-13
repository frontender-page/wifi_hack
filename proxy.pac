function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "nz.ua") || shExpMatch(host, "*.nz.ua")) {
        // Твой IP: 192.168.1.26
        // Добавляем DIRECT как запасной вариант
        return "PROXY 192.168.1.26:8080; DIRECT";
    }
    return "DIRECT";
}
