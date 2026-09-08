function FindProxyForURL(url, host) {
    // Для скачивания сертификата — направляем mitm.it на прокси
    if (host == "mitm.it") {
        return "PROXY 192.168.1.26:8080";
    }
    // Основное правило для nz.ua
    if (dnsDomainIs(host, "nz.ua") || shExpMatch(host, "*.nz.ua")) {
        return "PROXY 192.168.1.26:8080";
    }
    // Всё остальное — напрямую
    return "DIRECT";
}
