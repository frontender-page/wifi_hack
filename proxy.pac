function FindProxyForURL(url, host) {
    if (shExpMatch(host, "nz.ua") || shExpMatch(host, "*.nz.ua")) {
        // Пробуем явно указать HTTPS прокси, если mitmproxy настроен на него
        return "PROXY 192.168.1.26:8080; DIRECT";
    }
    return "DIRECT";
}
