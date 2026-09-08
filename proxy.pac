function FindProxyForURL(url, host) {
    // 1. Перехватываем mitm.it — для скачивания сертификата
    if (host == "mitm.it") {
        return "PROXY 192.168.1.6:8080";
    }

    // 2. Перехватываем nz.ua и все поддомены (*.nz.ua)
    if (dnsDomainIs(host, "nz.ua") || shExpMatch(host, "*.nz.ua")) {
        return "PROXY 192.168.1.6:8080";
    }

    // 3. ВСЁ ОСТАЛЬНОЕ — напрямую (без прокси)
    return "DIRECT";
}
