function FindProxyForURL(url, host) {
    // 1. Условие: только для школьного портала
    if (dnsDomainIs(host, "nz.ua") || shExpMatch(host, "*.nz.ua")) {
        // 2. Твой локальный IP и порт, на котором запустишь mitmproxy в VS Code
        // Замени 192.168.1.15 на свой реальный IP
        return "PROXY 192.168.1.26:8080; DIRECT";
    }

    // 3. Всё остальное — без прокси, чтобы интернет не тормозил
    return "DIRECT";
}
